// === PRODUCTOS POR MARCA (para los 8 catálogos por logo) ===
const productosPorMarca = {
    moroccanoil: [
        { nombre: "Hydration Shampoo 250ml", precio: 56700, imagen: "hydration-shampoo.jpg" },
        { nombre: "Hydration Acondicionador 250ml", precio: 56700, imagen: "hydration-acondicionador.jpg" },
        { nombre: "Hydration Mascara Intensa 250ml", precio: 87790, imagen: "hydration-mascara-intensa.jpg" },
        { nombre: "Hydration Mascara Ultraligera 250ml", precio: 87790, imagen: "hydration-ultraligera.jpg" },
        { nombre: "Curly Shampoo 250ml", precio: 56700, imagen: "curly-shampoo.jpg" },
        { nombre: "Curly Acondicionador 250ml", precio: 56700, imagen: "curly-acondicionador.jpg" },
        { nombre: "Crema intensa para rizos 300ml", precio: 75560, imagen: "crema-rizos.jpg" },
        { nombre: "Repair Shampoo 250ml", precio: 56700, imagen: "repair-shampoo.jpg" },
        { nombre: "Repair Acondicionador 250ml", precio: 56700, imagen: "repair-acondicionador.jpg" },
        { nombre: "Repair Mascara 250ml", precio: 87790, imagen: "repair-mascara.jpg" },
        { nombre: "Frizz Control Shampoo 250ml", precio: 56700, imagen: "frizz-shampoo.jpg" },
        { nombre: "Frizz Control Acondicionador 250ml", precio: 56700, imagen: "frizz-acondicionador.jpg" },
        { nombre: "Frizz Control Mascara 250ml", precio: 87790, imagen: "frizz-mascara.jpg" },
        { nombre: "Frizz Control Loción suavizante 300ml", precio: 75560, imagen: "frizz-locion.jpg" },
        { nombre: "Frizz Control Spray 160ml", precio: 65560, imagen: "frizz-spray.jpg" },
        { nombre: "Color Care Shampoo 250ml", precio: 56700, imagen: "colorcare-shampoo.jpg" },
        { nombre: "Color Care Acondicionador 250ml", precio: 56700, imagen: "colorcare-acondicionador.jpg" },
        { nombre: "Tratamiento de Argán Clásico 25ml", precio: 41120, imagen: "argan-clasico-25.jpg" },
        { nombre: "Tratamiento de Argán Clásico 50ml", precio: 73334, imagen: "argan-clasico-50.jpg" },
        { nombre: "Tratamiento de Argán Clásico 100ml", precio: 98890, imagen: "argan-clasico-100.jpg" },
        { nombre: "Tratamiento de Argán Light 25ml", precio: 41120, imagen: "argan-light-25.jpg" },
        { nombre: "Tratamiento de Argán Light 50ml", precio: 73334, imagen: "argan-light-50.jpg" },
        { nombre: "Tratamiento de Argán Light 100ml", precio: 98890, imagen: "argan-light-100.jpg" },
        { nombre: "Bruma Perfumada", precio: 37780, imagen: "bruma.jpg" }
    ],
    tigi: [
        { nombre: "Recovery Shampoo 400ml", precio: 46670, imagen: "recovery-shampoo.jpg" },
        { nombre: "Recovery Acondicionador 400ml", precio: 54450, imagen: "recovery-acondicionador.jpg" },
        { nombre: "Resurrection Shampoo 400ml", precio: 46670, imagen: "resurrection-shampoo.jpg" },
        { nombre: "Resurrection Acondicionador 400ml", precio: 54450, imagen: "resurrection-acondicionador.jpg" },
        { nombre: "Colour Goddess Shampoo 400ml", precio: 46670, imagen: "goddess-shampoo.jpg" },
        { nombre: "Colour Goddess Acondicionador 400ml", precio: 54450, imagen: "goddess-acondicionador.jpg" },
        { nombre: "After Party 100ml", precio: 50780, imagen: "afterparty.jpg" },
        { nombre: "Foxy Curls 200ml", precio: 43340, imagen: "foxycurls.jpg" },
        { nombre: "Amplifier 113ml", precio: 42230, imagen: "amplifier.jpg" },
        { nombre: "Small Talk 240ml", precio: 46830, imagen: "smalltalk.jpg" }
    ],
    revlon: [
        { nombre: "Equave Lisslook - Serum 85ml", precio: 24445, imagen: "equave-lisslook.jpg" },
        { nombre: "Equave Bifase Hidratante", precio: 27780, imagen: "equave-bifase.jpg" },
        { nombre: "Unique One - 10 Beneficios 150ml", precio: 38890, imagen: "uniqone.jpg" }
    ],
    olaplex: [
        { nombre: "Nro 0 155ml", precio: 71120, imagen: "olaplex-0.jpg" },
        { nombre: "Nro 3 100ml", precio: 71120, imagen: "olaplex-3.jpg" },
        { nombre: "Nro 4 250ml", precio: 71120, imagen: "olaplex-4.jpg" },
        { nombre: "Nro 5 250ml", precio: 71120, imagen: "olaplex-5.jpg" },
        { nombre: "Nro 6 100ml", precio: 71120, imagen: "olaplex-6.jpg" },
        { nombre: "Nro 7 30ml", precio: 71120, imagen: "olaplex-7.jpg" },
        { nombre: "Nro 8 100ml", precio: 71120, imagen: "olaplex-8.jpg" },
        { nombre: "Nro 9 90ml", precio: 71120, imagen: "olaplex-9.jpg" },
        { nombre: "Nro 10 200ml", precio: 71120, imagen: "olaplex-10.jpg" }
    ],
    hairssime: [
        { nombre: "Nutrikeratina 225mg", precio: 28890, imagen: "nutrikeratina.jpg" },
        { nombre: "Nutri Advance Serum 63ml", precio: 24450, imagen: "nutri-serum.jpg" },
        { nombre: "Glow Brillo Spray 485ml", precio: 27780, imagen: "glow-spray.jpg" }
    ],
    avantibox: [
        {
            nombre: "Avanti Box Set 4 piezas: funda, scrunchies, vincha, cofia",
            precio: 52000,
            imagen: "avanti-box.jpg"
        }
    ],
    karseell: [
        { nombre: "Máscara 500ml", precio: 61120, imagen: "karseell-mascara.jpg" }
    ],
    cepillos: [
        { nombre: "Cepillo Eurostil", precio: 8890, imagen: "eurostil.jpg" },
        { nombre: "Masajeador", precio: 5560, imagen: "masajeador.jpg" }
    ]
};

