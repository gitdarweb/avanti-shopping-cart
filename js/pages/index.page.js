// js/pages/index.page.js
import { initSlider } from '../ui/slider.js';
import { updateCartCount, renderPreview } from '../cart/ui.js';
import { catalogInit } from '../core/catalog.js';
document.addEventListener('DOMContentLoaded', () => {
    console.log('🟢 index.page.js cargado – voy a lanzar initSlider');
    // 1️⃣ slider automático
    initSlider();

    // 2️⃣ carrito (contador + mini-preview)
    updateCartCount();
    renderPreview();
    catalogInit(); // inicializa el catálogo si es necesario
    // 3️⃣ catálogo marcas o productos si aplica
    // catalogInit(); // por ejemplo, para destacar algunos productos
});