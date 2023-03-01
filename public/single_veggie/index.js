console.log("js running")

//get id from url

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})
 let id = params.veggieId

console.log(id);
// use id to get info from collection

//use id to get info from mongobd
//with data from mongobd display product on page
//create funtion and await response
const displayVeggie = async () =>{
    let response = await fetch(`http://localhost:5000/veggie/${id}`)

    let finalResponse = await response.json()

    console.log(finalResponse);

//use this finaResponse to display item information 

    let veggieName = document.getElementById('veggie-name')
    veggieName.textContent = finalResponse.name    

}
displayVeggie()
