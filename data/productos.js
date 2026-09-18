// ============================================================
// KIKOMERCE — CATALOGO DE PRODUCTOS
// ============================================================
// Para agregar un producto nuevo, copia un bloque del arreglo PRODUCTOS y cambia sus datos.
// El campo "id" debe ser único y sin espacios (se usa en la URL: /producto.html?id=...).
// El campo "categoria" debe coincidir exactamente con una de las claves de CATEGORIAS más abajo.

// ------------------------------------------------------------
// CATEGORÍAS
// ------------------------------------------------------------

const CATEGORIAS = {

  "Hogar": {
    gradiente: "linear-gradient(135deg, #E8DED2 0%, #C8B5A6 100%)",
    icono: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
        <path d="M4 10.5h16"/>
        <path d="M5.5 10.5V20h13v-9.5"/>
        <path d="M3 10.5 12 4l9 6.5"/>
        <path d="M9 20v-5h6v5"/>
      </svg>
    `
  },

  "Belleza": {
    gradiente: "linear-gradient(135deg, #F3D8D8 0%, #D9A9A9 100%)",
    icono: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
        <path d="M9 3h6"/>
        <path d="M10 3v5l-4.5 8.2A2.5 2.5 0 0 0 7.7 20h8.6a2.5 2.5 0 0 0 2.2-3.8L14 8V3"/>
        <path d="M8 14h8"/>
      </svg>
    `
  },

  "Herramientas": {
    gradiente: "linear-gradient(135deg, #D9DFE2 0%, #9DAAB0 100%)",
    icono: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
        <path d="m14.5 5.5 4 4"/>
        <path d="m13 7 4 4"/>
        <path d="m4 20 7.5-7.5"/>
        <path d="m3 17 4 4"/>
        <path d="m16 3 5 5-2.5 2.5-5-5L16 3Z"/>
      </svg>
    `
  },

  "Moda": {
    gradiente: "linear-gradient(135deg, #252525 0%, #595959 100%)",
    icono: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
        <path d="M8 7a4 4 0 0 1 8 0"/>
        <path d="M6 8.5 3.5 11v8.5h17V11L18 8.5"/>
        <path d="M8 8.5h8"/>
        <path d="M8 12v7"/>
        <path d="M16 12v7"/>
      </svg>
    `
  }

};


// ------------------------------------------------------------
// PRODUCTOS
// ------------------------------------------------------------

