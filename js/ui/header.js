// header.js

export function renderHeader() {
  document.getElementById("main-header").innerHTML = `
    <div class="top-bar">
      <p>Avanti Tienda Online | Productos Profesionales</p>
    </div>

    <header class="site-header">
      <a href="/index.html" class="logo">
        <img src="/img/branding/Logo-dorado.png" alt="Avanti Hair Salon" />
      </a>

      <button class="burger" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>

      <nav class="main-nav">
        <ul>
          <li><a href="/index.html#categorias">Catálogos</a></li>
          <li><a href="/index.html#productos">Productos</a></li>
          <li><a href="/index.html#como-comprar">Cómo Comprar</a></li>
          <li><a href="/index.html#nosotras">Nosotras</a></li>
          <li><a href="/index.html#contacto">Contacto</a></li>
        </ul>
      </nav>

      <div class="user-zone">
        <a href="#">Ingresá | Registrate</a>
        <a href="/carrito.html" class="carrito-link">
          🛒 <span id="cart-count">0</span>
        </a>
      </div>
    </header>
  `;

  // ✅ Acá sí corre JS de verdad
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
  const contadorCarrito = document.getElementById("cart-count");

  if (contadorCarrito) {
    contadorCarrito.textContent = carritoGuardado.length;
  }
}
