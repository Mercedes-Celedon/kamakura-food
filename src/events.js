//Intenta separar los eventos en este archivo.
import {cartOpen, addProductToCart, productExist} from './cart.js'
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
        console.log(button)
        const id= button.getAttribute("id");
        productExist(id)
        cartOpen(id)
        addProductToCart()        
    });
});
})

/*function btnEventDelete(){
    const btnDeleteProduct=document.querySelectorAll('.close-button-cart');
    btnDeleteProduct.forEach(function(element){
        element.addEventListener('click', function(evt){
            const button = evt.target;
            console.log(button)
            const id= button.dataset.cart;
            console.log(id)
            deleteProduct(id);
            //evt.stopPropagation()
        });
    });
}

export{btnEventDelete};*/