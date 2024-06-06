import { products } from "../assets/data/data";
//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

export function showProducts() {
  let productsHTML = "";
  products.forEach((product) => {
    productsHTML = `${productsHTML}
    <div class="product-container">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-container">
            <h5>${product.price} €</h5>
            <button class="add-button" id=${product.id}>Añadir</button>
        </div>
    </div>
  `;
  });

  document.getElementById("products").innerHTML = productsHTML;
}
