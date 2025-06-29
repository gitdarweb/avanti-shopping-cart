// main.js
console.log("main.js cargado");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado");

    // ==== MENÚ HAMBURGUESA ====
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    if (hamburger && sidebar && overlay) {
        hamburger.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");

            // Bloquear scroll del body cuando el menú está abierto
            if (sidebar.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        });

        // Cerrar menú al hacer clic en cualquier enlace del menú
        sidebar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("active");
                overlay.classList.remove("active");
                document.body.style.overflow = "";
            });
        });

        // Cerrar menú al hacer clic en overlay (fondo)
        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    // ==== CARGA DE PRODUCTOS POR URL (ej: productos/shampoos.html) ====
    const path = window.location.pathname;
    const match = path.match(/\/productos\/(\w+)\.html$/);
    const imgBase = path.includes("/productos/") ? "../img" : "img";
    const contenedor = document.getElementById("product-list");

    if (match && contenedor) {
        const marca = match[1];
        const productos = productosPorMarca?.[marca] || products?.[marca];

        if (productos) {
            productos.forEach((prod) => {
                const card = document.createElement("div");
                card.className = "categoria-card";

                const img = document.createElement("img");
                img.src = `${imgBase}/${marca}/${prod.imagen || 'placeholder.jpg'}`;
                img.alt = prod.nombre;

                const nombre = document.createElement("p");
                nombre.textContent = prod.nombre;

                const precio = document.createElement("p");
                precio.textContent = `$${(prod.precio || 0).toLocaleString("es-AR")}`;

                const boton = document.createElement("button");
                boton.textContent = "Agregar al carrito";
                boton.classList.add("btn-hero", "small");
                boton.onclick = () => {
                    addToCart(prod.nombre, prod.precio);
                    alert(`"${prod.nombre}" agregado al carrito`);
                };

                card.appendChild(img);
                card.appendChild(nombre);
                card.appendChild(precio);
                card.appendChild(boton);

                contenedor.appendChild(card);
            });
        }
    }

    // ==== PRODUCTOS DESTACADOS EN INDEX ====
    const destacados = document.getElementById("destacados");
    if (destacados) {
        const destacadosList = products.shampoos.slice(0, 4);
        destacadosList.forEach((prod) => {
            const card = document.createElement("div");
            card.className = "categoria-card";

            const img = document.createElement("img");
            img.src = `img/shampoos/${prod.imagen}`;
            img.alt = prod.nombre;

            const nombre = document.createElement("p");
            nombre.textContent = prod.nombre;

            const precio = document.createElement("p");
            precio.textContent = `$${prod.precio.toLocaleString("es-AR")}`;

            const boton = document.createElement("button");
            boton.textContent = "Agregar al carrito";
            boton.classList.add("btn-hero", "small");
            boton.onclick = () => {
                addToCart(prod.nombre, prod.precio);
                alert(`"${prod.nombre}" agregado al carrito`);
            };

            card.appendChild(img);
            card.appendChild(nombre);
            card.appendChild(precio);
            card.appendChild(boton);
            destacados.appendChild(card);
        });
    }

    // ==== BOTÓN FINALIZAR COMPRA ====
    const finalizarBtn = document.getElementById("finalizarCompra");
    if (finalizarBtn) {
        finalizarBtn.addEventListener("click", () => {
            const cart = getCart();
            if (!cart.length) {
                alert("Tu carrito está vacío.");
                return;
            }

            const resumen = cart.map(item =>
                `• ${item.nombre} x${item.cantidad} = $${(item.precio * item.cantidad).toLocaleString("es-AR")}`
            ).join("\n");

            const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

            alert(`Resumen de tu compra:\n\n${resumen}\n\nTotal: $${total.toLocaleString("es-AR")}`);
        });
    }

    // ==== ACTUALIZAR CONTADOR DEL CARRITO ====
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    // ==== ANIMACIÓN FADE-IN AL SCROLLEAR ====
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});
