import { products } from "../assets/data/data.js"
//DEBE contener las funcionalidades del carrito de compras.
const arrayCart=[];

function saveProductToArray (id){
    const cartContainer= document.querySelector("#cart-container");
    cartContainer.style.display= "block";

    for(let prod of products){
        if(id == prod.id){
            if (productExist(id)==false){
                arrayCart.push(prod)
                prod.quantity= 1;
                prod.subtotal= prod.price * prod.quantity;
                break;
            }
        }
    }

    const total = calculateTotal(arrayCart);
    document.getElementById('cart-total').innerText = ` Total: ${total} €`;
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
            <button class="add-item" onclick="addItemCart(${item.id})">+</button>
            <p class="quantity">${item.quantity}</p>
            <button class="reduce-item" onclick="removeFromCart(${item.id})">-</button>
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
function deleteProduct(id){
    const index = arrayCart.findIndex(prod => prod.id === id);
    arrayCart.splice(index, 1);

    addProductToCart();
}
function addItemCart(id){
    for(let prod of arrayCart){
        if(id == prod.id){
            prod.quantity++;
            prod.subtotal= prod.price * prod.quantity;
            break;
        }
    }
    
    addProductToCart();

    const total = calculateTotal(arrayCart);
    document.getElementById('cart-total').innerText = ` Total: ${total} €`;
}

function removeFromCart(id){
    for(let prod of arrayCart){
        if(id == prod.id){
            if(prod.quantity > 1){
                prod.quantity--;
                prod.subtotal= prod.price * prod.quantity;
                break;
            }else{
                deleteProduct(id);
            }
        }
    }
    
    addProductToCart();

    const total = calculateTotal(arrayCart);
    document.getElementById('cart-total').innerText = ` Total: ${total} €`;
}

function calculateTotal(arraySuma) {
    return arraySuma
        .map(item => item.subtotal)
        .reduce((total, subtotal) => total + subtotal, 0);
}

function btnAddToCart(id){
    productExist(id)
    saveProductToArray(id)
    addProductToCart()  
}
export{saveProductToArray, addProductToCart, productExist,deleteProduct, addItemCart,removeFromCart, btnAddToCart};

// Hacer funciones disponibles globalmente
window.deleteProduct = deleteProduct;
window.addItemCart = addItemCart;
window.removeFromCart = removeFromCart;