// Simulación básica de carrito con JavaScript puro

// Array simulado de productos en el carrito
let carrito = [];

// Función para agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    alert(nombre + " fue agregado al carrito.");
}

// Función para ir a la página de compra
function irAComprar() {
    window.location.href = 'comprar.html';
}
