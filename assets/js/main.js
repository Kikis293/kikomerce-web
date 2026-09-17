// ============ Kikomerce — lógica compartida de todas las páginas ============

document.addEventListener('DOMContentLoaded', function () {

  // ---- Menú "Productos" (submenu) ----
  (function () {
    const item = document.getElementById('productosItem');
    if (!item) return;
    const toggle = item.querySelector('.nav-toggle');

    toggle.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!item.contains(e.target)) {
        item.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        item.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  })();

  // ---- Menú móvil ----
  (function () {
    const nav = document.getElementById('mainNav');
    const openBtn = document.getElementById('openMobileNav');
    const closeBtn = document.getElementById('closeMobileNav');
    if (!nav || !openBtn || !closeBtn) return;

    openBtn.addEventListener('click', () => nav.classList.add('mobile-open'));
    closeBtn.addEventListener('click', () => nav.classList.remove('mobile-open'));
  })();

  // ---- Burbuja de redes sociales ----
  (function () {
    const bubble = document.getElementById('socialBubble');
    const toggle = document.getElementById('bubbleToggle');
    if (!bubble || !toggle) return;

    toggle.addEventListener('click', () => bubble.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!bubble.contains(e.target)) bubble.classList.remove('open');
    });
  })();

  // ---- Carrusel de portada (solo existe en index.html) ----
  (function () {
    const carousel = document.getElementById('heroCarousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.hero-slide');
    const dotsWrap = document.getElementById('heroDots');
    let current = 0;
    let timer;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Ir a la diapositiva ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('.hero-dot');

    function goTo(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      resetTimer();
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 6000);
    }

    document.getElementById('heroPrev').addEventListener('click', () => goTo(current - 1));
    document.getElementById('heroNext').addEventListener('click', () => goTo(current + 1));
    resetTimer();
  })();

  // ---- Render de productos destacados en el home ----
  const featuredGrid = document.getElementById('featuredProductGrid');
  if (featuredGrid && window.PRODUCTOS) {
    featuredGrid.innerHTML = window.PRODUCTOS.slice(0, 6).map(kikomerceProductCardHTML).join('');
  }

  // ---- Render del catálogo completo ----
  const catalogGrid = document.getElementById('catalogGrid');
  if (catalogGrid && window.PRODUCTOS) {
    renderCatalog(window.PRODUCTOS);

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.categoria;
        const filtered = cat === 'todos'
          ? window.PRODUCTOS
          : window.PRODUCTOS.filter((p) => p.categoria === cat);
        renderCatalog(filtered);
      });
    });
  }

  function renderCatalog(lista) {
    if (!lista.length) {
      catalogGrid.innerHTML = '<div class="catalog-empty">No hay productos en esta categoría todavía.</div>';
      return;
    }
    catalogGrid.innerHTML = lista.map(kikomerceProductCardHTML).join('');
  }

  // ---- Render de la ficha de producto individual ----
  const detailWrap = document.getElementById('productDetail');
  if (detailWrap && window.PRODUCTOS) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const producto = window.PRODUCTOS.find((p) => p.id === id);

    if (!producto) {
      detailWrap.innerHTML = '<div class="product-not-found"><h2>Producto no encontrado</h2><p>Es posible que el link esté incompleto o el producto ya no exista.</p><a class="btn-outline" href="/catalogo.html">Ver catálogo completo</a></div>';
    } else {
      const cat = window.CATEGORIAS[producto.categoria] || {};
      document.title = producto.nombre + ' — Kikomerce';
      const breadcrumbName = document.getElementById('breadcrumbProducto');
      if (breadcrumbName) breadcrumbName.textContent = producto.nombre;

      detailWrap.innerHTML = `
        <div class="product-detail-thumb" style="background: ${cat.gradiente || '#21504A'};">
          ${cat.icono || ''}
        </div>
        <div class="product-detail-info">
          <div class="product-cat">${producto.categoria}</div>
          <h1>${producto.nombre}</h1>
          <div class="product-detail-price">${formatCOP(producto.precio)}</div>
          <p class="product-detail-desc">${producto.descripcion}</p>
          <a class="whatsapp-buy" href="https://wa.me/573212795272?text=${encodeURIComponent('Hola, quiero comprar: ' + producto.nombre)}" target="_blank" rel="noopener">
            ${WHATSAPP_ICON}
            Comprar por WhatsApp
          </a>
        </div>
      `;
    }
  }
});

// ============ Helpers compartidos ============

const WHATSAPP_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z"/></svg>';

function formatCOP(valor) {
  return '$' + valor.toLocaleString('es-CO');
}

function kikomerceProductCardHTML(p) {
  const cat = (window.CATEGORIAS && window.CATEGORIAS[p.categoria]) || {};
  const mensaje = encodeURIComponent('Hola, quiero comprar: ' + p.nombre);
  return `
    <div class="product-card">
      <a class="product-thumb-link" href="/producto.html?id=${encodeURIComponent(p.id)}">
        <div class="product-thumb" style="background: ${cat.gradiente || '#21504A'};">
          ${cat.icono || ''}
        </div>
      </a>
      <div class="product-info">
        <div class="product-cat">${p.categoria}</div>
        <div class="product-name"><a href="/producto.html?id=${encodeURIComponent(p.id)}">${p.nombre}</a></div>
        <div class="product-price">${formatCOP(p.precio)}</div>
        <a class="whatsapp-buy" href="https://wa.me/573212795272?text=${mensaje}" target="_blank" rel="noopener">
          ${WHATSAPP_ICON}
          Comprar por WhatsApp
        </a>
      </div>
    </div>
  `;
}
