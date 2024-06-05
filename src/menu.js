//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

import { products } from "../assets/data/data";

// export function showProducts() {
//   const productsContainer = document.getElementById("products");

//   products.forEach((product) => {
//     // Create product container
//     const productContainer = document.createElement("div");
//     productContainer.className = "product-container";

//     // Create product title
//     const productTitle = document.createElement("h3");
//     const textTitle = document.createTextNode(`${product.name}`);
//     productTitle.appendChild(textTitle);

//     // Create product description
//     const productDescription = document.createElement("p");
//     const textDescription = document.createTextNode(`${product.description}`);
//     productDescription.appendChild(textDescription);

//     // Create price container
//     const priceContainer = document.createElement("div");
//     priceContainer.className = "price-container";
//     const productPrice = document.createElement("h5");
//     const textPrice = document.createTextNode(`${product.price}`);
//     productPrice.appendChild(textPrice);
//     priceContainer.appendChild(productPrice);

//     // Create add button
//     const buttonAdd = document.createElement("button");
//     buttonAdd.className = "add-button";
//     const textAdd = document.createTextNode("Añadir");
//     buttonAdd.appendChild(textAdd);
//     priceContainer.appendChild(buttonAdd);

//     // Append all elements to product container
//     productContainer.appendChild(productTitle);
//     productContainer.appendChild(productDescription);
//     productContainer.appendChild(priceContainer);

//     // Append product container to main products container
//     productsContainer.appendChild(productContainer);
//   });
// }

export function showProducts() {
  let productsHTML = "";
  products.forEach((product) => {
    productsHTML = `${productsHTML}
    <div class="product-container">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-container">
            <h5>Precio €</h5>
            <button class="add-button">Añadir</button>
        </div>
    </div>
  `;
  });

  document.getElementById("products").innerHTML = productsHTML;
}
