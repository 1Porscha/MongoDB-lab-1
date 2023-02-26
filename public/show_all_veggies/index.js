console.log("display page")
// front end

//sending a get request to this route
//we are waiting for that data and we are goint to log that data
//you should get an array of obects in the front end console
// const getVeggie = async () => { //get data function

//front end

let containerElement = document.getElementById('container')

//sending a get request to this route
//we are waiting for that data and we are goint to log that data
//you should get an array of obects in the front end console
const getData = async () => { //get data function
    let data = await fetch("http://localhost:5000/veggies"); //wait for data
    data.json().then((parsedData) => { //parse data
        console.log(parsedData) // data is array of object    
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        parsedData.forEach((object) => { //for each item we creat a ptag
            // if not ready to eat- red text
            let pTag = document.createElement("p"); // <p></p>
            pTag.textContent = object.name; // <p>apple</p>set name, we set the text content to the name of that object
            containerElement.appendChild(pTag) //add to container element, we add it to the end of our child list

            // pTag.id = object._id
            // if (element.readyToEat){
            //     pTag.style.backgroundColor = "green"
            // }else{
            //     pTag.style.backgroundColor = "red"
            // }
            pTag.addEventListener('click', () =>{
                console.log("click", object._id)
                window.location.href=`../single_veggie/?Id=${object._id}`

            })
            
            containerElement.appendChild(pTag)
        })    
    })
}


getData()

