const track = document.getElementById('slider-track');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = dots.length;

function goToSlide(i) {
    if (!track || !dots.length) return;

    currentSlide = i;
    track.style.transform = `translateX(-${i * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[i]) dots[i].classList.add('active');
}

// Botones anterior/siguiente
function cambiarSlide(direccion) {
    currentSlide = (currentSlide + direccion + totalSlides) % totalSlides;
    goToSlide(currentSlide);
}

// Deslizar en dispositivos móviles
let startX = 0;
track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});
track.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) cambiarSlide(1);     // deslizó a la izquierda
    else if (diff < -50) cambiarSlide(-1); // deslizó a la derecha
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => goToSlide(0));
