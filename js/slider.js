// Slider o carrusel de imágenes
// slider.js

// Slider manual de hero
const track = document.getElementById('slider-track');
const dots = document.querySelectorAll('.dot');

function goToSlide(i) {
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[i].classList.add('active');
}

// Para auto‑avance (opcional):
// let currentSlide = 0;
// setInterval(() => {
//   currentSlide = (currentSlide + 1) % dots.length;
//   goToSlide(currentSlide);
// }, 5000);
