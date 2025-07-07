/* -------------------------------------------------
   js/cart/cart.js  –  Núcleo del carrito (sin UI)
   -------------------------------------------------
   · Mantiene el estado en memoria
   · Persiste en localStorage
   · Provee helpers para otros módulos (UI, páginas)
-------------------------------------------------- */

const STORAGE_KEY = 'carrito_avanti';

/* 1. Estado -------------------------------------------------- */
let items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

/* 2. Helpers internos ---------------------------------------- */
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

/* 3. API pública (export) ------------------------------------ */

/** Devuelve una **copia** inmutable del carrito */
export function getCart() {
    return items.map(i => ({ ...i }));
}

/** Cantidad total de ítems (para el contador 🛒) */
export function getTotalQty() {
    return items.reduce((sum, it) => sum + it.cantidad, 0);
}

/** Total en pesos */
export function getTotalPrice() {
    return items.reduce((sum, it) => sum + it.cantidad * it.precio, 0);
}

/**
 * Agrega 1 unidad (o la cantidad indicada) de un producto.
 * @param {Object} prod { id, nombre, precio, imagen }
 * @param {number} qty  Cantidad (por defecto 1)
 */
export function addItem(prod, qty = 1) {
    const found = items.find(i => i.id === prod.id);
    if (found) {
        found.cantidad += qty;
    } else {
        items.push({ ...prod, cantidad: qty });
    }
    save();
}

/** Elimina un producto por índice (posición en el array) */
export function removeIndex(idx) {
    items.splice(idx, 1);
    save();
}

/** Vacía por completo el carrito */
export function clearCart() {
    items = [];
    save();
}

/** Sincroniza el carrito desde localStorage (p/ páginas nuevas) */
export function refreshFromStorage() {
    items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/* -------------------------------------------------
   ¡Listo!  Otros módulos (ui.js, *.page.js) deberán
   importar las funciones que necesiten.
-------------------------------------------------- */
