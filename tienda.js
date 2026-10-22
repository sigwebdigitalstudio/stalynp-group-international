// CONFIGURATION & CONSTANTS
// ==========================================================================
const WHATSAPP_NUMBER = "519999999999";

// PRODUCT DATABASE (30 MINIMUM PRODUCTS)

const PRODUCTS = [
    {
        id: "MAT-001",
        nombre: "Cemento INKA ",
        categoria: "ESTRUCTURA",
        precio: 32.9,
        unidad: "Bolsa 42.5kg",
        imagen:
            "https://www.cementosinka.com.pe/wp-content/uploads/2023/09/bolsa_nosotros.png",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-002",
        nombre: 'Fierro Corrugado 1/2"',
        categoria: "ESTRUCTURA",
        precio: 48.5,
        unidad: "Varilla 9m",
        imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvw5PzjHRmTgz8vHGZpfrN0h88DIF_YV-YosW9oxZ-g&s=10",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-003",
        nombre: 'Fierro Corrugado 3/8"',
        categoria: "ESTRUCTURA",
        precio: 28.0,
        unidad: "Varilla 9m",
        imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXydqQ_NJLpCbIhVE4eWGJJwx1ofrB3dZembC-2wE9eBwSbHoZ02PFFcN&s=10",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-004",
        nombre: 'Fierro Corrugado 5/8"',
        categoria: "ESTRUCTURA",
        precio: 76.2,
        unidad: "Varilla 9m",
        imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvw5PzjHRmTgz8vHGZpfrN0h88DIF_YV-YosW9oxZ-g&s=10",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-005",
        nombre: "Alambre Recocido #16",
        categoria: "ESTRUCTURA",
        precio: 7.5,
        unidad: "Kg",
        imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtjct7f_ObyiACOoGI7SL6r-Qk-bRopbWxEsOfd82WPHhUbg7-PeUDzg&s=10",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-006",
        nombre: "Malla Electrosoldada 4.5mm",
        categoria: "ESTRUCTURA",
        precio: 185.0,
        unidad: "Panel 2x3m",
        imagen:
            "https://dojiw2m9tvv09.cloudfront.net/43701/product/malla1278.jpg",
        disponibilidad: "BAJO PEDIDO",
    },
    {
        id: "MAT-007",
        nombre: "Ladrillo King Kong 18 Huecos",
        categoria: "ALBAÑILERÍA",
        precio: 1.4,
        unidad: "Unidad",
        imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5g5w5BPvF_SA8yBjw1-ME-m_zKi_oJLyT-dEmPxmTc82ckgyeLsBAZl6&s=10",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-008",
        nombre: "Ladrillo Pandereta",
        categoria: "ALBAÑILERÍA",
        precio: 1.1,
        unidad: "Unidad",
        imagen:
            "https://promart.vteximg.com.br/arquivos/ids/9721029-1000-1000/17707.jpg?v=638996053753570000",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-009",
        nombre: "Bloque de Concreto 15x20x40",
        categoria: "ALBAÑILERÍA",
        precio: 3.8,
        unidad: "Unidad",
        imagen:
            "https://cademac.com.co/wp-content/uploads/2025/10/BLOQUE-ESTRUCTUTAL-15X20X40.jpg",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-010",
        nombre: "Arena Gruesa Seleccionada",
        categoria: "AGREGADOS",
        precio: 65.0,
        unidad: "m³",
        imagen:
            "https://insumosfirstpro.com/wp-content/uploads/2024/03/arenagruesa6702.png",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-011",
        nombre: "Arena Fina para Tarrajeo",
        categoria: "AGREGADOS",
        precio: 75.0,
        unidad: "m³",
        imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6gTcpGBugbD_DMYnSY03btbJs3eJfkzg5kyGQW9ogSdgSE0BUJsqjyWk&s=10",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-012",
        nombre: 'Piedra Chancada 1/2"',
        categoria: "AGREGADOS",
        precio: 80.0,
        unidad: "m³",
        imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXHoNVXaDsf2GtwKxbJH5vxR64ofd8YiASvjkd1fFGw&s=10",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-013",
        nombre: "Hormigón de Relleno",
        categoria: "AGREGADOS",
        precio: 55.0,
        unidad: "m³",
        imagen:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-014",
        nombre: 'Tubo PVC SAP 4" para Desagüe',
        categoria: "SANITARIOS",
        precio: 42.0,
        unidad: "Tubo 3m",
        imagen:
            "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-015",
        nombre: 'Codo PVC 4" x 90°',
        categoria: "SANITARIOS",
        precio: 6.5,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-016",
        nombre: "Pegamento PVC Transparente",
        categoria: "SANITARIOS",
        precio: 18.5,
        unidad: "Lata 1/4 galón",
        imagen:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-017",
        nombre: "Cable Eléctrico THW #12 AWG",
        categoria: "ELECTRICIDAD",
        precio: 210.0,
        unidad: "Rollo 100m",
        imagen:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-018",
        nombre: "Tomacorriente Doble con Tierra",
        categoria: "ELECTRICIDAD",
        precio: 14.9,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-019",
        nombre: "Interruptor Conmutable Simple",
        categoria: "ELECTRICIDAD",
        precio: 12.5,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-020",
        nombre: "Taladro Percutor 650W",
        categoria: "HERRAMIENTAS",
        precio: 249.0,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-021",
        nombre: 'Amoladora Angular 4.5" 850W',
        categoria: "HERRAMIENTAS",
        precio: 199.0,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-022",
        nombre: "Martillo de Peña 16oz",
        categoria: "HERRAMIENTAS",
        precio: 28.5,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-023",
        nombre: 'Nivel de Aluminio 24"',
        categoria: "HERRAMIENTAS",
        precio: 45.0,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-024",
        nombre: "Palana Cuchara con Mango",
        categoria: "HERRAMIENTAS",
        precio: 42.0,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-025",
        nombre: "Pintura Látex Blanco Supremo",
        categoria: "ACABADOS",
        precio: 125.0,
        unidad: "Balde 5 Gal",
        imagen:
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-026",
        nombre: "Sellador para Muros Base Agua",
        categoria: "ACABADOS",
        precio: 68.0,
        unidad: "Balde 5 Gal",
        imagen:
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-027",
        nombre: "Cerámico Cemento Gris 60x60",
        categoria: "ACABADOS",
        precio: 42.9,
        unidad: "m²",
        imagen:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "BAJO PEDIDO",
    },
    {
        id: "MAT-028",
        nombre: "Pegamento Blanco Flexible Ceramic",
        categoria: "ACABADOS",
        precio: 34.5,
        unidad: "Bolsa 25kg",
        imagen:
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-029",
        nombre: "Casco de Seguridad Dielectrico",
        categoria: "SEGURIDAD",
        precio: 25.0,
        unidad: "Unidad",
        imagen:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
    {
        id: "MAT-030",
        nombre: "Guantes de Cuero Badana Operario",
        categoria: "SEGURIDAD",
        precio: 12.0,
        unidad: "Par",
        imagen:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
        disponibilidad: "EN STOCK",
    },
];

// ==========================================================================
// APP STATE
// ==========================================================================
let cart = JSON.parse(localStorage.getItem("STALYNP_CART")) || [];
let activeCategory = "TODOS";
let searchQuery = "";
let maxPrice = 500;
let availabilityFilter = "TODOS";
let sortOrder = "RECOMENDADOS";

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================
const productsGrid = document.getElementById("products-grid");
const noResults = document.getElementById("no-results");
const heroSearchInput = document.getElementById("hero-search-input");
const heroSearchBtn = document.getElementById("hero-search-btn");
const priceFilter = document.getElementById("price-filter");
const priceVal = document.getElementById("price-val");
const stockFilter = document.getElementById("stock-filter");
const sortFilter = document.getElementById("sort-filter");
const resetFiltersBtn = document.getElementById("reset-filters");
const categoriesGrid = document.getElementById("categories-grid");

// Drawer Elements
const cartDrawer = document.getElementById("cart-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const openCartBtn = document.getElementById("open-cart-btn");
const closeDrawerBtn = document.getElementById("close-drawer-btn");
const cartItemsContainer = document.getElementById(
    "cart-items-container",
);
const cartBadge = document.getElementById("cart-badge");
const cartTotalCount = document.getElementById("cart-total-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartTotal = document.getElementById("cart-total");

// Actions
const btnWhatsapp = document.getElementById("btn-whatsapp");
const btnPdf = document.getElementById("btn-pdf");
const btnClear = document.getElementById("btn-clear");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toast-msg");

// Print Elements
const printTableBody = document.getElementById("print-table-body");
const printTotalVal = document.getElementById("print-total-val");
const printDate = document.getElementById("print-date");

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
    // Search
    heroSearchBtn.addEventListener("click", () => {
        searchQuery = heroSearchInput.value.trim().toLowerCase();
        renderProducts();
    });

    heroSearchInput.addEventListener("keyup", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderProducts();
    });

    // Categories
    categoriesGrid.addEventListener("click", (e) => {
        const btn = e.target.closest(".cat-card");
        if (!btn) return;

        document
            .querySelectorAll(".cat-card")
            .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.cat;
        renderProducts();
    });

    // Price Filter
    priceFilter.addEventListener("input", (e) => {
        maxPrice = parseFloat(e.target.value);
        priceVal.textContent = `S/ ${maxPrice}`;
        renderProducts();
    });

    // Stock Filter
    stockFilter.addEventListener("change", (e) => {
        availabilityFilter = e.target.value;
        renderProducts();
    });

    // Sort Filter
    sortFilter.addEventListener("change", (e) => {
        sortOrder = e.target.value;
        renderProducts();
    });

    // Reset Filters
    resetFiltersBtn.addEventListener("click", () => {
        searchQuery = "";
        activeCategory = "TODOS";
        maxPrice = 500;
        availabilityFilter = "TODOS";
        sortOrder = "RECOMENDADOS";

        heroSearchInput.value = "";
        priceFilter.value = 500;
        priceVal.textContent = "S/ 500";
        stockFilter.value = "TODOS";
        sortFilter.value = "RECOMENDADOS";

        document
            .querySelectorAll(".cat-card")
            .forEach((b) => b.classList.remove("active"));
        document
            .querySelector('.cat-card[data-cat="TODOS"]')
            .classList.add("active");

        renderProducts();
    });

    // Drawer Controls
    openCartBtn.addEventListener("click", openDrawer);
    closeDrawerBtn.addEventListener("click", closeDrawer);
    drawerOverlay.addEventListener("click", closeDrawer);

    // Cart Actions
    btnClear.addEventListener("click", clearCart);
    btnWhatsapp.addEventListener("click", sendWhatsApp);
    btnPdf.addEventListener("click", generatePDF);
}

// ==========================================================================
// FILTER & RENDER PRODUCTS
// ==========================================================================
function renderProducts() {
    let filtered = PRODUCTS.filter((p) => {
        // Search Query
        const matchesSearch =
            p.nombre.toLowerCase().includes(searchQuery) ||
            p.categoria.toLowerCase().includes(searchQuery);
        // Category
        const matchesCat =
            activeCategory === "TODOS" || p.categoria === activeCategory;
        // Price
        const matchesPrice = p.precio <= maxPrice;
        // Stock
        const matchesStock =
            availabilityFilter === "TODOS" ||
            p.disponibilidad === availabilityFilter;

        return matchesSearch && matchesCat && matchesPrice && matchesStock;
    });

    // Sorting
    if (sortOrder === "PRECIO_MENOR") {
        filtered.sort((a, b) => a.precio - b.precio);
    } else if (sortOrder === "PRECIO_MAYOR") {
        filtered.sort((a, b) => b.precio - a.precio);
    } else if (sortOrder === "NOMBRE_AZ") {
        filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    // DOM Injection
    productsGrid.innerHTML = "";

    if (filtered.length === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
        filtered.forEach((product) => {
            const isStock = product.disponibilidad === "EN STOCK";
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${product.imagen}" alt="${product.nombre}" onerror="this.src='https://via.placeholder.com/300x200/1A1C1E/C29A51?text=STALYNP'">
                    <span class="stock-badge ${isStock ? "stock" : "pedido"}">${product.disponibilidad}</span>
                </div>
                <div class="product-info">
                    <span class="product-category">${product.categoria}</span>
                    <h3 class="product-title">${product.nombre}</h3>
                    <div class="product-price-row">
                        <span class="product-price">S/ ${product.precio.toFixed(2)}</span>
                        <span class="product-unit">x ${product.unidad}</span>
                    </div>
                    <button class="add-btn" onclick="addToCart('${product.id}')">+ AGREGAR A LA LISTA</button>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }
}

// ==========================================================================
// CART / LIST LOGIC & LOCALSTORAGE
// ==========================================================================
function addToCart(id) {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;

    const existingIndex = cart.findIndex((item) => item.id === id);
    if (existingIndex > -1) {
        cart[existingIndex].cantidad += 1;
    } else {
        cart.push({ ...product, cantidad: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`Agregado: ${product.nombre}`);
}

function updateQuantity(id, delta) {
    const index = cart.findIndex((item) => item.id === id);
    if (index > -1) {
        cart[index].cantidad += delta;
        if (cart[index].cantidad <= 0) {
            cart.splice(index, 1);
        }
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    saveCart();
    updateCartUI();
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    updateCartUI();
    showToast("Lista vaciada correctamente");
}

function saveCart() {
    localStorage.setItem("STALYNP_CART", JSON.stringify(cart));
}

function updateCartUI() {
    // Calculate Totals
    const totalItemsCount = cart.reduce(
        (acc, item) => acc + item.cantidad,
        0,
    );
    const totalAmount = cart.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0,
    );

    // Update Badges & Labels
    cartBadge.textContent = totalItemsCount;
    cartTotalCount.textContent = totalItemsCount;
    cartSubtotal.textContent = `S/ ${totalAmount.toFixed(2)}`;
    cartTotal.textContent = `S/ ${totalAmount.toFixed(2)}`;

    // Render Drawer Items
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; color: #777; margin-top: 40px;">
                <p style="font-size: 2rem;">🛒</p>
                <p style="font-size: 0.85rem; margin-top: 10px;">Tu lista de materiales está vacía.</p>
            </div>
        `;
        return;
    }

    cart.forEach((item) => {
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        itemEl.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-img" onerror="this.src='https://via.placeholder.com/60x60/1A1C1E/C29A51?text=MAT'">
            <div class="cart-item-details">
                <span class="cart-item-title">${item.nombre}</span>
                <span class="cart-item-price">S/ ${(item.precio * item.cantidad).toFixed(2)} (${item.unidad})</span>
                <div class="cart-item-actions">
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                        <span class="qty-val">${item.cantidad}</span>
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                    <button class="delete-item-btn" onclick="removeFromCart('${item.id}')">Eliminar</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
}

// ==========================================================================
// DRAWER TOGGLE
// ==========================================================================
function openDrawer() {
    cartDrawer.classList.add("active");
    drawerOverlay.classList.add("active");
}

function closeDrawer() {
    cartDrawer.classList.remove("active");
    drawerOverlay.classList.remove("active");
}

// ==========================================================================
// WHATSAPP INTEGRATION
// ==========================================================================
function sendWhatsApp() {
    if (cart.length === 0) {
        showToast("Agrega productos antes de enviar");
        return;
    }

    let msg = `Hola STALYNP Grupo Internacional.\n\n`;
    msg += `Deseo solicitar cotización de los siguientes materiales:\n\n`;

    let total = 0;
    cart.forEach((item) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        msg += `• ${item.nombre} — ${item.cantidad} ${item.unidad}\n`;
    });

    msg += `\nTotal estimado:\nS/ ${total.toFixed(2)}\n\n`;
    msg += `Quedo atento a su cotización.`;

    const encodedMsg = encodeURIComponent(msg);
    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`,
        "_blank",
    );
}

// ==========================================================================
// PRINT / PDF GENERATION
// ==========================================================================
function generatePDF() {
    if (cart.length === 0) {
        showToast("La lista está vacía");
        return;
    }

    // Set Date
    const today = new Date();
    printDate.textContent = `Fecha: ${today.toLocaleDateString()}`;

    // Fill Table
    printTableBody.innerHTML = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        grandTotal += subtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${item.nombre}</strong></td>
            <td>${item.unidad}</td>
            <td>${item.cantidad}</td>
            <td>S/ ${item.precio.toFixed(2)}</td>
            <td>S/ ${subtotal.toFixed(2)}</td>
        `;
        printTableBody.appendChild(row);
    });

    printTotalVal.textContent = `S/ ${grandTotal.toFixed(2)}`;

    // Trigger Print Window
    window.print();
}

// TOAST NOTIFICATIONS========================================
function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}