// === PRODUCTOS POR CATEGORÍA (para los filtros del menú) ===
const products = {
    shampoos: [
        { nombre: "Hydration Shampoo 250ml", precio: 56700, imagen: "hydration-shampoo.jpg" },
        { nombre: "Curly Shampoo 250ml", precio: 56700, imagen: "curly-shampoo.jpg" },
        { nombre: "Repair Shampoo 250ml", precio: 56700, imagen: "repair-shampoo.jpg" },
        { nombre: "Frizz Control Shampoo 250ml", precio: 56700, imagen: "frizz-shampoo.jpg" },
        { nombre: "Color Care Shampoo 250ml", precio: 56700, imagen: "colorcare-shampoo.jpg" },
        { nombre: "Recovery Shampoo 400ml", precio: 46670, imagen: "recovery-shampoo.jpg" },
        { nombre: "Resurrection Shampoo 400ml", precio: 46670, imagen: "resurrection-shampoo.jpg" },
        { nombre: "Colour Goddess Shampoo 400ml", precio: 46670, imagen: "goddess-shampoo.jpg" }
    ],
    acondicionadores: [
        { nombre: "Hydration Acondicionador 250ml", precio: 56700, imagen: "hydration-acondicionador.jpg" },
        { nombre: "Curly Acondicionador 250ml", precio: 56700, imagen: "curly-acondicionador.jpg" },
        { nombre: "Repair Acondicionador 250ml", precio: 56700, imagen: "repair-acondicionador.jpg" },
        { nombre: "Frizz Control Acondicionador 250ml", precio: 56700, imagen: "frizz-acondicionador.jpg" },
        { nombre: "Color Care Acondicionador 250ml", precio: 56700, imagen: "colorcare-acondicionador.jpg" },
        { nombre: "Recovery Acondicionador 400ml", precio: 54450, imagen: "recovery-acondicionador.jpg" },
        { nombre: "Resurrection Acondicionador 400ml", precio: 54450, imagen: "resurrection-acondicionador.jpg" },
        { nombre: "Colour Goddess Acondicionador 400ml", precio: 54450, imagen: "goddess-acondicionador.jpg" }
    ],
    mascaras: [
        { nombre: "Hydration Mascara Intensa 250ml", precio: 87790, imagen: "hydration-mascara-intensa.jpg" },
        { nombre: "Hydration Mascara Ultraligera 250ml", precio: 87790, imagen: "hydration-ultraligera.jpg" },
        { nombre: "Repair Mascara 250ml", precio: 87790, imagen: "repair-mascara.jpg" },
        { nombre: "Frizz Control Mascara 250ml", precio: 87790, imagen: "frizz-mascara.jpg" },
        { nombre: "Máscara 500ml", precio: 61120, imagen: "karseell-mascara.jpg" }
    ],
    serums: [
        { nombre: "Equave Lisslook - Serum 85ml", precio: 24445, imagen: "equave-lisslook.jpg" },
        { nombre: "Nutri Advance Serum 63ml", precio: 24450, imagen: "nutri-serum.jpg" },
        { nombre: "Tratamiento de Argán Clásico 25ml", precio: 41120, imagen: "argan-clasico-25.jpg" },
        { nombre: "Tratamiento de Argán Clásico 50ml", precio: 73334, imagen: "argan-clasico-50.jpg" },
        { nombre: "Tratamiento de Argán Clásico 100ml", precio: 98890, imagen: "argan-clasico-100.jpg" },
        { nombre: "Tratamiento de Argán Light 25ml", precio: 41120, imagen: "argan-light-25.jpg" },
        { nombre: "Tratamiento de Argán Light 50ml", precio: 73334, imagen: "argan-light-50.jpg" },
        { nombre: "Tratamiento de Argán Light 100ml", precio: 98890, imagen: "argan-light-100.jpg" }
    ]
};
