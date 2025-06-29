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
    mostrarPreviewCarrito(); // Opcional: se actualiza en index.html si aplica
}

// ——————————————————————————————
// 4. Mostrar contenido del carrito (carrito.html)
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
        const subtotal = item.precio * item.cantidad;
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

    totalDiv.innerHTML = `<h3>Total: $${total.toLocaleString("es-AR")}</h3>`;
}

// ——————————————————————————————
// 4b. Mostrar preview simple del carrito (index.html)
// ——————————————————————————————
function mostrarPreviewCarrito() {
    const contenedor = document.getElementById('cart-container');
    if (!contenedor) return;

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>(Carrito vacío por ahora)</p>';
        return;
    }

    let html = '<ul class="preview-list">';
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        html += `<li>${item.nombre} x${item.cantidad} = $${subtotal.toLocaleString("es-AR")}</li>`;
    });
    html += '</ul>';

    contenedor.innerHTML = html;
}

// ——————————————————————————————
// 5. Eliminar producto por índice
// ——————————————————————————————
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    guardarCarrito();
    mostrarCarrito();
    mostrarPreviewCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 6. Vaciar todo el carrito
// ——————————————————————————————
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
    mostrarPreviewCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 7. Finalizar compra → Redirige a pago.html
// ——————————————————————————————
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('⚠️ El carrito está vacío.');
        return;
    }

    // ✅ Guardamos el carrito antes de redirigir (por las dudas)
    guardarCarrito();

    // ✅ Redirigimos a pago.html (donde se mostrará el resumen y botón de pago)
    window.location.href = "pago.html";
}


// ——————————————————————————————
// 8. Ejecutar al cargar la página
// ——————————————————————————————
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();           // carrito.html
    mostrarPreviewCarrito();    // index.html
    updateCartCount();

    // Eventos de botones (si existen en la página actual)
    const btnVaciar = document.getElementById('btn-vaciar');
    const btnFinalizar = document.getElementById('btn-finalizar') || document.getElementById('finalizarCompra');

    if (btnVaciar) {
        btnVaciar.addEventListener('click', () => {
            if (confirm('¿Seguro que querés vaciar el carrito?')) {
                vaciarCarrito();
            }
        });
    }

    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', finalizarCompra);
    }
});
