// Productos por marca y categoría
// === PRODUCTOS POR MARCA (para los 8 catálogos por logo) ===
const productosPorMarca = {
    moroccanoil: [
        { nombre: "Hydration Shampoo 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Hydration Acondicionador 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Hydration Mascara Intensa 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Hydration Mascara Ultraligera 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Curly Shampoo 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Curly Acondicionador 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Crema intensa para rizos 300ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Repair Shampoo 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Repair Acondicionador 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Repair Mascara 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Frizz Control Shampoo 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Frizz Control Acondicionador 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Frizz Control Mascara 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Frizz Control Loción suavizante 300ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Frizz Control Spray 160ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Color Care Shampoo 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Color Care Acondicionador 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Tratamiento de Argán Clásico 25ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Tratamiento de Argán Clásico 50ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Tratamiento de Argán Clásico 100ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Tratamiento de Argán Light 25ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Tratamiento de Argán Light 50ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Tratamiento de Argán Light 100ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Bruma Perfumada", precio: 0, imagen: "placeholder.jpg" }
    ],
    tigi: [
        { nombre: "Recovery Shampoo 400ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Recovery Acondicionador 400ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Resurrection Shampoo 400ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Resurrection Acondicionador 400ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Colour Goddess Shampoo 400ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Colour Goddess Acondicionador 400ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "After Party 100ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Foxy Curls 200ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Amplifier 113ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Small Talk 240ml", precio: 0, imagen: "placeholder.jpg" }
    ],
    revlon: [
        { nombre: "Equave Lisslook - Serum 85ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Equave Bifase Hidratante", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Unique One - 10 Beneficios 150ml", precio: 0, imagen: "placeholder.jpg" }
    ],
    olaplex: [
        { nombre: "Nro 0 155ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nro 3 100ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nro 4 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nro 5 250ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nro 6 100ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nro 7 30ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nro 8 100ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nro 9 90ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nro 10 200ml", precio: 0, imagen: "placeholder.jpg" }
    ],
    hairssime: [
        { nombre: "Nutrikeratina 225mg", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Nutri Advance Serum 63ml", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Glow Brillo Spray 485ml", precio: 0, imagen: "placeholder.jpg" }
    ],
    avantibox: [
        { nombre: "Avanti Box Set (4 piezas)", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Funda de Almohada", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Scrunchies", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Vincha", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Cofia", precio: 0, imagen: "placeholder.jpg" }
    ],
    karseell: [
        { nombre: "Máscara 500ml", precio: 0, imagen: "placeholder.jpg" }
    ],
    cepillos: [
        { nombre: "Cepillo Eurostil", precio: 0, imagen: "placeholder.jpg" },
        { nombre: "Masajeador", precio: 0, imagen: "placeholder.jpg" }
    ]
};

// === PRODUCTOS POR CATEGORÍA (para iconos: shampoos, etc.) ===
const products = {};

products["shampoos"] = [
    { nombre: "Hydration Shampoo 250ml", precio: 0, imagen: "hydration.jpg" },
    { nombre: "Curly Shampoo 250ml", precio: 0, imagen: "curly.jpg" },
    { nombre: "Repair Shampoo 250ml", precio: 0, imagen: "repair.jpg" },
    { nombre: "Frizz Control Shampoo 250ml", precio: 0, imagen: "frizz.jpg" },
    { nombre: "Color Care Shampoo 250ml", precio: 0, imagen: "colorcare.jpg" },
    { nombre: "Recovery Shampoo 400ml", precio: 0, imagen: "recovery.jpg" },
    { nombre: "Resurrección Shampoo 400ml", precio: 0, imagen: "resurreccion.jpg" },
    { nombre: "Colour Goddess Shampoo 400ml", precio: 0, imagen: "goddess.jpg" }
];

products["acondicionadores"] = [
    { nombre: "Hydration Acondicionador 250ml", precio: 0, imagen: "hydration.jpg" },
    { nombre: "Curly Acondicionador 250ml", precio: 0, imagen: "curly.jpg" },
    { nombre: "Repair Acondicionador 250ml", precio: 0, imagen: "repair.jpg" },
    { nombre: "Frizz Control Acondicionador 250ml", precio: 0, imagen: "frizz.jpg" },
    { nombre: "Color Care Acondicionador 250ml", precio: 0, imagen: "colorcare.jpg" },
    { nombre: "Recovery Acondicionador 400ml", precio: 0, imagen: "recovery.jpg" },
    { nombre: "Resurrección Acondicionador 400ml", precio: 0, imagen: "resurreccion.jpg" },
    { nombre: "Colour Goddess Acondicionador 400ml", precio: 0, imagen: "goddess.jpg" }
];

products["mascaras"] = [
    { nombre: "Hydration Máscara Intensa 250ml", precio: 0, imagen: "hydration_intensa.jpg" },
    { nombre: "Hydration Máscara Ultraligera 250ml", precio: 0, imagen: "hydration_ultraligera.jpg" },
    { nombre: "Repair Máscara 250ml", precio: 0, imagen: "repair.jpg" },
    { nombre: "Frizz Control Máscara 250ml", precio: 0, imagen: "frizz.jpg" }
];

products["serums"] = [
    { nombre: "Equave Liss Look Serum 85ml", precio: 0, imagen: "equave.jpg" },
    { nombre: "Nutri Advance Serum 63ml", precio: 0, imagen: "nutri_advance.jpg" },
    { nombre: "Tratamiento de Argán Clásico 25ml", precio: 0, imagen: "argan_25.jpg" },
    { nombre: "Tratamiento de Argán Clásico 50ml", precio: 0, imagen: "argan_50.jpg" },
    { nombre: "Tratamiento de Argán Clásico 100ml", precio: 0, imagen: "argan_100.jpg" },
    { nombre: "Tratamiento de Argán Light 25ml", precio: 0, imagen: "argan_light_25.jpg" },
    { nombre: "Tratamiento de Argán Light 50ml", precio: 0, imagen: "argan_light_50.jpg" },
    { nombre: "Tratamiento de Argán Light 100ml", precio: 0, imagen: "argan_light_100.jpg" }
];
