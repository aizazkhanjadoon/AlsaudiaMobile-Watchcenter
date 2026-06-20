const grid = document.querySelector("#productGrid");
const shopGroups = document.querySelector("#shopGroups");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const filterButtons = [...document.querySelectorAll(".filter")];
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const drawer = document.querySelector("#drawer");
const backdrop = document.querySelector("#backdrop");
const mesh = document.querySelector("#mesh");
let activeFilter = "all";
let cart = {};

function cardTemplate(product) {
  return `
    <article class="card" data-id="${product.id}" style="--image-position: ${product.position || 'center'}">
      <div class="visual"><img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async"></div>
      <div class="card-body">
        <div class="category">${product.tag}</div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="buy-row">
          <button class="add" type="button" data-add="${product.id}" aria-label="Add ${product.name} to selection">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
    </article>`;
}

function matchingProducts(source) {
  const term = (searchInput?.value || "").trim().toLowerCase();
  return source.filter(product => {
    const filterMatch = activeFilter === "all" || product.category.toLowerCase() === activeFilter;
    const searchMatch = [product.name, product.category, product.tag, product.description].join(" ").toLowerCase().includes(term);
    return filterMatch && searchMatch;
  });
}

function renderHome() {
  if (!grid || shopGroups) return;
  const featured = products.filter(product => product.featured).slice(0, 6);
  const visible = matchingProducts(featured);
  grid.innerHTML = visible.map(cardTemplate).join("");
  emptyState?.classList.toggle("show", visible.length === 0);
  attachCardTilt();
}

function renderShop() {
  if (!shopGroups) return;
  const visible = matchingProducts(products);
  const categories = ["Mobiles", "Watches", "Accessories"];
  shopGroups.innerHTML = categories.map(category => {
    const items = visible.filter(product => product.category === category);
    if (!items.length) return "";
    return `
      <section class="category-band" aria-labelledby="${category.toLowerCase()}Title">
        <div class="category-title">
          <h2 id="${category.toLowerCase()}Title">${category}</h2>
          <span>${items.length} products</span>
        </div>
        <div class="grid">${items.map(cardTemplate).join("")}</div>
      </section>`;
  }).join("");
  emptyState?.classList.toggle("show", visible.length === 0);
  attachCardTilt();
}

function attachCardTilt() {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - .5) * -8;
      card.style.setProperty("--tiltX", `${x}deg`);
      card.style.setProperty("--tiltY", `${y}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tiltX", "0deg");
      card.style.setProperty("--tiltY", "0deg");
    });
  });
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  openDrawer();
}

function updateQuantity(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function renderCart() {
  const entries = Object.entries(cart);
  const count = entries.reduce((sum, [, qty]) => sum + qty, 0);
  if (cartCount) cartCount.textContent = count;
  if (!cartItems) return;
  cartItems.innerHTML = entries.length ? entries.map(([id, qty]) => {
    const product = products.find(item => item.id === id);
    return `
      <div class="cart-item">
        <div class="mini" style="background-image:url('${product.image}')" aria-hidden="true"></div>
        <div><strong>${product.name}</strong><span>${product.category}</span></div>
        <div class="qty" aria-label="Quantity for ${product.name}">
          <button type="button" data-qty="${id}" data-delta="-1" aria-label="Decrease quantity">-</button>
          <span>${qty}</span>
          <button type="button" data-qty="${id}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
      </div>`;
  }).join("") : '<p style="color: var(--muted); line-height: 1.7; margin: 0;">Your selection is ready for mobiles, watches, and accessories.</p>';
}

function openDrawer() {
  drawer?.classList.add("open");
  backdrop?.classList.add("open");
  drawer?.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  drawer?.classList.remove("open");
  backdrop?.classList.remove("open");
  drawer?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    renderHome();
    renderShop();
  });
});
searchInput?.addEventListener("input", () => { renderHome(); renderShop(); });
document.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const qty = event.target.closest("[data-qty]");
  if (add) addToCart(add.dataset.add);
  if (qty) updateQuantity(qty.dataset.qty, Number(qty.dataset.delta));
});
document.querySelector("#cartOpen")?.addEventListener("click", openDrawer);
document.querySelector("#heroCart")?.addEventListener("click", openDrawer);
document.querySelector("#cartClose")?.addEventListener("click", closeDrawer);
document.querySelector("#clearCart")?.addEventListener("click", () => { cart = {}; renderCart(); });
backdrop?.addEventListener("click", closeDrawer);
document.addEventListener("keydown", event => { if (event.key === "Escape") closeDrawer(); });
document.addEventListener("pointermove", event => {
  if (!mesh) return;
  const x = (event.clientX / window.innerWidth - .5) * 10;
  const y = (event.clientY / window.innerHeight - .5) * -10;
  mesh.style.setProperty("--meshX", `${x}deg`);
  mesh.style.setProperty("--meshY", `${y}deg`);
});

renderHome();
renderShop();
renderCart();
