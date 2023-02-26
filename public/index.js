

console.log("js file connected")

let submitButton = document.getElementById('submit-button');

console.log(submitButton)

submitButton.addEventListener('click', async () => {
    // send a request to Express 
    // result is the response from the server
  //we are getting the four values from out html

    // let nameElement = document.getElementById('name-input')
    // // // get value of element
    // let nameString = nameElement.value;
    //console.log(nameString)
    //above shows 1 element and below shows all 4 elements on frontend
        //this capture the four value from our javascript
    let nameString = document.getElementById('name-input').value;
    let colorString = document.getElementById('color-input').value;
    let ageNumber = +document.getElementById('age-input').value;
    let readyBool = document.getElementById('ready-bool').value === "true" ? true : false;

   // console.log(nameString, colorString, ageNumber, readyBool)
   //instead of writing thel all out like abouve, we can package it all together below, const fruit
    //this is the data on the fron end, we need to send it to our server, so our server can send it to MongoDb(database)
   const fruit = {
    nameString,
    colorString,
    ageNumber,
    readyBool
}
    console.log(JSON.stringify(fruit));
 
    let response = await fetch('http://localhost:5000/create_veggie', {  //1st paramenter the URL, 2nd paramenter creat_fruit from our server line 36
        method: "POST",     //because this is a POST request from server line 36
        headers: {
         'Content-Type': 'application/json', //let it know we are sending js
        },
    body: JSON.stringify(fruit) //this allows us to send it in a string version to our database that look like an object
    })
    let uploadStatusTag = document.getElementById('upload-status');
    // console.log(response.status); this shows a failed status
    if (response.status === 200) {
        console.log(response);
        console.log("upload complete!!!");
        uploadStatusTag.textContent = "Upload Completed";
        uploadStatusTag.style.color = "green";

    } else {
        console.log(response);
        console.log("upload failed");
        console.log;
        uploadStatusTag.textContent = "Upload Failed";
        uploadStatusTag.style.color = "red";

    }
})


let deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', async () => {
   let response = await fetch('http://localhost:5000/delete_nameless_data', {
        method: "delete",
    });
     console.log(response);

    let parsedData = await response.json()
    console.log(parsedData);
 });



let displayPageButton = document.getElementById('display-page-button');

displayPageButton.addEventListener('click', () => {
    // change HTML files (from index to display_food.html)
    window.location.href = "./display_food"
})

// let createVeggieButton = document.getElementById('create-veggie-button');

// createVeggieButton.addEventListener('click', () => {
//     window.location.href = "./create_veggie"
// })

let showAllVeggieButton = document.getElementById('show-all-veggie-button');

showAllVeggieButton.addEventListener('click', () => {
    // change HTML files (from index to display_veg.html)
    window.location.href = "./show_all_veggies"
})

