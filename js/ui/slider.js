/* -------------------------------------------------
   ui/slider.js  –  slider simple sin flechas
-------------------------------------------------- */
let track, dots, currentSlide, totalSlides, intervalId;

export function initSlider() {
    track = document.getElementById('slider-track');
    dots = Array.from(document.querySelectorAll('.dot'));

    // ✔️ Verificación rápida
    if (!track) { console.warn('❌  #slider-track no encontrado'); return; }
    if (dots.length === 0) {
        console.warn('❌  No hay .dot en el HTML');
        return;
    }

    // Cuenta imágenes reales dentro del track
    const realSlides = track.querySelectorAll('img').length;
    totalSlides = Math.min(realSlides, dots.length);          // <- evita overflow
    currentSlide = 0;

    /* ---------- helpers ---------- */
    const goTo = i => {
        currentSlide = (i + totalSlides) % totalSlides;
        track.style.transform = `translateX(-${100 * currentSlide}%)`;

        dots.forEach(d => d.classList.remove('active'));
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    };

    /* ---------- auto avance ---------- */
    clearInterval(window.__sliderInterval);
    intervalId = setInterval(() => goTo(currentSlide + 1), 4000);
    window.__sliderInterval = intervalId;           // depuración opcional

    /* ---------- click en dots ---------- */
    dots.forEach((dot, i) =>
        dot.addEventListener('click', () => {
            clearInterval(intervalId);
            goTo(i);
            intervalId = setInterval(() => goTo(currentSlide + 1), 4000);
            window.__sliderInterval = intervalId;
        })
    );

    /* ---------- swipe móvil (opcional) ---------- */
    let startX = 0;
    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        clearInterval(intervalId);
    });
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (diff > 40) goTo(currentSlide + 1);
        if (diff < -40) goTo(currentSlide - 1);
        intervalId = setInterval(() => goTo(currentSlide + 1), 4000);
        window.__sliderInterval = intervalId;
    });

    /* ---------- arranque ---------- */
    goTo(0);
    console.log('🎯 Slider iniciado correctamente');
}
// Nota: Asegúrate de que el HTML tenga un elemento con id="slider-track"
// y varios elementos con la clase "dot" para los indicadores.
/* */