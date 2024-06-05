document.addEventListener("DOMContentLoaded", () => {
    // Obtén el botón del carrito y el contenedor del carrito
    const cartButton = document.getElementById("cart");
    const cartContainer = document.getElementById("cart-container");

    // Añade un evento de clic al botón del carrito
    cartButton.addEventListener("click", () => {
        // Comprueba si el carrito está visible
        if (cartContainer.style.display === "none" || cartContainer.style.display === "") {
            // Si no está visible, muéstralo
            cartContainer.style.display = "flex";
        } else {
            // Si está visible, escóndelo
            cartContainer.style.display = "none";
        }
    });
});

