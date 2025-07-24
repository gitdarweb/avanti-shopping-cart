// js/core/catalog.js
import { todosLosProductos } from '../core/products.js';
import { updateCartCount } from '../core/products.js';

export const catalogInit = () => {
    console.log('✅ catalogInit ejecutado');

    const container = document.getElementById('product-container');
    if (!container) {
        console.warn('❌ No se encontró el contenedor de productos');
        return;
    }

    container.innerHTML = '';

    todosLosProductos.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <h3>${product.nombre}</h3>
            <p>$${product.precio}</p>
            <button data-id="${product.id}">Agregar al carrito</button>
        `;

        card.querySelector('button').addEventListener('click', () => {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Verificar si el producto ya está en el carrito
            const existente = carrito.find(p => p.id === product.id);
            if (existente) {
                existente.cantidad += 1;
            } else {
                carrito.push({ ...product, cantidad: 1 });
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            console.log(`🛒 Producto "${product.nombre}" agregado al carrito`);
            updateCartCount(); // 🔄 actualizamos el contador
        });

        container.appendChild(card);
    });
};
