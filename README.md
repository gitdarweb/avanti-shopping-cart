# 💇‍♀️ Avanti Hair Salon – Tienda Online

Sitio web de venta de productos profesionales de peluquería y cuidado personal. Diseñado para Avanti Hair Salon (La Plata), permite mostrar catálogos por marca o categoría, gestionar un carrito de compras y coordinar la venta final por WhatsApp o futuro sistema de pagos.

---

## 📁 Estructura del Proyecto
<!-- ✅-->
proyecto-avanti/
├── index.html ← Página principal
├── carrito.html ← Página dedicada al carrito
├── terminos.html ← Términos y condiciones de uso
├── privacidad.html ← Política de privacidad
├── readme.md ← Este documento
│
├── productos/ ← Catálogos individuales por categoría o marca
│ ├── acondicionadores.html
│ ├── avantibox.html
│ ├── cepillos.html
│ ├── hairssime.html
│ ├── karseell.html
│ ├── mascaras.html
│ ├── moroccanoil.html
│ ├── olaplex.html
│ ├── revlon.html
│ ├── serums.html
│ ├── shampoos.html
│ └── tigi.html
│
├── articulos/ ← (Vacía) Carpeta reservada para carga de productos por Excel o JSON
│
├── css/
│ ├── styles.css ← Estilos principales globales
│ ├── styles-backup.css ← Versión de respaldo
│ └── componentes/ ← CSS modularizado por sección
│ ├── animations.css
│ ├── footer.css
│ ├── header.css
│ ├── hero-info.css
│ ├── iconos-productos.css
│ ├── info.css
│ ├── marcas-categorias.css
│ ├── productos.css
│ ├── reset.css
│ ├── separadores.css
│ ├── sidebar.css
│ ├── slider.css
│ ├── utilities.css
│ └── variables.css
│
├── js/
│ ├── cart.js ← Toda la lógica del carrito: agregar, mostrar, eliminar, vaciar, finalizar compra
│ ├── products.js ← Base de productos (actualmente en forma de datos simples o ejemplos)
│ ├── main.js ← Funciones generales: eventos, botones, confirmaciones, inicialización
│ └── slider.js ← Carrusel de imágenes en portada
│
├── img/
│ ├── avanti box/
│ ├── categorias/ ← Shampoos, mascarillas, acondicionadores, etc.
│ ├── cepillos/
│ ├── hairssime/
│ ├── karseell/
│ ├── logos/ ← Logos de marcas
│ ├── moroccanoil/
│ ├── olaplex/
│ ├── revlon/
│ ├── salon/ ← Fotos del salón y staff
│ └── tigi/

---

## ✅ Funcionalidades principales implementadas

- ✔️ Vista previa del carrito en `index.html` (simple y clara)
- ✔️ Página `carrito.html` con funcionalidades:
  - Agregar, eliminar, vaciar productos
  - Mostrar total y resumen
  - Confirmación de acciones
- ✔️ Contador de productos actualizado dinámicamente
- ✔️ Persistencia del carrito mediante `localStorage`
- ✔️ Alert con resumen de compra final (simulación)
- ✔️ Código limpio y organizado en archivos separados

---

## 🧾 Tareas pendientes

- [ ] **Integración con Mercado Pago**
  - Crear un archivo `pago.html` o configurar `window.location.href` desde `finalizarCompra()`
  - Vincular con una cuenta real o de prueba
  - Posibles métodos:
    - Web Checkout simple (redirección)
    - Checkout Pro (formulario + SDK)
    - Pago manual por alias/QR + contacto por WhatsApp

- [ ] **Carga dinámica de productos (opcional)**
  - Usar la carpeta `articulos/` para importar productos desde Excel o JSON
  - Facilitar que el cliente administre precios y stock

- [ ] **Validaciones y mejoras UX**
  - Desactivar botón de compra si el carrito está vacío
  - Agregar animaciones o notificaciones suaves (tipo toast)

---

## 👩‍💻 Créditos

**Diseño y desarrollo:**  
Duarte Team para Avanti Hair Salon – La Plata  
Contacto: [WhatsApp Avanti](https://wa.me/5492216908851)

---

## 📌 Notas Técnicas

- El archivo `cart.js` contiene **toda** la lógica del carrito
- El archivo `main.js` se encarga de iniciar los botones y llamadas necesarias
- Todos los productos son estáticos, sin backend
- El contador del carrito se muestra tanto en `index.html` como en `carrito.html`
- El diseño está pensado para ser responsive y funcionar en celulares

---

## 🚀 Instrucciones rápidas

1. Cloná el proyecto o abrilo localmente
2. Editá `products.js` para agregar tus productos
3. Asegurate de que `cart.js` y `main.js` estén bien enlazados en tus HTML
4. Probá las funciones del carrito (agregar, vaciar, comprar)
5. Agregá `pago.html` o link directo a Mercado Pago si querés cobrar online

---

¡Gracias por confiar en Avanti Hair Salon! 💖

futuro color para la tipógrafia que es muy amarilla : #C89F65;
ajustar las variables.
 /* ACTUALIZAR ESTA 👇 */
    --av-gold: #C89F65;
IMPORTANTE PARA CONTINUAR PAGO.HTML, MAS ADELANTE.

