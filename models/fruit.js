//home of out fruit model

//bring Mongo in 
const mongoose = require('mongoose');

// Schemas are the structure of our data, and the data types

const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    readyToEat: Boolean
})

const MyFruit = mongoose.model('MyFruit', fruitSchema)

//const (MyFruit) = is what connect us to mongoose
//(myfruit) collectioin the is where our data lives

module.exports = MyFruit;