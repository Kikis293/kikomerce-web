// ============ Kikomerce — catálogo de productos ============
// Para agregar un producto nuevo, copia un bloque del arreglo PRODUCTOS y cambia sus datos.
// El campo "id" debe ser único y sin espacios (se usa en la URL: /producto.html?id=...).
// El campo "categoria" debe coincidir exactamente con una de las claves de CATEGORIAS más abajo.
//
// IMAGEN REAL: cuando tengas la foto de un producto, agrégala en assets/images/ y ponle
// su ruta en el campo "imagen" (ej: "imagen": "/assets/images/rodillo-quita-pelusa.jpg").
// Mientras el campo "imagen" esté vacío o no exista, se muestra un bloque de color con ícono.

const CATEGORIAS = {
  "Hogar": {
    gradiente: "linear-gradient(135deg, #163934, #21504A)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 11 12 3l9 8M5 10v10h14V10"/></svg>'
  },
  "Belleza": {
    gradiente: "linear-gradient(135deg, #7A3B5E, #B4720F)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v4M12 17v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M3 12h4M17 12h4M4.2 19.8 7 17M17 7l2.8-2.8"/></svg>'
  },
  "Herramientas": {
    gradiente: "linear-gradient(135deg, #4A3B2E, #8F5A0C)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m14.7 6.3 3 3L8 19H5v-3Z M17 3l4 4-2 2-4-4Z"/></svg>'
  },
  "Moda": {
    gradiente: "linear-gradient(135deg, #1F2937, #21504A)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 7V5a3 3 0 0 1 6 0v2M4 7h16l-1.5 13h-13Z"/></svg>'
  }
};

const PRODUCTOS = [
  {
    id: "rodillo-quita-pelusa",
    categoria: "Hogar",
    nombre: "Rodillo Quita Pelusa",
    precio: 54000,
    imagen: "/assets/images/rodillo-quita-pelusa-1.jpg",
    imagenes: [
      "/assets/images/rodillo-quita-pelusa-1.jpg",
      "/assets/images/rodillo-quita-pelusa-2.jpg",
      "/assets/images/rodillo-quita-pelusa-3.jpg"
    ],
    descripcion: "Rodillo quita pelusas premium, portátil y reutilizable. Fabricado con ABS + TPE de alta calidad, resistente y duradero. Su fuerte adherencia elimina pelusas, polvo y pelos de mascotas fácilmente. Lavable y reutilizable, úsalo una y otra vez. Compacto y portátil, ideal para ropa, sofás, muebles, alfombras y automóvil."
  },
  {
    id: "peine-alisador-recargable",
    categoria: "Belleza",
    nombre: "Peine Alisador Recargable",
    precio: 72000,
    imagen: "/assets/images/peine-alisador-recargable-1.jpg",
    imagenes: [
      "/assets/images/peine-alisador-recargable-1.jpg",
      "/assets/images/peine-alisador-recargable-2.jpg",
      "/assets/images/peine-alisador-recargable-3.jpg"
    ],
    descripcion: "Peine alisador ZFS-808 con cerámica premium e iones negativos para ayudar a reducir el frizz y dejar un acabado suave y brillante. Inalámbrico, compacto y recargable por USB-C: úsalo en casa, la oficina, el carro o durante tus viajes. Cuenta con 3 niveles de temperatura y pantalla LCD para adaptar el calor a tu tipo de cabello."
  },
  {
    id: "nivel-laser-multiuso",
    categoria: "Herramientas",
    nombre: "Nivel Láser Multiuso con Cinta Métrica",
    precio: 79000,
    imagen: "/assets/images/nivel-laser-multiuso-1.jpg",
    imagenes: [
      "/assets/images/nivel-laser-multiuso-1.jpg",
      "/assets/images/nivel-laser-multiuso-2.jpg",
      "/assets/images/nivel-laser-multiuso-3.jpg"
    ],
    descripcion: "Nivel láser multiuso con función horizontal, vertical o cruzada, ideal para colgar cuadros, instalar estantes y alinear cualquier proyecto en casa. Mide hasta 8 pies, nivela y alinea sin adivinar ni repetir el trabajo. Diseño compacto y resistente, pensado para hacerlo tú mismo con resultados de experto."
  },
  {
    id: "secador-ropa-portatil",
    categoria: "Hogar",
    nombre: "Secador de Ropa Portátil",
    precio: 94000,
    imagen: "/assets/images/secador-ropa-portatil-1.jpg",
    imagenes: [
      "/assets/images/secador-ropa-portatil-1.jpg",
      "/assets/images/secador-ropa-portatil-2.png",
      "/assets/images/secador-ropa-portatil-3.png"
    ],
    imagen: "",
    descripcion: "Secador de ropa portátil y retráctil, una forma práctica y eficiente de secar tus prendas sin depender del clima. Su diseño retráctil aprovecha cada centímetro y queda guardado cuando no lo necesitas. Se instala fácilmente con su sistema de gancho adhesivo en superficies firmes y limpias. Ideal para casas, apartamentos, viajes y espacios pequeños."
  },
  {
    id: "bolso-baulito-retro",
    categoria: "Moda",
    nombre: "Bolso Baulito Retro Negro",
    precio: 214000,
    imagen: "",
    descripcion: "Bolso baulito retro en negro absoluto, elaborado con telas sintéticas de alto valor y poliéster ultra resistente de alto gramaje, para un acabado estructurado y firme. Incluye caja y funda protectora de gama alta. Tamaño compacto (18 × 13 × 11 cm), ideal para tus esenciales sin cargar peso de más. Un tono atemporal que combina desde un look casual hasta una noche especial."
  }
];

// Se exponen como variables globales para que index.html, catalogo.html y producto.html las lean directamente.
window.CATEGORIAS = CATEGORIAS;
window.PRODUCTOS = PRODUCTOS;
