console.log("js running")

//get id from url

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})
 let id = params.id
 
console.log(id);
// use id to get info from collection


//use id to get info from mongobd
//with data from mongobd display product on page
//create funtion and await response
const getSingleVeggie = async () =>{
    let response = await fetch(`http://localhost:5000/veggie/${id}`)
    console.log(response)

    let finalResponse = await response.json()

    console.log(finalResponse);

 //use this finaResponse to display item information    
   
    let containerElement = document.getElementById('container')
    containerElement.innerHTML = `
    <div class="single-veggie">
        <h1>${finalResponse.name}</h1>
        <h3>${finalResponse.color}</h3>
        <h3> Price $${finalResponse.age}</h3>
     </div>
    `
}
getSingleVeggie()


