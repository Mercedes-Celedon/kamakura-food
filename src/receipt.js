//Aquí intenta poner las funcionalidades del recibo
import {arrayCart} from './cart.js';
 
console.log(arrayCart);
function showReceipt () {
    const receiptContainer = document.getElementById('receipt-container');
    receiptContainer.style.display = 'block';
    const cartContainer = document.getElementById('products-container');
    cartContainer.style.display = 'none';


    let receipt = "";

    arrayCart.map(item=> {
       receipt = `${receipt} 
       <h3>${item.name}</h3>
       <div class="receipt-price">
           <p>Cantidad: ${item.quantity}</p>
           <h5>Subtotal ${item.subtotal}€</h5>
       </div>`;
    }) 

     const receiptProduct = document.getElementById('receipt-product');
    receiptProduct.innerHTML = receipt;
    const cartTotal = document.getElementById('cart-total').innerText;
    const receiptTotal = document.getElementById('receipt-total');
    receiptTotal.innerText = cartTotal;
    console.log(receiptTotal.innerText);

}

export {showReceipt};
window.showReceipt = showReceipt;

