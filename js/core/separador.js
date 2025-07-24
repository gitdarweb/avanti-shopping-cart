// js/core/separador.js

// js/core/separador.js
export function animarSeparadores() {
    const seps = document.querySelectorAll('.separador-avanti');

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    seps.forEach(sep => observer.observe(sep));
}