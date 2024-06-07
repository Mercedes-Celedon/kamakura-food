//Intenta separar los eventos en este archivo.
import { showProducts, showFilters } from "./menu.js";
import { filterProducts } from "./searcher.js";
import { products } from "../assets/data/data.js";

document.addEventListener("DOMContentLoaded", () => {
    showFilters()
    showProducts(products)
    filterProducts ()
});
