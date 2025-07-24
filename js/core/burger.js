/* js/core/burger.js */
export function initBurger() {
    const btn = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
  }