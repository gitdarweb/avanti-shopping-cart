// ===========================================
// Renderizado dinámico de productos
// ===========================================
function renderizarProductosPor(tipo, clave) {
    let listaProductos = [];

    // Obtener productos según tipo
    if (tipo === 'marca') {
        listaProductos = productosPorMarca?.[clave.toLowerCase()] || [];
    } else if (tipo === 'categoria') {
        listaProductos = products?.[clave.toLowerCase()] || [];
    }

    const contenedor = document.getElementById('contenedor-productos');
    const titulo = document.getElementById('titulo-productos');

    // Validación DOM
    if (!contenedor || !titulo) {
        console.warn("⚠️ Elemento contenedor o título no encontrados en el DOM.");
        return;
    }

    // Título dinámico
    titulo.textContent = tipo === 'marca'
        ? `Productos de la marca: ${capitalize(clave)}`
        : `Categoría: ${capitalize(clave)}`;

    contenedor.innerHTML = '';

    // Sin productos
    if (listaProductos.length === 0) {
        contenedor.innerHTML = '<p>😔 No hay productos para mostrar.</p>';
        return;
    }

    // Renderizado de productos
    listaProductos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'tarjeta-producto';

        // Usamos template seguro con comillas escapadas
        const precioFormateado = producto.precio.toLocaleString('es-AR');

        card.innerHTML = `
            <img src="../img/productos/${producto.imagen}" alt="${producto.nombre}" />
            <h3>${producto.nombre}</h3>
            <p>$${precioFormateado}</p>
            <button class="btn-hero small"
                onclick="agregarAlCarrito(&quot;${producto.nombre}&quot;, ${producto.precio}, '../img/productos/${producto.imagen}')">
                Agregar al carrito
            </button>
        `;

        contenedor.appendChild(card);
    });
}

// Capitaliza el primer carácter
function capitalize(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
