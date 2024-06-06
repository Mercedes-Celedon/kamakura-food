//Intenta separar los eventos en este archivo.

import { showProducts, showFilters } from "./menu.js";
import { products } from "../assets/data/data.js";

document.addEventListener("DOMContentLoaded", showProducts);

export function filterProducts(category) {
    if (category === 'todos') {
        showProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        showProducts(filteredProducts);
    }
}

showFilters();
showProducts();

