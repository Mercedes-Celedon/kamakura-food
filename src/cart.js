import { products } from "../assets/data/data.js"
//DEBE contener las funcionalidades del carrito de compras.
const arrayCart=[];
let itemsCart="";
function cartOpen (id){
    const cartContainer= document.querySelector("#cart-container");
    cartContainer.style.display= "block";

    for(let prod of products){
        if(id == prod.id){
            //prod.price *= 2;
            arrayCart.push(prod)
            //console.log(arrayCart)

        }
    }
    console.log(arrayCart)
}


export{cartOpen};