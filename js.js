let elem = document.getElementById('grid')
let xhr = new XMLHttpRequest
let url = 'https://my-json-server.typicode.com/spikeee228/marketbrawl'
xhr.open("GET", url + "/products/")
xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
    let products = xhr.response
    console.log(products)
    elem.innerHTML += `
      <div class = "item">
         <h1>${products[0].name}</h1>
         <img width="300px" src='${products[0].photo_url}'>
         <h1>Description: ${products[0].description}</h1>
         <h1>Price: ${products[0].price}</h1>
         </div>
         <div class = "item">
         <h1>${products[1].name}</h1>
         <img width="300px" src='${products[1].photo_url}'>
         <h1>Description: ${products[1].description}</h1>
         <h1>Price: ${products[1].price}</h1>
         </div>
         <div class = "item">
         <h1>${products[2].name}</h1>
         <img width="300px" src='${products[2].photo_url}'>
         <h1>Description: ${products[2].description}</h1>
         <h1>Price: ${products[2].price}</h1>
         </div>
         <div class = "item">
         <h1>${products[3].name}</h1>
         <img width="300px" src='${products[3].photo_url}'>
         <h1>Description: ${products[3].description}</h1>
         <h1>Price: ${products[3].price}</h1>
         </div>
         <div class = "item">
         <h1>${products[4].name}</h1>
         <img width="300px" src='${products[4].photo_url}'>
         <h1>Description: ${products[4].description}</h1>
         <h1>Price: ${products[4].price}</h1>
         </div>
         <div class = "item">
         <h1>${products[5].name}</h1>
         <img width="300px" src='${products[5].photo_url}'>
         <h1>Description: ${products[5].description}</h1>
         <h1>Price: ${products[5].price}</h1>
         </div>
       
         
         
    `
    
    
}