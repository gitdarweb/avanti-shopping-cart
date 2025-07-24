// js/pages/index.page.js

// js/pages/index.page.js

import { renderHeader } from '../ui/header.js';               // <-- NUEVO
import { initSlider } from '../ui/slider.js';
import { updateCartCount, renderPreview } from '../cart/ui.js';
import { catalogInit } from '../core/catalog.js';
import { initBurger } from '../core/burger.js';
import { animarSeparadores } from '../core/separador.js';
import { setupLoginModal } from "../ui/login-modal.js";

document.addEventListener('DOMContentLoaded', () => {
    console.log('🟢 index.page.js cargado – voy a lanzar funciones de inicio');

    renderHeader();           // 0. Cargar header en el DOM primero (🔥 CLAVE)

    // Usamos un pequeño retraso para que el DOM del header se actualice antes de usar sus elementos
    setTimeout(() => {
        updateCartCount();        // 1. Contador de carrito (🔄 actualiza visualmente)
        renderPreview();          // 2. Mini-preview carrito
        initSlider();             // 3. Slider automático
        catalogInit();            // 4. Catálogo dinámico
        initBurger();             // 5. Menú hamburguesa
        animarSeparadores();      // 6. Separador animado
        setupLoginModal();        // 7. Modal login/registro
    }, 0);
});
/* */