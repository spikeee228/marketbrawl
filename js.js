let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';

xhr.open('GET', url + '/products/');
xhr.responseType = 'json';
xhr.onload = function() {
	let products = xhr.response;
	productsGrid.innerHTML = null;

	products.forEach(p => {
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.innerHTML = `
		<div class="product">
		<h2 class='product-name'>${p.name}</h2>
		<img class='product-photo' src='${p.photo_url}'
		alt='${p.name}'>
		<p class='product-price'><b>Price: <b>${p.price}$</p>
		<p class='product-description'><b>Description: </b>${p.description}</p>
		<a href='index.html?id=${p.author_id}'>Seller profile</a>
		<button onclick="addProductToCart(${p.id}">Buy</button>
	
		`;
		productsGrid.append(pElem);
		});
}
xhr.send();

let cartProducts = document.getElementById('cart-products');

  function openCart(){
	cartProducts.classList.toggle('hide')
  };
  function addProductToCart(id) {
     let product = productsArray.find(function(p){
    return p.id == id;
  });
  cart.push(product);
  drawCart();
 }
 function drawCart() {
   if(cart.length === 0) return cartProducts.innerHTML = `
   Cart is empty
   `
   cartPruducts.innerHTML = null;
   let sum = 0;
   cart.forEach(function(p){
      cartProducts.innerHTML += `
         <p>
         <img src="${p.photo_url}">  ${p.name} | ${p.price}$
         </p>
         <br>
      `;
      sum += p.price;
   });
 }