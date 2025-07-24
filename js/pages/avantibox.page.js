import { productosAvantiBox } from "../core/products.js";

function renderizarProductos() {
    const contenedor = document.getElementById("grid-productos");
    contenedor.innerHTML = "";

    productosAvantiBox.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "producto";

        tarjeta.innerHTML = `
      <img src="../${producto.imagen}" alt="${producto.nombre}" class="producto-img" />
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio.toLocaleString()}</p>
      <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
    `;

        contenedor.appendChild(tarjeta);
    });

    agregarEventos();
}

function agregarEventos() {
    const botones = document.querySelectorAll(".btn-agregar");

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const producto = productosAvantiBox.find(p => p.id === id);
            agregarAlCarrito(producto);
            alert(`✅ "${producto.nombre}" se agregó al carrito`);
        });
    });
}

function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
        existe.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

renderizarProductos();
