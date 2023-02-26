const express = require('express')
const mongoose = require('mongoose'); // installed mongoose
require('dotenv').config()
//require('dotenv').config()//

//import from models
const MyFruit = require('./models/fruit')
const MyVeggie = require('./models/veggie')

const app = express()

app.use(express.json()) //this will allow us to accept js object notation data we're trying to accept from console.log(req.body on line 38)
                        //we can not use req.body unless we have this line app.use(express.json()) and this allowas us to accept stringify and turns it back into an object
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

// console.log(MyFruit)  this was to make sure my fruit was connected from import

let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.srxdrsr.mongodb.net/FoodDatabase?retryWrites=true&w=majority`
//creat conection string using user name and password

//connect to cluster

mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

//let us know mongoose was successful  
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// before I can ask and send data into the collection, I need to create a model
//this sends the request to make this object in our database
//we are using post because we are creating new route
app.post('/create_fruit', async (req, res) =>{

    const {nameString: name, colorString: color, ageNumber: age, readyBool: readyToEat} = req.body; //renaming req.body because info was wrong
    
    
    //console.log("updating to database");  //was console.log(running create route")
    let returnedValue = await MyFruit.create({  //creat method
        name,
        color,
        age,
        readyToEat
    })                                        //this will give us a promise because it will take time to process
    console.log(returnedValue)
    if (returnedValue){
         console.log("upload complete")
    }
        // res.status(400); //this shows a failed status, but right now we only wany to show good methods
        res.send(returnedValue)     //this lets the front end know it was complete
        
})

//     name: "apple",
//we delete this data   //     color: "red",
//     age: 14,
//     readyToEat: true
    
    
// before I can ask and send data into the collection, I need to create a model

//it's going to look at our data, if the name is an empty string, it will delete that piece of data from our database

 app.delete("/delete_nameless_data", async (req, res) => {
    let response = await MyFruit.deleteMany({name: ""});
 
    console.log(response);
 
    res.send({data: `deleted ${response.deletedCount} items.`})
 })

 app.get('/get_food_data', async (req, res) => {
    // get data from database
    let response = await MyFruit.find({});
    console.log(response);
    // send it back to front end
    res.json(response)
 })   
 
// app.get('/get_data', (req, res) => {
//     res.setHeader('Content-Type', 'application/json')

//     console.log("request received at /get_data");
//     console.log(process.env.MONGOPASSWORD);
//      res.send({data: "Response from server"})
// })

//this route will add new veggie to the databade 
app.post('/create_veggie', async (req, res) =>{
  
    const {nameString: name, colorString: color, ageNumber: age, readyBool: readyToEat} = req.body; //renaming req.body because info was wrong
    
    
    //console.log("updating to database");  //was console.log(running create route")
    let returnedValue = await MyVeggie.create({  //creat method
        name,
        color,
        age,
        readyToEat
    })                                        //this will give us a promise because it will take time to process
    console.log(returnedValue)
    if (returnedValue){
         console.log("upload complete")
    }
        // res.status(400); //this shows a failed status, but right now we only wany to show good methods
        res.send(returnedValue)     //this lets the front end know it was complete
        
})
//route will show all veggies
app.get('/veggies', async (req, res) => {
    // get data from database
    let response = await MyVeggie.find({});
    console.log(response);
    // send it back to front end
    res.json(response);

})
// //route will show one specific veggie name
// app.get('/veggie/:veggieName', async (req, res) =>{
//  //usually get the id from the front end (req.body.theID), (req.body.params.id), or (req.guery.fruitId)   
//     let id = req.params.veggieName

//     let response = await MyVeggie.findById(id)
//     console.log(response)
//     res.send(response)
// })


app.get('/veggie/:veggieName', async (req, res) =>{
    // let id = req.params.veggieName

    // let response = await MyVeggie.findById(id)
    // res.send(response)
    let showId = req.params.veggieName
    console.log(showId)

    let response = await MyVeggie.findOne({_id: showId})
    console.log(response)
    res.json(response)
})




// //route will show all fruit
// app.get('/fruits', async (req, res) => {
//     // get data from database
//     let response = await MyFruit.find({});
//     console.log(response);
//     // send it back to front end
//     res.json(response)

// })

 app.listen(5000, () => {
     console.log(`Server is Listening on 5000`)
 })


