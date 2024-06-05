import { products } from "../assets/data/data.js"
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
            <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
            <div class="text-container">
                <h3> ${item.name}</h3>
                <h5>Precio € ${item.price}</h5>
            </div>
            <div class="quantity-container" id="quantity">
            <button>+</button>
            <p class="quantity">1</p>
            <button>-</button>
            </div>
        </div>
        `
    })
    const itemDiv= document.getElementById("cart-products");
    itemDiv.innerHTML=itemsCart;
}

function productExist(id){
    for(let prod of arrayCart){
        if(id == prod.id){
            return true
        }
    }
    return false
}

export{cartOpen, addProductToCart, productExist};