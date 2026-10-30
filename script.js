

"use strict";

// ========================================
// NEXUS GAMING STORE - CATÁLOGO DE PRODUCTOS
// ========================================

const products = [
  {
    id: 1,
    name: "Nexus Starter Gaming",
    category: "Desktops",
    price: 599.99,
    description: "Equipo gaming de entrada para esports y uso diario.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 2,
    name: "Nexus RTX Performance",
    category: "Desktops",
    price: 1099.99,
    description: "PC gaming de gama media para jugar y crear contenido.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 3,
    name: "Nexus Elite Gaming",
    category: "Desktops",
    price: 1899.99,
    description: "Configuración de alto rendimiento para juegos exigentes.",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 4,
    name: "Nexus Creator Workstation",
    category: "Workstations",
    price: 1299.99,
    description: "Para diseño, edición y múltiples aplicaciones profesionales.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 5,
    name: "Nexus Pro Studio",
    category: "Workstations",
    price: 2199.99,
    description: "Estación de trabajo para proyectos profesionales intensivos.",
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 6,
    name: "Nexus Mobile Workstation",
    category: "Workstations",
    price: 1599.99,
    description: "Portabilidad y potencia para trabajar desde cualquier lugar.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 7,
    name: "Nexus Laptop Essential",
    category: "Laptops",
    price: 349.99,
    description: "Laptop económica para estudios, navegación y oficina.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 8,
    name: "Nexus Gaming Laptop",
    category: "Laptops",
    price: 899.99,
    description: "Laptop gaming para jugar y realizar tareas creativas.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 9,
    name: "Nexus Laptop Ultra",
    category: "Laptops",
    price: 1399.99,
    description: "Portátil premium para productividad y multitarea.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 10,
    name: "Nexus Smartphone",
    category: "Móviles",
    price: 199.99,
    description: "Smartphone accesible para comunicación y entretenimiento.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 11,
    name: "Nexus Smartphone Pro",
    category: "Móviles",
    price: 599.99,
    description: "Teléfono premium para fotografía, juegos y productividad.",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 12,
    name: "Nexus Tablet",
    category: "Móviles",
    price: 279.99,
    description: "Tablet para leer, estudiar, dibujar y consumir contenido.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=85"
  }
];

// Estado de la tienda
let activeCategory = "Todos";
let searchTerm = "";
let sortMode = "featured";
const cart = new Map();

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const resultsCount = document.getElementById("results-count");

const cartPanel = document.getElementById("cart-panel");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

const money = amount =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);

// Escapa texto antes de insertarlo en HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// ========================================
// MOSTRAR Y FILTRAR PRODUCTOS
// ========================================

function getVisibleProducts() {
  let list = products.filter(product => {
    const matchesCategory =
      activeCategory === "Todos" ||
      product.category === activeCategory;

    const query = searchTerm.toLocaleLowerCase("es");

    const matchesSearch = [
      product.name,
      product.category,
      product.description
    ].some(value =>
      value.toLocaleLowerCase("es").includes(query)
    );

    return matchesCategory && matchesSearch;
  });

  if (sortMode === "low") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortMode === "high") {
    list.sort((a, b) => b.price - a.price);
  } else if (sortMode === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "es"));
  }

  return list;
}

