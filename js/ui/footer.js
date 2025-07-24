export function renderFooter() {
  // Calculamos la profundidad desde la raíz para ajustar rutas relativas
  const depth = window.location.pathname
    .split("/") // Dividimos la ruta por "/"
    .filter(segment => segment && !segment.includes(".")) // Quitamos vacío y archivos (ej. "moroccanoil.html")
    .length;

  // Generamos prefijo dinámico: "" para raíz, "../" para subcarpetas
  const prefix = "../".repeat(depth);

  const footerElement = document.getElementById("main-footer");
  if (!footerElement) return;

  footerElement.innerHTML = `
    <footer class="site-footer">
      <div class="footer-container">
        
        <div class="footer-column about">
          <h3>Avanti Hair Salon</h3>
          <p>La Plata • Productos y asesoramiento de calidad</p>
        </div>

        <div class="footer-column links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="${prefix}index.html#categorias">Catálogos</a></li>
            <li><a href="${prefix}index.html#productos">Productos</a></li>
            <li><a href="${prefix}index.html#como-comprar">Cómo Comprar</a></li>
            <li><a href="${prefix}index.html#nosotras">Nosotras</a></li>
            <li><a href="${prefix}index.html#contacto">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-column legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="${prefix}terminos.html">Términos</a></li>
            <li><a href="${prefix}privacidad.html">Política de Privacidad</a></li>
          </ul>
          <div class="social-icons">
            <a href="https://instagram.com/avanti.hairsalon" target="_blank" rel="noopener">
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://wa.me/5492216908851" target="_blank" rel="noopener">
              <i class="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-copy">
        <p>© 2025 Avanti Hair Salon – La Plata</p>
      </div>
    </footer>

    <a href="https://wa.me/5492216908851" class="whatsapp-float" target="_blank" aria-label="Chatear por WhatsApp">
      <i class="fab fa-whatsapp" aria-hidden="true"></i>
    </a>
  `;
}
/* */