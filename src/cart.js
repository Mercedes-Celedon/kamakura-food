import { products } from "../assets/data/data.js"
//import { btnEventDelete } from "./events.js";
//DEBE contener las funcionalidades del carrito de compras.
const arrayCart=[];
function cartOpen (id){
    const cartContainer= document.querySelector("#cart-container");
    cartContainer.style.display= "block";

    for(let prod of products){
        if(id == prod.id){
            //prod.price *= 2;
            if (productExist(id)==false){
                arrayCart.push(prod)
                prod.quantity= 1;
                prod.subtotal= prod.price * prod.quantity;
                console.log(arrayCart)
                break;
            }
        }
    }
}

function addProductToCart(){
    let itemsCart="";
    arrayCart.map(item=>{
        itemsCart =`${itemsCart}
        <div class="cart-container">
            <button class="close-button" onclick="deleteProduct(${item.id})" type="button"><img src="./assets/img/close.svg" alt="close"/></button>
            <div class="text-container">
                <h3> ${item.name}</h3>
                <h5>${item.subtotal} €</h5>
            </div>
            <div class="quantity-container" id="quantity">
            <button class="add-item" onclick="addItemCart(${item.quantity})">+</button>
            <p class="quantity" onclick="removeFromCart(${item.quantity})">${item.quantity}</p>
            <button class="reduce-item">-</button>
            </div>
        </div>
        `
    })
    const itemDiv= document.getElementById("cart-products");
    itemDiv.innerHTML=itemsCart;
    //btnEventDelete();
}

function productExist(id){
    for(let prod of arrayCart){
        if(id == prod.id){
            return true
        }
    }
    return false
}
function printAlert(){
    alert('golll')
}
function deleteProduct(id){
    //arrayCart.splice(id, 1)
    console.log(id)
}
function addItemCart(item){
    console.log(item)
}
function removeFromCart(item){
   console.log(item)
}

export{cartOpen, addProductToCart, productExist,deleteProduct, addItemCart,removeFromCart};

// Hacer funciones disponibles globalmente
window.deleteProduct = deleteProduct;
window.addItemCart = addItemCart;
window.removeFromCart = removeFromCart;