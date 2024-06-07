//DEBE imprimir en pantalla la información de filtros.
import { filters, products} from "../assets/data/data.js";
import { filterProducts } from "./searcher.js";
import { btnAddToCart } from "./cart.js"

export function showFilters() {
    let filtersContainer = document.getElementById('filters');
    filtersContainer.innerHTML = '';
    filters.forEach(filter => {
        const filterButton = document.createElement('button');
        filterButton.className = 'filter';
        filterButton.textContent = filter;
        filterButton.addEventListener('click', () => {
            filterProducts(filter);
        });
        filtersContainer.appendChild(filterButton);
    });
}

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
export function showProducts(products) {
    let productsHTML = "";
    products.forEach((product) => {
    productsHTML = `${productsHTML}
        <div class="product-container">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        <div class="price-container">
            <h5>${product.price} €</h5>
            <button class="add-button" onclick="btnAddToCart(${product.id})" id= "${product.id}">Añadir</button>
        </div>
    </div>
    `;
});

document.getElementById("products").innerHTML = productsHTML;
}


window.btnAddToCart = btnAddToCart;