function renderProducts() {
  const list = getVisibleProducts();

  resultsCount.textContent =
    `${list.length} ${list.length === 1 ? "producto" : "productos"}`;

  if (list.length === 0) {
    productGrid.innerHTML = `
      <p class="empty-results">
        No encontramos productos. Prueba otra búsqueda o categoría.
      </p>
    `;
    return;
  }

  productGrid.innerHTML = list.map(product => {
    const name = escapeHTML(product.name);
    const category = escapeHTML(product.category);
    const description = escapeHTML(product.description);
    const image = escapeHTML(product.image);

    return `
      <article class="product-card">
        <a
          class="product-image-link"
          href="${image}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir imagen de ${name} en otra pestaña"
        >
          <img
            class="product-image"
            src="${image}"
            alt="${name}"
            loading="lazy"
            width="800"
            height="600"
          >
        </a>

        <div class="product-info">
          <span class="product-category">${category}</span>
          <h3>${name}</h3>
          <p class="product-description">${description}</p>
          <p class="product-price">${money(product.price)}</p>

          <div class="product-actions">
            <button
              class="add-button"
              data-add="${product.id}"
              aria-label="Añadir ${name} al carrito"
            >
              Añadir al carrito +
            </button>

            <a
              class="details-link"
              href="${image}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver imagen ↗
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Los filtros actualizan la categoría seleccionada.
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll(".filter").forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    renderProducts();
  });
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim();
  renderProducts();
});

sortSelect.addEventListener("change", () => {
  sortMode = sortSelect.value;
  renderProducts();
});

// ========================================
// CARRITO DE COMPRAS
// ========================================

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const current = cart.get(id) || 0;
  cart.set(id, current + 1);

  renderCart();
  openCart();
}

function changeQuantity(id, delta) {
  const current = cart.get(id) || 0;
  const next = current + delta;

  if (next <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, next);
  }

  renderCart();
}

function removeFromCart(id) {
  cart.delete(id);
  renderCart();
}

function renderCart() {
  let count = 0;
  let total = 0;

  cart.forEach((quantity, id) => {
    const product = products.find(item => item.id === id);

    if (product) {
      count += quantity;
      total += product.price * quantity;
    }
  });

  cartCount.textContent = String(count);
  cartTotal.textContent = money(total);

  if (cart.size === 0) {
    cartItems.innerHTML = `
      <p class="muted">Tu carrito está vacío.</p>
      <p class="muted">Añade un producto para comenzar.</p>
    `;
    return;
  }

  cartItems.innerHTML = [...cart.entries()].map(([id, quantity]) => {
    const product = products.find(item => item.id === id);
    if (!product) return "";

    const name = escapeHTML(product.name);

    return `
      <article class="cart-item">
        <div>
          <strong>${name}</strong>
          <p class="cart-item-price">${money(product.price * quantity)}</p>

          <div class="quantity-controls">
            <button
              data-quantity="${id}"
              data-delta="-1"
              aria-label="Reducir cantidad de ${name}"
            >−</button>

            <span aria-label="Cantidad">${quantity}</span>

            <button
              data-quantity="${id}"
              data-delta="1"
              aria-label="Aumentar cantidad de ${name}"
            >+</button>
          </div>
        </div>

        <button
          class="remove-button"
          data-remove="${id}"
          aria-label="Eliminar ${name} del carrito"
        >
          Eliminar
        </button>
      </article>
    `;
  }).join("");
}

// Delegación de eventos para las tarjetas.
productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(Number(button.dataset.add));
});

// Delegación de eventos para el carrito.
cartItems.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    changeQuantity(
      Number(quantityButton.dataset.quantity),
      Number(quantityButton.dataset.delta)
    );
  }

  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
});

// ========================================
// ABRIR Y CERRAR CARRITO
// ========================================

function openCart() {
  cartPanel.hidden = false;
  cartBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("cart-close").focus();
}

function closeCart() {
  cartPanel.hidden = true;
  cartBackdrop.hidden = true;
  document.body.style.overflow = "";
  document.getElementById("cart-toggle").focus();
}

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !cartPanel.hidden) {
    closeCart();
  }
});

// ========================================
// FINALIZACIÓN DE COMPRA: DEMOSTRACIÓN
// ========================================

document.getElementById("checkout").addEventListener("click", () => {
  if (cart.size === 0) {
    alert("Tu carrito está vacío. Añade un producto primero.");
    return;
  }

  const lines = [...cart.entries()].map(([id, quantity]) => {
    const product = products.find(item => item.id === id);
    return `${product.name} x ${quantity}`;
  });

  const total = [...cart.entries()].reduce((sum, [id, quantity]) => {
    const product = products.find(item => item.id === id);
    return sum + product.price * quantity;
  }, 0);

  alert(
    "RESUMEN DE TU PEDIDO\n\n" +
    lines.join("\n") +
    "\n\nTotal de demostración: " + money(total) +
    "\n\nTodavía no se ha realizado ningún cobro. " +
    "Configura un proveedor de pagos para aceptar pedidos reales."
  );
});

// Año automático del pie de página.
document.getElementById("year").textContent =
  String(new Date().getFullYear());

// Iniciar la tienda.
renderProducts();
renderCart();

const newProducts = [
  // DESKTOPS
  {
    id: 101,
    name: "Gaming Desktop RTX 4060",
    category: "Desktops",
    price: 1099.99,
    image: "https://placehold.co/600x400/111522/22d3ee?text=Gaming+Desktop",
    description: "Intel Core i5, 16GB RAM, 1TB SSD, RTX 4060."
  },
  {
    id: 102,
    name: "Business Desktop Pro",
    category: "Desktops",
    price: 649.99,
    image: "https://placehold.co/600x400/111522/22d3ee?text=Business+Desktop",
    description: "Intel Core i5, 16GB RAM, 512GB SSD."
  },
  {
    id: 103,
    name: "Mini PC Performance",
    category: "Desktops",
    price: 449.99,
    image: "https://placehold.co/600x400/111522/22d3ee?text=Mini+PC",
    description: "AMD Ryzen 5, 16GB RAM, 512GB SSD."
  },

  // WORKSTATIONS
  {
    id: 104,
    name: "Workstation Creator",
    category: "Workstations",
    price: 1899.99,
    image: "https://placehold.co/600x400/111522/a855f7?text=Creator+Workstation",
    description: "Intel Core i7, 32GB RAM, 1TB SSD, RTX graphics."
  },
  {
    id: 105,
    name: "Professional Workstation",
    category: "Workstations",
    price: 2499.99,
    image: "https://placehold.co/600x400/111522/a855f7?text=Professional+PC",
    description: "Intel Xeon, 64GB RAM, 2TB SSD."
  },
  {
    id: 106,
    name: "Engineering Workstation",
    category: "Workstations",
    price: 3299.99,
    image: "https://placehold.co/600x400/111522/a855f7?text=Engineering+PC",
    description: "AMD Ryzen 9, 64GB RAM, 2TB SSD, RTX graphics."
  },

  // LAPTOPS
  {
    id: 107,
    name: "Business Laptop 15",
    category: "Laptops",
    price: 749.99,
    image: "https://placehold.co/600x400/111522/22d3ee?text=Business+Laptop",
    description: "Intel Core i5, 16GB RAM, 512GB SSD."
  },
  {
    id: 108,
    name: "Gaming Laptop RTX",
    category: "Laptops",
    price: 1399.99,
    image: "https://placehold.co/600x400/111522/22d3ee?text=Gaming+Laptop",
    description: "Intel Core i7, 16GB RAM, 1TB SSD, RTX graphics."
  },
  {
    id: 109,
    name: "Ultrabook Air",
    category: "Laptops",
    price: 999.99,
    image: "https://placehold.co/600x400/111522/22d3ee?text=Ultrabook",
    description: "AMD Ryzen 7, 16GB RAM, 1TB SSD."
  },

  // DISPOSITIVOS MOVILES
  {
    id: 110,
    name: "Smartphone Pro",
    category: "Dispositivos móviles",
    price: 899.99,
    image: "https://placehold.co/600x400/111522/a855f7?text=Smartphone",
    description: "256GB almacenamiento, pantalla AMOLED."
  },
  {
    id: 111,
    name: "Professional Tablet",
    category: "Dispositivos móviles",
    price: 549.99,
    image: "https://placehold.co/600x400/111522/a855f7?text=Tablet",
    description: "128GB almacenamiento, pantalla de alta resolución."
  },
  {
    id: 112,
    name: "Smartwatch Series",
    category: "Dispositivos móviles",
    price: 199.99,
    image: "https://placehold.co/600x400/111522/a855f7?text=Smartwatch",
    description: "Monitoreo de actividad y notificaciones inteligentes."
  }
];
products.push(...newProducts);
