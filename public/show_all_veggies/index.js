console.log("display page")
// front end

// sending a get request to this route
// we are waiting for that data and we are goint to log that data
// you should get an array of obects in the front end console

let container = document.getElementById('container')

//sending a get request to this route
//we are waiting for that data and we are goint to log that data
//you should get an array of obects in the front end console
const getData = async () =>{ //get data function
    let data = await fetch('/veggies'); //wait for data
    data.json().then((parsedData) =>{ //parse data
        console.log(parsedData); // data is array of object
        // map through and put in HTML
        // push each individual one,  or push an array of HTML
        parsedData.forEach(object => { //for each item we creat a ptag
            let pTag = document.createElement('p'); // <p></p>
            pTag.textContent = object.name // <p>apple</p>set name, we set the text content to the name of that object
            container.appendChild(pTag) //add to container element, we add it to the end of our child list
            pTag.id = object._id
            if (object.readyToEat){
                pTag.style.color = "green"
            }else{
                pTag.style.color = "red"
            }

            pTag.addEventListener('click', (event) =>{
                console.log(event.target);
                console.log(event.target.id);
                window.location.href = `../single_veggie?veggieId=${event.target.id}`
            })
        });
    })    
}
getData()    