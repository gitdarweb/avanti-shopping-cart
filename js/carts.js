// ==============================
// Lógica del carrito de compras
// ==============================

// ——————————————————————————————
// 1. Inicialización
// ——————————————————————————————
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// ——————————————————————————————
// 2. Guardar y actualizar contador
// ——————————————————————————————
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function updateCartCount() {
    const spanCount = document.getElementById('cart-count');
    const totalItems = carrito.reduce((sum, item) => sum + (item.cantidad || 0), 0);
    if (spanCount) spanCount.textContent = totalItems;
}

// ——————————————————————————————
// 3. Agregar producto al carrito
// ——————————————————————————————
function agregarAlCarrito(nombre, precio, imagen = 'img/productos/placeholder.jpg') {
    const existente = carrito.find(item => item.nombre === nombre);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio: Number(precio),
            cantidad: 1,
            imagen
        });
    }

    guardarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 4. Mostrar contenido del carrito
// ——————————————————————————————
function mostrarCarrito() {
    const contenedor = document.getElementById('carrito-contenedor');
    const totalDiv = document.getElementById('carrito-total');

    if (!contenedor || !totalDiv) return;

    contenedor.innerHTML = '';
    totalDiv.textContent = '';

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>🛒 Tu carrito está vacío.</p>';
        return;
    }

    let total = 0;

    carrito.forEach((item, index) => {
        const subtotal = (item.precio || 0) * (item.cantidad || 0);
        total += subtotal;

        const card = document.createElement('div');
        card.className = 'tarjeta-producto';

        card.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" class="mini-img" />
            <div class="info-producto">
                <h3>${item.nombre}</h3>
                <p>Precio: $${item.precio}</p>
                <p>Cantidad: ${item.cantidad}</p>
                <button class="btn-hero small" onclick="eliminarDelCarrito(${index})">🗑 Eliminar</button>
            </div>
        `;

        contenedor.appendChild(card);
    });

    totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
}

// ——————————————————————————————
// 5. Eliminar producto por índice
// ——————————————————————————————
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    guardarCarrito();
    mostrarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 6. Vaciar todo el carrito
// ——————————————————————————————
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 7. Finalizar compra (simulado)
// ——————————————————————————————
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('⚠️ El carrito está vacío.');
        return;
    }

    alert('✅ ¡Gracias por tu compra! Serás redirigido al pago.');
    vaciarCarrito();

    // A futuro podrías redirigir:
    // window.location.href = "pago.html";
}

// ——————————————————————————————
// 8. Ejecutar al cargar la página
// ——————————————————————————————
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();
    updateCartCount();
});
