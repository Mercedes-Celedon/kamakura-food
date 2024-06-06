//DEBE buscar los productos por los filtros
import { products } from "../assets/data/data.js";
import { showProducts } from "./menu.js";

export function filterProducts(category) {
    if (category === 'todos') {
        showProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        showProducts(filteredProducts);
    }
    
}