/* -------------------------------------------------
   core/store.js  –  helpers genéricos reutilizables
-------------------------------------------------- */

export const save = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

export const load = (key, def = []) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? def; }
    catch { return def; }
  };