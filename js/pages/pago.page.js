function obtenerCarrito() {
    const data = localStorage.getItem("carrito");
    return data ? JSON.parse(data) : [];
}

function renderizarResumenPago() {
    const resumen = document.getElementById("resumen-pago");
    const totalElemento = document.getElementById("total-pago");
    const botonMP = document.getElementById("btn-mercadopago");

    const carrito = obtenerCarrito();
    resumen.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        resumen.innerHTML = "<p>No hay productos en el carrito.</p>";
        botonMP.style.display = "none";
        return;
    }

    carrito.forEach(producto => {
        const item = document.createElement("div");
        item.className = "pago-item";

        item.innerHTML = `
      <p><strong>${producto.nombre}</strong> (x${producto.cantidad})</p>
      <p>$${(producto.precio * producto.cantidad).toLocaleString()}</p>
    `;

        resumen.appendChild(item);
        total += producto.precio * producto.cantidad;
    });

    totalElemento.textContent = `$${total.toLocaleString()}`;

    // 🟡 ENLACE DE MERCADO PAGO (esto será reemplazado por uno real)
    const enlaceMP = "https://mpago.la/tu-link-aqui"; // 👉 lo reemplazás más adelante

    botonMP.href = enlaceMP;
}

// Ejecutar al cargar la página
renderizarResumenPago();