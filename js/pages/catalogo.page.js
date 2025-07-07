// js/pages/catalogo.page.js
import { renderizarProductosPor } from '../core/renderProducts.js';
import { updateCartCount } from '../cart/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    const path = window.location.pathname;
    const isCategoria = path.includes('/categorias/');
    const isMarca = path.includes('/marcas/');
    const nombre = path.split('/').pop().replace('.html', '');

    if (isCategoria) {
        renderizarProductosPor('categoria', nombre);
    } else if (isMarca) {
        renderizarProductosPor('marca', nombre);
    } else {
        console.warn('No se pudo detectar la categoría o marca desde la URL.');
    }
});
// Nota: Este código asume que las funciones y módulos necesarios están correctamente implementados y disponibles.
// Asegúrate de que `renderizarProductosPor` maneje correctamente los casos de categorías y marcas, y que el HTML tenga los elementos necesarios para mostrar los productos.
// También se asume que `updateCartCount` actualiza el contador del carrito en la página actual. Si no es así, deberías ajustar el código según tus necesidades específicas.
// Este código se ejecutará cuando el DOM esté completamente cargado, asegurando que los elementos necesarios estén disponibles para manipularse. Si necesitas realizar más acciones específicas al cargar la página, puedes agregarlas dentro del mismo bloque `DOMContentLoaded`.
// Asegúrate de que el archivo `catalogo.page.js` esté correctamente vinculado en tu HTML para que este script se ejecute al cargar la página de catálogo. Por ejemplo, deberías tener algo como esto en tu HTML:
// ```html