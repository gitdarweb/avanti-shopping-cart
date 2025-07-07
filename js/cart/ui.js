/* -------------------------------------------------
   js/cart/ui.js  –  Presentación del carrito
   -------------------------------------------------
   · NO guarda nada – sólo lee el estado del core
   · Dibuja: contador 🛒, preview (index) y lista (carrito.html)
-------------------------------------------------- */

import {
    getCart,
    getTotalQty,
    getTotalPrice,
    addItem,
    removeIndex,
    clearCart,
} from './cart.js';

/* ============ 1. Contador global 🛒 ============ */
export function updateCartCount() {
    const span = document.getElementById('cart-count');
    if (span) span.textContent = getTotalQty();
}

/* ============ 2. Preview rápido (index.html) ============ */
export function renderPreview() {
    const container = document.getElementById('cart-container');
    if (!container) return;                       // solo existe en index

    const cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = '<p>(Carrito vacío por ahora)</p>';
        return;
    }

    container.innerHTML = `
      <ul class="preview-list">
        ${cart
            .map(
                i =>
                    `<li>${i.nombre} ×${i.cantidad} = $${(
                        i.precio * i.cantidad
                    ).toLocaleString('es-AR')}</li>`
            )
            .join('')}
      </ul>`;
}

/* ============ 3. Render completo (carrito.html) ============ */
export function renderFull() {
    const cont = document.getElementById('carrito-contenedor');
    const totalDiv = document.getElementById('carrito-total');
    if (!cont || !totalDiv) return;               // sólo en carrito.html

    const cart = getCart();
    cont.innerHTML = '';
    totalDiv.textContent = '';

    if (cart.length === 0) {
        cont.innerHTML = '<p>🛒 Tu carrito está vacío.</p>';
        updateCartCount();
        return;
    }

    cart.forEach((item, idx) => {
        const subtotal = item.precio * item.cantidad;

        const card = document.createElement('div');
        card.className = 'tarjeta-producto';
        card.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}" class="mini-img" />
        <div class="info-producto">
          <h3>${item.nombre}</h3>
          <p>$${item.precio} × ${item.cantidad}</p>
          <p>Subtotal: $${subtotal.toLocaleString('es-AR')}</p>
          <button class="btn-hero small" data-idx="${idx}">🗑 Eliminar</button>
        </div>`;

        cont.appendChild(card);
    });

    totalDiv.textContent = `Total: $${getTotalPrice().toLocaleString('es-AR')}`;

    /* listeners Eliminar */
    cont.querySelectorAll('button[data-idx]').forEach(btn =>
        btn.addEventListener('click', e => {
            removeIndex(+e.currentTarget.dataset.idx);
            renderFull();             // re‑dibujamos
            updateCartCount();
        })
    );
}

/* ============ 4. Acción Vaciar ============ */
export function hookVaciar(btn) {
    if (!btn) return;
    btn.addEventListener('click', () => {
        if (confirm('¿Vaciar carrito?')) {
            clearCart();
            renderFull();
            renderPreview();
            updateCartCount();
        }
    });
}

/* ============ 5. Acción Finalizar ============ */
export function hookFinalizar(btn, url = 'pago.html') {
    if (!btn) return;
    btn.addEventListener('click', () => {
        if (getCart().length === 0) {
            alert('⚠️ Carrito vacío');
            return;
        }
        // (Podés guardar algo en sessionStorage si querés)
        window.location.href = url;
    });
}

/* ============ 6. Helper para agregar desde tarjetas ============ */
export function addFromCard(prodObj) {
    addItem(prodObj);
    updateCartCount();
    renderPreview();
}
  