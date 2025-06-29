// js/pago.js

document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('resumen-pago');
    const btnPagar = document.getElementById('btn-pagar');

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>⚠️ El carrito está vacío.</p>';
        btnPagar.disabled = true;
        return;
    }

    let html = '<ul>';
    let total = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        html += `<li>• ${item.nombre} x${item.cantidad} = $${subtotal.toLocaleString('es-AR')}</li>`;
    });
    html += `</ul><h3>Total a pagar: $${total.toLocaleString('es-AR')}</h3>`;
    contenedor.innerHTML = html;

    btnPagar.addEventListener('click', () => {
        alert("✅ Simulación de pago realizada con éxito.\nGracias por tu compra 💖");
        localStorage.removeItem('carrito');
        window.location.href = "index.html";
    });
});
  