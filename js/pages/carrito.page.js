
// js/pages/carrito.page.js

function obtenerCarrito() {
    // Intenta leer el carrito desde localStorage
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

function renderizarCarrito() {
    const contenedor = document.getElementById("carrito-items");
    const totalElemento = document.getElementById("total-carrito");

    const carrito = obtenerCarrito();
    contenedor.innerHTML = ""; // Limpia el contenido anterior

    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>🛒 Tu carrito está vacío.</p>";
        totalElemento.textContent = "$0";
        return;
    }

    carrito.forEach(producto => {
        const item = document.createElement("div");
        item.className = "carrito-item";

        item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-img" />
      <div class="carrito-detalles">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
      </div>
    `;

        contenedor.appendChild(item);
        total += producto.precio * producto.cantidad;
    });

    totalElemento.textContent = `$${total.toLocaleString()}`;

    agregarEventosEliminar(); // Activar botones de eliminar
}

function agregarEventosEliminar() {
    const botones = document.querySelectorAll(".btn-eliminar");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.dataset.id;
            const nombre = boton.closest(".carrito-item").querySelector("h3").textContent;

            const confirmacion = window.confirm(`¿Querés eliminar "${nombre}" del carrito?`);

            if (confirmacion) {
                eliminarDelCarrito(id);
            }
        });
    });
}

function eliminarDelCarrito(id) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito(); // Volver a dibujar el carrito actualizado
}

// Ejecutar al cargar la página
renderizarCarrito();
