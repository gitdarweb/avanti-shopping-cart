/* -------------------------------------------------
   js/pages/carrito.page.js
   Encargado de la pantalla carrito.html
-------------------------------------------------- */

import {
    renderFull,
    updateCartCount,
    hookVaciar,
    hookFinalizar,
} from '../cart/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    /* 1. Pintar la lista y el contador */
    renderFull();
    updateCartCount();

    /* 2. Enganchar botones (si existen) */
    hookVaciar(document.getElementById('btn-vaciar'));
    hookFinalizar(document.getElementById('btn-finalizar'));
});
  