const PRODUCTOS = [

  // ==========================================================
  // 1. RODILLO QUITA PELUSA
  // ==========================================================

  {
    id: "rodillo-quita-pelusa",
    categoria: "Hogar",
    nombre: "Rodillo Quita Pelusa",
    precio: 54000,
    descripcion: `✨🧹 ¡ADIÓS A LAS PELUSAS Y PELOS DE MASCOTAS! 🐶🐱
🧼 Rodillo Quita Pelusas Premium, Portátil y Reutilizable
💎 Fabricado con ABS + TPE de alta calidad, resistente y duradero.
💪 Su fuerte adherencia elimina pelusas, polvo y pelos fácilmente.
♻️ Lavable y reutilizable, ¡úsalo una y otra vez!
👜 Compacto y portátil, llévalo a donde quieras.
👕 Ideal para ropa, sofás, muebles, alfombras y automóvil.
🔥 ¡Mantén todo impecable en segundos!
🛒 ¡Pide el tuyo ahora! ✨`,
    imagen: null,
    imagenes: [],
    carpetaDrive: "https://drive.google.com/drive/folders/1Sh0LMv0GAF5g47U5ATL_12eBELEFhA8_"
  },

  // ==========================================================
  // 2. PEINE ALISADOR RECARGABLE
  // ==========================================================
  {
    id: "peine-alisador-recargable",
    categoria: "Belleza",
    nombre: "Peine Alisador Recargable",
    precio: 72000,
    descripcion: `🔥 ¡CABELLO PERFECTO EN CUALQUIER MOMENTO!
💖 ¿Cabello rebelde, con frizz o sin forma? Pasa el ZFS-808 y dale un acabado suave y estilizado en minutos.
✨ Cerámica premium + iones negativos para ayudar a reducir el frizz y dejar una apariencia más brillante.
⚡ Inalámbrico, compacto y recargable USB-C: úsalo en casa, la oficina, el carro o durante tus viajes.
🌡️ 3 temperaturas + pantalla LCD para adaptar el calor a tu tipo de cabello.
🚀 ¡Llévalo contigo y transforma tu look estés donde estés!`,
    imagen: null,
    imagenes: [],
    carpetaDrive: "https://drive.google.com/drive/folders/12vjK8C_xoDMn4CMhsjxGUfqvuftnvgC4"
  },

  // ==========================================================
  // 3. NIVEL LÁSER MULTIUSO
  // ==========================================================
  {
    id: "nivel-laser-multiuso",
    categoria: "Herramientas",
    nombre: "Nivel Láser Multiuso con Cinta Métrica",
    precio: 79000,
    descripcion: `¡Convierte cualquier pared en un proyecto perfecto! 🔥
¿Cuadros torcidos, estantes desnivelados o medidas imprecisas? ¡Se acabó!
🎯 Activa su láser horizontal, vertical o cruzado y sigue la guía en segundos.
📏 Mide hasta 8 pies, nivela y alinea sin adivinar ni repetir el trabajo.
✨ Diseño compacto, resistente y de gran calidad para renovar tu hogar con facilidad.
🚀 Hazlo tú mismo como un experto: ¡agrégalo al carrito antes de que se agote!`,
    imagen: null,
    imagenes: [],
    carpetaDrive: "https://drive.google.com/drive/folders/1g5MioE-Rd8X4NOmgE_Uyw-UBvwdyb0yS"
  },

  // ==========================================================
  // 4. SECADOR DE ROPA PORTÁTIL
  // ==========================================================
  {
    id: "secador-ropa-portatil",
    categoria: "Hogar",
    nombre: "Secador de Ropa Portátil",
    precio: 94000,
    descripcion: `🔥 ¡DI ADIÓS A LA ROPA HÚMEDA Y AL MAL OLOR PARA SIEMPRE! ⚡
💨 Disfruta una forma práctica y eficiente de secar tus prendas sin depender del clima.
🏠 Su diseño retráctil aprovecha cada centímetro y queda guardado cuando no lo necesitas.
💎 Estructura fabricada con materiales resistentes y componentes de alto valor para un uso práctico y duradero.
✨ Instálalo fácilmente con su sistema de gancho adhesivo en superficies firmes y limpias.
✈️ ¡Seca, guarda y disfruta de más espacio en casa, apartamentos, viajes y espacios pequeños! 🚀`,
    imagen: null,
    imagenes: [],
    carpetaDrive: "https://drive.google.com/drive/folders/1MewNMvxP6ZoyOXKMiLt_AtpYfBhJOhN0"
  },

  // ==========================================================
  // 5. BOLSO BAULITO RETRO NEGRO
  // ==========================================================
  {
    id: "bolso-baulito-retro-negro",
    categoria: "Moda",
    nombre: "Bolso Baulito Retro Negro",
    precio: 214000,
    descripcion: 
    `🔥 ¡CERO EXCUSAS PARA NO LUCIR INCREÍBLE! THE ULTIMATE MUST-HAVE 2026 👜✨
💣 ¡LATINOAMÉRICA YA LO TIENE EN TENDENCIA Y SE ESTÁ AGOTANDO EN SEGUNDOS!
Si querías un bolso que se sienta de LUJO, mantenga su forma intacta y combine con LITERALMENTE TODO tu armario... lo encontraste. 🚀
💎 ¿POR QUÉ TODAS ESTÁN ENLOQUECIENDO CON ÉL?
👑 CALIDAD QUALITY 1.1: Elaborado con telas sintéticas de alto valor y poliéster ultra resistente de alto gramaje para un acabado estructurado y firme.
📦 UNBOXING DE NIVEL VIP: Incluye caja de lujo + funda protectora de gama alta que lo protegen y hacen que abrirlo sea toda una experiencia.
📏 TAMAÑO TOP: 18 × 13 × 11 cm. Espacio optimizado para tus esenciales sin cargar peso de más.
🖤 NEGRO ABSOLUTO: El tono atemporal que se adapta desde un look casual de día hasta una noche inolvidable.`,
    imagen: null,
    imagenes: [],
    carpetaDrive: "https://drive.google.com/drive/folders/1NXJpmCLuNQTMAcons6K_VcB6x3ChrqpE"
  }
];

// ============================================================
// DISPONIBILIDAD GLOBAL
// ============================================================

window.CATEGORIAS = CATEGORIAS;
window.PRODUCTOS = PRODUCTOS;
