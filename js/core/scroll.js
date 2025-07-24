/* ------------------------------------------------
   core/scroll.js
   Utilidades globales para animaciones con scroll
-------------------------------------------------- */

/**
 * Observa cualquier elemento con clase y clase extra a animar
 * @param {string} selector - Selector CSS para los elementos
 * @param {string} claseVisible - Clase a aplicar cuando se vea
 */
export function observarAnimaciones(selector, claseVisible = 'visible') {
    const elementos = document.querySelectorAll(selector);
    if (!elementos.length) return;

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add(claseVisible);
            }
        });
    }, {
        threshold: 0.25,
    });

    elementos.forEach(el => observer.observe(el));
}
  