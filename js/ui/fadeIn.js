/* -------------------------------------------------
   ui/fadeIn.js  –  anima .fade-in cuando entra al viewport
-------------------------------------------------- */

export const initFadeIn = () => {
    const elems = document.querySelectorAll('.fade-in');
    if (!elems.length) return;

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });

    elems.forEach(el => io.observe(el));
};
 /* */ 