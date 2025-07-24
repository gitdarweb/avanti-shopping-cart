export function setupLoginModal() {
    const modal = document.getElementById('auth-modal');
    const openBtn = document.querySelector('.user-zone a[href="#"]'); // Este es el enlace en el header
    const closeBtn = document.getElementById('close-auth');
    const switchLink = document.getElementById('switch-auth');
    const title = document.getElementById('auth-title');
    const submitBtn = document.getElementById('auth-submit');
    const toggleText = document.getElementById('toggle-auth');

    if (!modal || !openBtn || !closeBtn || !switchLink) {
        console.warn("No se encontró algún elemento del modal");
        return;
    }

    let isLogin = true;

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        title.textContent = isLogin ? "Ingresá" : "Registrate";
        submitBtn.textContent = isLogin ? "Ingresar" : "Registrarme";
        toggleText.innerHTML = isLogin
            ? '¿No tenés cuenta? <a href="#" id="switch-auth">Registrate</a>'
            : '¿Ya tenés cuenta? <a href="#" id="switch-auth">Ingresá</a>';
        setupLoginModal(); // re-asociar evento después del innerHTML
    });
}
/* */