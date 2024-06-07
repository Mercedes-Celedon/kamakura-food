//Intenta separar los eventos en este archivo.
import { showProducts, showFilters } from "./menu.js";
import { filterProducts } from "./searcher.js";
import { products } from "../assets/data/data.js";
import {saveProductToArray, addProductToCart, productExist} from './cart.js'

document.addEventListener("DOMContentLoaded", () => {
    showFilters()
    showProducts(products)
    filterProducts ()
});

//Event clic to add cart
  document.addEventListener('DOMContentLoaded', function(){
  const elementsBtnAdd= document.querySelectorAll('.add-button');
  // Usamos forEach para iterar sobre cada botón
  elementsBtnAdd.forEach(function(element) {
      // Agregamos un event listener a cada botón
      element.addEventListener('click', function(evt){
          //evt.target es el elemento que disparó el evento
          const button = evt.target;
          const id= button.getAttribute("id");
          productExist(id)
          saveProductToArray(id)
          addProductToCart()        
      });
  });
})
