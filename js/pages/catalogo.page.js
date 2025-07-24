/* -------------------------------------------------
   js/pages/catalogo.page.js
   Encargado de catálogo por marca o categoría
-------------------------------------------------- */

import { renderizarProductosPor } from '../core/renderProducts.js';
import { updateCartCount } from '../cart/ui.js';
import { initBurger } from '../core/burger.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('📦 catalogo.page.js cargado');

    // 1️⃣ Menú hamburguesa
    initBurger();

    // 2️⃣ Actualiza contador del carrito
    updateCartCount();

    // 3️⃣ Detectar si es marca o categoría según URL
    const path = window.location.pathname;
    const isCategoria = path.includes('/categorias/');
    const isMarca = path.includes('/marcas/');
    const nombre = path.split('/').pop().replace('.html', '');

    // 4️⃣ Renderiza los productos según el tipo
    if (isCategoria) {
        renderizarProductosPor('categoria', nombre);
    } else if (isMarca) {
        renderizarProductosPor('marca', nombre);
    } else {
        console.warn('❗ No se pudo detectar categoría o marca desde la URL.');
    }
});