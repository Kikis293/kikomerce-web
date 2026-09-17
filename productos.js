// ============ Kikomerce — catálogo de productos ============
// Para agregar un producto nuevo, copia un bloque del arreglo PRODUCTOS y cambia sus datos.
// El campo "id" debe ser único y sin espacios (se usa en la URL: /producto.html?id=...).
// El campo "categoria" debe coincidir exactamente con una de las claves de CATEGORIAS más abajo.

const CATEGORIAS = {
  "Cocina": {
    gradiente: "linear-gradient(135deg, #7A3B12, #B4720F)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v4H4zM6 8v12h12V8"/></svg>'
  },
  "Decoración": {
    gradiente: "linear-gradient(135deg, #163934, #21504A)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 21V9l3-6 3 6v12M4 21h16M8 21v-6h8v6"/></svg>'
  },
  "Organización": {
    gradiente: "linear-gradient(135deg, #4A3B2E, #8F5A0C)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 12h16M4 18h10"/></svg>'
  },
  "Iluminación": {
    gradiente: "linear-gradient(135deg, #1F2937, #21504A)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/></svg>'
  },
  "Baño": {
    gradiente: "linear-gradient(135deg, #163934, #21504A)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10h18M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9M8 6l4-3 4 3"/></svg>'
  },
  "Jardín y exterior": {
    gradiente: "linear-gradient(135deg, #2F4A2E, #4C7A45)",
    icono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21V9M12 9C12 5 9 3 6 3c0 4 2 6 6 6ZM12 9c0-4 3-6 6-6 0 4-2 6-6 6Z"/></svg>'
  }
};

const PRODUCTOS = [
  {
    id: "contenedores-hermeticos",
    categoria: "Organización",
    nombre: "Set de contenedores herméticos x5",
    precio: 59900,
    descripcion: "Set de 5 contenedores herméticos apilables, ideales para mantener frescos tus alimentos en la despensa o el refrigerador. Libres de BPA y aptos para microondas."
  },
  {
    id: "jarron-ceramico",
    categoria: "Decoración",
    nombre: "Jarrón cerámico minimalista",
    precio: 74900,
    descripcion: "Jarrón de cerámica con acabado mate, diseño minimalista que combina con cualquier estilo de decoración. Perfecto para flores secas o naturales."
  },
  {
    id: "organizador-closet",
    categoria: "Organización",
    nombre: "Organizador de closet apilable",
    precio: 45900,
    descripcion: "Organizador modular apilable para closets y cajones, ideal para ropa doblada, accesorios y artículos pequeños. Fácil de limpiar."
  },
  {
    id: "lampara-led-tactil",
    categoria: "Iluminación",
    nombre: "Lámpara LED táctil regulable",
    precio: 52900,
    descripcion: "Lámpara de mesa con control táctil y 3 niveles de intensidad. Ideal para el estudio, la mesa de noche o espacios de lectura."
  },
  {
    id: "organizador-especias",
    categoria: "Cocina",
    nombre: "Organizador de especias giratorio",
    precio: 38900,
    descripcion: "Organizador giratorio de 360° para especias, con compartimentos individuales que facilitan encontrar lo que necesitas al cocinar."
  },
  {
    id: "set-accesorios-bano-bambu",
    categoria: "Baño",
    nombre: "Set de accesorios de baño en bambú",
    precio: 68900,
    descripcion: "Set de accesorios de baño en bambú natural, incluye dispensador de jabón, vaso y bandeja. Resistente a la humedad y de fácil mantenimiento."
  },
  {
    id: "maceteros-colgantes",
    categoria: "Jardín y exterior",
    nombre: "Set de maceteros colgantes x3",
    precio: 42900,
    descripcion: "Set de 3 maceteros colgantes con cuerda de macramé, perfectos para plantas pequeñas en balcones, ventanas o espacios exteriores."
  },
  {
    id: "cesta-ropa-plegable",
    categoria: "Organización",
    nombre: "Cesta plegable para ropa",
    precio: 35900,
    descripcion: "Cesta plegable de tela reforzada para ropa sucia o almacenamiento, se dobla completamente plana cuando no está en uso."
  },
  {
    id: "difusor-aromas",
    categoria: "Decoración",
    nombre: "Difusor de aromas con luz LED",
    precio: 64900,
    descripcion: "Difusor ultrasónico de aromas con luz LED de colores, ideal para crear un ambiente relajante en cualquier habitación de la casa."
  },
  {
    id: "set-utensilios-silicona",
    categoria: "Cocina",
    nombre: "Set de utensilios de cocina en silicona x8",
    precio: 57900,
    descripcion: "Set de 8 utensilios de cocina en silicona resistente al calor, incluye espátulas, cuchara y batidor. No rayan sartenes antiadherentes."
  }
];

// Se exponen como variables globales para que index.html, catalogo.html y producto.html las lean directamente.
window.CATEGORIAS = CATEGORIAS;
window.PRODUCTOS = PRODUCTOS;
