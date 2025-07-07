// js/pages/pago.page.js
import { getCarrito, clearCart } from '../cart/cart.js';
import { updateCartCount } from '../cart/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    const resumen = document.getElementById('resumen');
    const form = document.getElementById('form-pago');
    const mensaje = document.getElementById('mensaje-enviado');
    const carrito = getCarrito();

    // Mostrar resumen del carrito
    if (resumen && carrito.length) {
        let html = '<ul>';
        let total = 0;
        carrito.forEach(item => {
            const subtotal = item.precio * item.cantidad;
            html += `<li>${item.nombre} x${item.cantidad} = $${subtotal.toLocaleString('es-AR')}</li>`;
            total += subtotal;
        });
        html += `</ul><p><strong>Total: $${total.toLocaleString('es-AR')}</strong></p>`;
        resumen.innerHTML = html;
    }

    // Manejar envío
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const datos = new FormData(form);

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: datos,
                    headers: { 'Accept': 'application/json' }
                });

                if (!res.ok) throw new Error('Error al enviar');

                form.reset();
                mensaje.classList.remove('oculto');
                mensaje.classList.add('visible');
                clearCart();
                updateCartCount();
            } catch (err) {
                alert('❌ No se pudo enviar. Intente más tarde.');
                console.error(err);
            }
        });
    }
});