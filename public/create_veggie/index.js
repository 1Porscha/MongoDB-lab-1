
console.log("js file connected")

let submitButton = document.getElementById('submit-button');

console.log(submitButton)

submitButton.addEventListener('click', async () => {

    let nameString = document.getElementById('name-input').value;
    let colorString = document.getElementById('color-input').value;
    let ageNumber = +document.getElementById('age-input').value;
    let readyBool = document.getElementById('ready-bool').value === "true" ? true : false;

   // console.log(nameString, colorString, ageNumber, readyBool)
   //instead of writing thel all out like bouve, we can package it all together below, const fruit
    //this is the data on the front end, we aneed to send it to our server, so our server can send it to MongoDb(database)
    //information from our html: the Dom, creating an object with those values, and we send it to the server
   const veggie = {
    nameString,
    colorString,
    ageNumber,
    readyBool
}
    console.log(JSON.stringify(veggie));
    
 
    let response = await fetch('http://localhost:5000/create_veggie', {  //1st paramenter the URL, 2nd paramenter creat_fruit from our server line 36
        method: "POST",     //because this is a POST request from server line 36
        headers: {
         'Content-Type': 'application/json', //let it know we are sending js
        },
    body: JSON.stringify(veggie) //this allows us to send it in a string version to our database that look like an object
    })
    console.log(response) //checks the reponse
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




