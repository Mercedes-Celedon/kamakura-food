//Intenta separar los eventos en este archivo.
import {saveProductToArray, addProductToCart, productExist} from './cart.js'
import {showProducts} from './menu.js';

document.addEventListener('DOMContentLoaded', showProducts)

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
