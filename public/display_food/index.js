console.log("Display Page")

let containerElement = document.getElementById('container')

const getData = async () => {  //get data function
    let data = await fetch("/get_food_data");  //wait for data
    data.json().then((parsedData) => {      //parse data
        console.log(parsedData); // data is array of objects
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        parsedData.forEach((object) => { //for each item, we create a PTag
            let pTag = document.createElement("p"); // <p></p>
            pTag.textContent = object.name; // <p>apple</p> we set the text content to the name of that object
            if (object.readyToEat !== true) {
                pTag.style.color = "red"
            } else {
                pTag.style.color = "green"
            }


            containerElement.appendChild(pTag);
        })
     })
 }

getData()

