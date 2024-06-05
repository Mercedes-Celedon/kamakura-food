//DEBE imprimir en pantalla la información de filtros.

import { products } from "../assets/data/data.js"

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
export function showProducts(){
    let productList="";
    products.map(item=>{
    productList =`${productList}
    <div class="product-container">
    <h3> ${item.name}</h3>
    <p>${item.description}</p>
    <div class="price-container">
    <h5>Precio € ${item.price}</h5>
    <button class="add-button" id="${item.id}">Añadir</button>
    </div>
    </div>
    `
})
const productDiv= document.getElementById("products");

productDiv.innerHTML=productList;
}


