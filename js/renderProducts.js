// Renderizado dinámico de productos
function renderizarProductosPor(tipo, clave) {
    let listaProductos = [];

    if (tipo === 'marca') {
        listaProductos = productosPorMarca[clave] || [];
    } else if (tipo === 'categoria') {
        listaProductos = products[clave] || [];
    }

    const contenedor = document.getElementById('contenedor-productos');
    const titulo = document.getElementById('titulo-productos');

    if (!contenedor || !titulo) return;

    titulo.textContent = tipo === 'marca'
        ? `Productos de la marca: ${clave.charAt(0).toUpperCase() + clave.slice(1)}`
        : `Categoría: ${clave.charAt(0).toUpperCase() + clave.slice(1)}`;

    contenedor.innerHTML = '';

    if (listaProductos.length === 0) {
        contenedor.innerHTML = '<p>No hay productos para mostrar.</p>';
        return;
    }

    listaProductos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'tarjeta-producto'; // ✅ corregido

        card.innerHTML = `
            <img src="../img/productos/${producto.imagen}" alt="${producto.nombre}" />
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio}, '../img/productos/${producto.imagen}')" class="btn-hero small">Agregar al carrito</button>
        `;

        contenedor.appendChild(card);
    });
}
