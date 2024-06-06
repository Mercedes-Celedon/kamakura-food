//Intenta separar los eventos en este archivo.

import { products } from "../assets/data/data";
import { showProducts } from "./menu";

document.addEventListener("DOMContentLoaded", () => showProducts(products));
