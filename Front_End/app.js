const API_BASE =
  window.location.protocol === "file:"
    ? "http://localhost:3000/api"
    : `${window.location.origin}/api`;
const PAYMENT_FEE = 50;
const TRADER_PIN = "1234";
const ADMIN_PIN = "5678";

const FALLBACK_PRODUCTS = [
  {
    id: "chicken-plate",
    name: "Chicken Plate",
    localName: "Inkoko",
    category: "food",
    price: 3000,
    description: "Fast lunch favorite with rice and sauce.",
    unit: "Plate",
    featured: true,
    badge: "Popular",
    enabled: true,
    stock: 18,
  },
  {
    id: "rice-beans",
    name: "Rice and Beans",
    localName: "Umuceri n'Ibishyimbo",
    category: "food",
    price: 1500,
    description: "Affordable daily plate for the canteen rush hour.",
    unit: "Plate",
    featured: true,
    badge: "Budget",
    enabled: true,
    stock: 22,
  },
  {
    id: "chapati-beans",
    name: "Chapati and Beans",
    localName: "Chapati n'Ibishyimbo",
    category: "food",
    price: 1200,
    description: "Quick filling lunch for students between classes.",
    unit: "Plate",
    featured: false,
    badge: "Fast",
    enabled: true,
    stock: 16,
  },
  {
    id: "chips-omelette",
    name: "Chips Omelette",
    localName: "Ifiriti n'Amagi",
    category: "food",
    price: 2500,
    description: "Hot chips and eggs served fresh from the kitchen.",
    unit: "Plate",
    featured: true,
    badge: "Hot",
    enabled: true,
    stock: 10,
  },
  {
    id: "beef-brochette-meal",
    name: "Beef Brochette Meal",
    localName: "Brochette y'Inyama",
    category: "food",
    price: 2800,
    description: "Skewered beef with a side portion for lunch or supper.",
    unit: "Plate",
    featured: true,
    badge: "Chef Pick",
    enabled: true,
    stock: 8,
  },
  {
    id: "pilau-plate",
    name: "Pilau Plate",
    localName: "Pilau",
    category: "food",
    price: 2200,
    description: "Spiced rice plate prepared for midday service.",
    unit: "Plate",
    featured: false,
    badge: "Fresh",
    enabled: true,
    stock: 9,
  },
  {
    id: "vegetable-plate",
    name: "Vegetable Plate",
    localName: "Imboga",
    category: "food",
    price: 1300,
    description: "Simple vegetarian option with seasonal vegetables.",
    unit: "Plate",
    featured: false,
    badge: "Light",
    enabled: true,
    stock: 11,
  },
  {
    id: "juice-500",
    name: "Juice 500ml",
    localName: "Jus 500ml",
    category: "drink",
    price: 500,
    description: "Cold bottled juice for quick grab-and-go orders.",
    unit: "Bottle",
    featured: true,
    badge: "Cold",
    enabled: true,
    stock: 24,
  },
  {
    id: "water-1l",
    name: "Water 1L",
    localName: "Amazi 1L",
    category: "drink",
    price: 700,
    description: "Sealed drinking water for class or travel.",
    unit: "Bottle",
    featured: false,
    badge: "Daily",
    enabled: true,
    stock: 30,
  },
  {
    id: "coca-cola-300",
    name: "Coca-Cola",
    localName: "Coca-Cola",
    category: "drink",
    price: 500,
    description: "Classic cold soft drink kept ready in the fridge.",
    unit: "Bottle",
    featured: true,
    badge: "Popular",
    enabled: true,
    stock: 20,
  },
  {
    id: "milk-tea",
    name: "Milk Tea",
    localName: "Icyayi cy'Amata",
    category: "drink",
    price: 400,
    description: "Warm tea with milk for cool morning breaks.",
    unit: "Cup",
    featured: false,
    badge: "Warm",
    enabled: true,
    stock: 14,
  },
  {
    id: "coffee-cup",
    name: "Coffee Cup",
    localName: "Ikawa",
    category: "drink",
    price: 600,
    description: "Fresh coffee served in a takeaway cup.",
    unit: "Cup",
    featured: false,
    badge: "Morning",
    enabled: true,
    stock: 12,
  },
  {
    id: "yogurt-cup",
    name: "Yogurt Cup",
    localName: "Yawurute",
    category: "drink",
    price: 900,
    description: "Chilled yogurt snack for a lighter refreshment.",
    unit: "Cup",
    featured: true,
    badge: "Fresh",
    enabled: true,
    stock: 7,
  },
  {
    id: "biscuits-pack",
    name: "Biscuits Pack",
    localName: "Biscuits",
    category: "snack",
    price: 250,
    description: "Quick snack add-on for tea, coffee, or lunch.",
    unit: "Pack",
    featured: true,
    badge: "Budget",
    enabled: true,
    stock: 31,
  },
  {
    id: "mandazi-two",
    name: "Mandazi",
    localName: "Mandazi",
    category: "snack",
    price: 300,
    description: "Soft fried dough, perfect for tea break add-ons.",
    unit: "Pair",
    featured: false,
    badge: "Fresh",
    enabled: true,
    stock: 19,
  },
  {
    id: "meat-samosa",
    name: "Meat Samosa",
    localName: "Samusa y'Inyama",
    category: "snack",
    price: 400,
    description: "Crispy triangle pastry with seasoned meat filling.",
    unit: "Piece",
    featured: true,
    badge: "Hot",
    enabled: true,
    stock: 13,
  },
  {
    id: "groundnuts-pack",
    name: "Groundnuts Pack",
    localName: "Ubunyobwa",
    category: "snack",
    price: 350,
    description: "Roasted groundnuts packed for class or travel.",
    unit: "Pack",
    featured: false,
    badge: "Grab Go",
    enabled: true,
    stock: 17,
  },
  {
    id: "fruit-cup",
    name: "Fruit Cup",
    localName: "Imbuto",
    category: "snack",
    price: 800,
    description: "Fresh fruit mix prepared for a lighter snack.",
    unit: "Cup",
    featured: true,
    badge: "Healthy",
    enabled: true,
    stock: 6,
  },
  {
    id: "isabuni",
    name: "Isabuni",
    localName: "Hand Soap",
    category: "hygiene",
    price: 800,
    description: "Daily hygiene item available in the canteen store.",
    unit: "Bar",
    featured: false,
    badge: "Care",
    enabled: true,
    stock: 9,
  },
  {
    id: "toothpaste-mini",
    name: "Toothpaste Mini",
    localName: "Umuti w'Amenyo",
    category: "hygiene",
    price: 1200,
    description: "Small toothpaste tube for hostel and travel use.",
    unit: "Tube",
    featured: false,
    badge: "Daily",
    enabled: true,
    stock: 12,
  },
  {
    id: "toothbrush-soft",
    name: "Toothbrush Soft",
    localName: "Buroso y'Amenyo",
    category: "hygiene",
    price: 700,
    description: "Soft toothbrush stocked for student essentials.",
    unit: "Piece",
    featured: false,
    badge: "Care",
    enabled: true,
    stock: 15,
  },
  {
    id: "tissue-pack",
    name: "Tissue Pack",
    localName: "Tissue",
    category: "hygiene",
    price: 500,
    description: "Pocket tissue pack for personal daily use.",
    unit: "Pack",
    featured: false,
    badge: "Quick",
    enabled: true,
    stock: 21,
  },
  {
    id: "sanitary-pads",
    name: "Sanitary Pads",
    localName: "Serviettes",
    category: "hygiene",
    price: 1800,
    description: "Essential hygiene product available on campus.",
    unit: "Pack",
    featured: true,
    badge: "Essential",
    enabled: true,
    stock: 5,
  },
  {
    id: "blue-pen",
    name: "Blue Pen",
    localName: "Ikaramu y'Ubururu",
    category: "stationery",
    price: 300,
    description: "Affordable pen for lectures, tests, and office use.",
    unit: "Piece",
    featured: true,
    badge: "Campus",
    enabled: true,
    stock: 40,
  },
  {
    id: "exercise-book",
    name: "Exercise Book",
    localName: "Cahier",
    category: "stationery",
    price: 700,
    description: "Exercise notebook for notes and assignments.",
    unit: "Book",
    featured: true,
    badge: "Daily",
    enabled: true,
    stock: 28,
  },
  {
    id: "a4-paper-pack",
    name: "A4 Paper Pack",
    localName: "Impapuro A4",
    category: "stationery",
    price: 2500,
    description: "Handy paper pack for printing and project work.",
    unit: "Pack",
    featured: false,
    badge: "Office",
    enabled: true,
    stock: 9,
  },
  {
    id: "ruler-30cm",
    name: "Ruler 30cm",
    localName: "Ruler",
    category: "stationery",
    price: 400,
    description: "Clear ruler for technical drawing and class tasks.",
    unit: "Piece",
    featured: false,
    badge: "Useful",
    enabled: true,
    stock: 14,
  },
  {
    id: "usb-cable",
    name: "USB Charging Cable",
    localName: "Cable USB",
    category: "electronics",
    price: 3500,
    description: "Fast charging cable for Android phones and devices.",
    unit: "Piece",
    featured: true,
    badge: "New",
    enabled: true,
    stock: 8,
  },
  {
    id: "earphones-basic",
    name: "Basic Earphones",
    localName: "Earphones",
    category: "electronics",
    price: 5000,
    description: "Simple wired earphones for calls and revision audio.",
    unit: "Piece",
    featured: false,
    badge: "Popular",
    enabled: true,
    stock: 6,
  },
  {
    id: "power-bank-10000",
    name: "Power Bank 10000mAh",
    localName: "Power Bank",
    category: "electronics",
    price: 18000,
    description: "Portable backup power for busy days on campus.",
    unit: "Piece",
    featured: true,
    badge: "Premium",
    enabled: true,
    stock: 4,
  },
  {
    id: "calculator-mini",
    name: "Mini Calculator",
    localName: "Calculatrice",
    category: "electronics",
    price: 6500,
    description: "Small calculator for accounting and engineering work.",
    unit: "Piece",
    featured: false,
    badge: "Study",
    enabled: true,
    stock: 5,
  },
  {
    id: "capati-plate",
    name: "Capati Plate",
    localName: "Capati",
    category: "food",
    price: 1200,
    description: "Fresh roti bread served with beans for breakfast.",
    unit: "Plate",
    featured: true,
    badge: "New",
    enabled: true,
    stock: 14,
  },
  {
    id: "umureti-stew",
    name: "Umureti Stew",
    localName: "Umureti",
    category: "food",
    price: 2000,
    description: "Traditional bean stew with spices, hearty meal.",
    unit: "Plate",
    featured: true,
    badge: "Popular",
    enabled: true,
    stock: 16,
  },
  {
    id: "imineke-peppers",
    name: "Imineke (Hot Peppers)",
    localName: "Imineke",
    category: "food",
    price: 500,
    description: "Fresh hot peppers for side dishes and flavoring.",
    unit: "Bunch",
    featured: false,
    badge: "Fresh",
    enabled: true,
    stock: 20,
  },
  {
    id: "coca-cola-bottle",
    name: "Coca-Cola",
    localName: "Coca-Cola",
    category: "drink",
    price: 500,
    description: "Classic cold soft drink, refreshing and popular.",
    unit: "Bottle",
    featured: true,
    badge: "Popular",
    enabled: true,
    stock: 25,
  },
  {
    id: "milinda-energy",
    name: "Milinda Energy Drink",
    localName: "Milinda Energy",
    category: "drink",
    price: 1200,
    description: "Energy boost drink for active students on campus.",
    unit: "Can",
    featured: true,
    badge: "New",
    enabled: true,
    stock: 18,
  },
  {
    id: "fiesta-drink",
    name: "Fiesta Drink",
    localName: "Fiesta",
    category: "drink",
    price: 600,
    description: "Tropical flavored soft drink, sweet and refreshing.",
    unit: "Bottle",
    featured: false,
    badge: "Fresh",
    enabled: true,
    stock: 16,
  },
  {
    id: "citron-drink",
    name: "Citron Drink",
    localName: "Citron",
    category: "drink",
    price: 700,
    description: "Citrus-flavored beverage with natural taste.",
    unit: "Bottle",
    featured: true,
    badge: "New",
    enabled: true,
    stock: 12,
  },
  {
    id: "pome-juice",
    name: "Pome Juice",
    localName: "Pome",
    category: "drink",
    price: 800,
    description: "Fresh apple juice for healthy daily refreshment.",
    unit: "Bottle",
    featured: false,
    badge: "Healthy",
    enabled: true,
    stock: 10,
  },
  {
    id: "sante-soap",
    name: "Sante Soap",
    localName: "Sante",
    category: "hygiene",
    price: 1000,
    description: "Premium natural soap for daily personal care.",
    unit: "Bar",
    featured: false,
    badge: "Care",
    enabled: true,
    stock: 11,
  },
  {
    id: "tembo-soap",
    name: "Tembo Soap",
    localName: "Tembo",
    category: "hygiene",
    price: 1000,
    description: "Quality soap bar for effective daily cleaning.",
    unit: "Bar",
    featured: false,
    badge: "Care",
    enabled: true,
    stock: 13,
  },
  {
    id: "cintol-soap",
    name: "Cintol Soap",
    localName: "Cintol",
    category: "hygiene",
    price: 1200,
    description: "Antiseptic soap for skin protection and hygiene.",
    unit: "Bar",
    featured: true,
    badge: "Medicated",
    enabled: true,
    stock: 9,
  },
  {
    id: "cotex-toilet-paper",
    name: "Cotex Toilet Paper",
    localName: "Cotex",
    category: "hygiene",
    price: 800,
    description: "Soft toilet paper roll, essential bathroom item.",
    unit: "Roll",
    featured: false,
    badge: "Daily",
    enabled: true,
    stock: 22,
  },
  {
    id: "notebooks-pack",
    name: "Notebooks Pack",
    localName: "Notebooks",
    category: "stationery",
    price: 2000,
    description: "Pack of quality notebooks for study and notes.",
    unit: "Pack",
    featured: false,
    badge: "Study",
    enabled: true,
    stock: 10,
  },
  {
    id: "pens-pack",
    name: "Pens Set",
    localName: "Pens",
    category: "stationery",
    price: 1500,
    description: "Multicolor pen set for various writing needs.",
    unit: "Set",
    featured: false,
    badge: "Daily",
    enabled: true,
    stock: 18,
  },
  {
    id: "pencils-pack",
    name: "Pencils Pack",
    localName: "Pencils",
    category: "stationery",
    price: 1000,
    description: "Graphite pencil pack for drawing and writing.",
    unit: "Pack",
    featured: false,
    badge: "Daily",
    enabled: true,
    stock: 15,
  },
  {
    id: "mens-underwear",
    name: "Men's Underwear",
    localName: "Underwear",
    category: "hygiene",
    price: 2500,
    description: "Quality men's underwear, comfortable for daily wear.",
    unit: "Piece",
    featured: false,
    badge: "Clothing",
    enabled: true,
    stock: 7,
  },
];

const FALLBACK_ORDERS = [
  {
    reference: "NPC-847291",
    customer: "John Doe",
    phone: "0789234567",
    items: [
      { productId: "rice-beans", qty: 1 },
      { productId: "chicken-plate", qty: 1 },
    ],
    amount: 4550,
    status: "New",
    time: "09:00",
    period: "today",
    payment: "MTN Mobile Money",
  },
  {
    reference: "NPC-847250",
    customer: "Alice Uwimana",
    phone: "0789123456",
    items: [{ productId: "chicken-plate", qty: 1 }],
    amount: 3050,
    status: "Paid",
    time: "08:35",
    period: "today",
    payment: "Airtel Money",
  },
];

const PRODUCT_MARKERS = {
  food: "FD",
  drink: "DR",
  snack: "SN",
  hygiene: "HY",
  stationery: "ST",
  electronics: "EL",
};

const CATEGORY_LABELS = {
  food: "Food",
  drink: "Drinks",
  snack: "Snacks",
  hygiene: "Hygiene",
  stationery: "Stationery",
  electronics: "Electronics",
};

const state = {
  currentScreen: "landing",
  selectedCategory: "all",
  searchQuery: "",
  paymentMethod: "mtn",
  transactionQuery: "",
  transactionFilter: "all",
  exportRange: "today",
  exportStatus: "all",
  stockFilter: "all",
  products: [],
  orders: [],
  cart: [],
  nextReference: 847400,
  customer: {
    name: "Walk-in Customer",
    phone: "0780000000",
    smsEnabled: true,
    locale: "rw",
  },
  authPins: {
    trader: "",
    admin: "",
  },
  apiAvailable: false,
  systemEvents: [],
};

const screens = [...document.querySelectorAll(".screen")];
const routeButtons = [...document.querySelectorAll("[data-link]")];
const switchButtons = [...document.querySelectorAll(".switch-btn")];
const switcher = document.getElementById("screenSwitcher");
const toggleSwitcherBtn = document.getElementById("toggleSwitcher");
const closeSwitcherBtn = document.getElementById("closeSwitcher");

const paymentModal = document.getElementById("paymentModal");
const modalClose = document.getElementById("modalClose");
const confirmPayBtn = document.getElementById("confirmPayBtn");
const retryBtn = document.getElementById("retryBtn");
const doneBtn = document.getElementById("doneBtn");
const payPhoneInput = document.getElementById("payPhoneInput");
const payPhoneHint = document.getElementById("payPhoneHint");
const modalAmountText = document.getElementById("modalAmountText");
const confirmRefText = document.getElementById("confirmRefText");
const processingTitle = document.getElementById("processingTitle");

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeCategory(category) {
  const key = String(category || "").toLowerCase();
  if (key === "drinks") return "drink";
  if (key === "snacks") return "snack";
  return key;
}

function normalizeProduct(product) {
  const category = normalizeCategory(product.category);
  return {
    id: product.id,
    name: product.name || "Unnamed Product",
    localName: product.localName || product.name || "Unnamed Product",
    category: category || "food",
    price: Number(product.price || 0),
    description: product.description || "No description available.",
    unit: product.unit || "Item",
    featured: Boolean(product.featured),
    badge: product.badge || "",
    enabled: product.enabled !== false,
    stock: Number.isFinite(Number(product.stock)) ? Number(product.stock) : 0,
  };
}

function normalizeOrder(order) {
  return {
    reference: order.reference,
    customer: order.customer || state.customer.name,
    phone: order.phone || state.customer.phone,
    items: Array.isArray(order.items) ? order.items : [],
    amount: Number(order.amount || 0),
    status: order.status || "Pending",
    time: order.time || "Just now",
    period: order.period || "today",
    payment: order.payment || "MTN Mobile Money",
  };
}

function formatMoney(value) {
  return `${Math.round(Number(value) || 0).toLocaleString("en-US")} RWF`;
}

function getStatusClass(status) {
  const normalized = String(status || "").toLowerCase();
  if (normalized === "paid") return "paid";
  if (normalized === "new") return "new";
  return "pending";
}

function getPaymentLabel(method = state.paymentMethod) {
  return method === "airtel" ? "Airtel Money" : "MTN Mobile Money";
}

function getProduct(productId) {
  return state.products.find((product) => product.id === productId) || null;
}

function getCartQuantity(productId) {
  return state.cart.find((item) => item.productId === productId)?.qty || 0;
}

function getProductMarker(product) {
  return PRODUCT_MARKERS[normalizeCategory(product.category)] || "PR";
}

function getStockLabel(stockState) {
  if (stockState === "low") return "Low stock";
  if (stockState === "medium") return "Limited";
  return "Ready now";
}

function getRecommendedProducts() {
  const inCart = new Set(state.cart.map((item) => item.productId));
  return state.products
    .filter((product) => product.enabled && !inCart.has(product.id) && product.stock > 0)
    .sort((left, right) => {
      if (Boolean(right.featured) !== Boolean(left.featured)) {
        return Number(right.featured) - Number(left.featured);
      }
      return left.price - right.price;
    })
    .slice(0, 3);
}

function getVisibleProducts() {
  const query = state.searchQuery.trim().toLowerCase();

  return state.products.filter((product) => {
    const productCategory = normalizeCategory(product.category);
    const categoryMatches =
      state.selectedCategory === "all" || productCategory === state.selectedCategory;
    const queryMatches =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.localName.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return product.enabled && categoryMatches && queryMatches;
  });
}

function getCartItems() {
  return state.cart
    .map((entry) => {
      const product = getProduct(entry.productId);
      if (!product) return null;

      return {
        product,
        qty: entry.qty,
        total: product.price * entry.qty,
      };
    })
    .filter(Boolean);
}

function getSubtotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}

function getOrderItemsLabel(order) {
  return order.items
    .map((item) => {
      const product = getProduct(item.productId);
      if (!product) return `${item.qty} item`;
      return `${product.name}${item.qty > 1 ? ` x${item.qty}` : ""}`;
    })
    .join(", ");
}

function getNewOrders() {
  return state.orders.filter((order) => order.status === "New");
}

function getPaidOrders() {
  return state.orders.filter((order) => order.status === "Paid");
}

function getOpenOrders() {
  return state.orders.filter((order) => order.status !== "Paid");
}

function getFilteredTransactions() {
  const query = state.transactionQuery.trim().toLowerCase();

  return state.orders.filter((order) => {
    const statusMatches =
      state.transactionFilter === "all" ||
      (state.transactionFilter === "paid" && order.status === "Paid") ||
      (state.transactionFilter === "pending" && order.status !== "Paid");
    const queryMatches =
      !query ||
      order.phone.toLowerCase().includes(query) ||
      order.customer.toLowerCase().includes(query) ||
      getOrderItemsLabel(order).toLowerCase().includes(query) ||
      order.reference.toLowerCase().includes(query);

    return statusMatches && queryMatches;
  });
}

function getExportOrders() {
  return state.orders.filter((order) => {
    const rangeMatches =
      state.exportRange === "all" ||
      state.exportRange === "month" ||
      (state.exportRange === "week" && ["today", "week"].includes(order.period)) ||
      (state.exportRange === "today" && order.period === "today");
    const statusMatches =
      state.exportStatus === "all" ||
      (state.exportStatus === "paid" && order.status === "Paid") ||
      (state.exportStatus === "pending" && order.status !== "Paid");

    return rangeMatches && statusMatches;
  });
}

function getProfileStats() {
  const customerOrders = state.orders.filter((order) => order.phone === state.customer.phone);
  return {
    totalOrders: customerOrders.length,
    totalSpend: customerOrders.reduce((sum, order) => sum + order.amount, 0),
  };
}

function getOverviewStats() {
  const todaysOrders = state.orders.filter((order) => order.period === "today");
  const source = todaysOrders.length ? todaysOrders : state.orders;
  const paymentCounts = new Map();
  const productCounts = new Map();

  source.forEach((order) => {
    paymentCounts.set(order.payment, (paymentCounts.get(order.payment) || 0) + 1);
    order.items.forEach((item) => {
      const product = getProduct(item.productId);
      if (!product) return;
      productCounts.set(product.name, (productCounts.get(product.name) || 0) + item.qty);
    });
  });

  const bestSeller =
    [...productCounts.entries()].sort((left, right) => right[1] - left[1])[0]?.[0] || "-";
  const topPayment =
    [...paymentCounts.entries()].sort((left, right) => right[1] - left[1])[0]?.[0] || "-";
  const totalSales = source.reduce((sum, order) => sum + order.amount, 0);
  const totalItems = source.reduce(
    (sum, order) => sum + order.items.reduce((count, item) => count + item.qty, 0),
    0
  );

  return {
    totalSales,
    totalOrders: source.length,
    averageOrder: source.length ? Math.round(totalSales / source.length) : 0,
    totalItems,
    bestSeller,
    topPayment,
  };
}

function getAdminUsers() {
  const users = new Map();

  state.orders.forEach((order) => {
    const key = `${order.customer}|${order.phone}`;
    const existing = users.get(key) || {
      name: order.customer,
      phone: order.phone,
      spend: 0,
      orders: 0,
    };

    existing.spend += order.amount;
    existing.orders += 1;
    users.set(key, existing);
  });

  return [...users.values()].sort((left, right) => right.spend - left.spend);
}

function getCategoryRevenue() {
  const totals = new Map();

  state.orders.forEach((order) => {
    order.items.forEach((item) => {
      const product = getProduct(item.productId);
      if (!product) return;
      const category = normalizeCategory(product.category);
      totals.set(category, (totals.get(category) || 0) + product.price * item.qty);
    });
  });

  return [...totals.entries()]
    .map(([category, value]) => ({
      label: CATEGORY_LABELS[category] || category,
      value,
    }))
    .sort((left, right) => right.value - left.value);
}

function getTopProducts() {
  const totals = new Map();

  state.orders.forEach((order) => {
    order.items.forEach((item) => {
      const product = getProduct(item.productId);
      if (!product) return;
      totals.set(product.name, (totals.get(product.name) || 0) + item.qty);
    });
  });

  return [...totals.entries()]
    .map(([name, qty]) => ({ name, qty }))
    .sort((left, right) => right.qty - left.qty)
    .slice(0, 5);
}

function getRevenueSeries() {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const baseRevenue = state.orders.reduce((sum, order) => sum + order.amount, 0);

  return labels.map((label, index) => {
    const ratio = 0.4 + (index + 1) / 10;
    const value = Math.round((baseRevenue / labels.length || 0) * ratio);
    return { label, value };
  });
}

function getStockState(stock) {
  if (stock < 5) return "low";
  if (stock < 10) return "medium";
  return "ok";
}

function getFilteredStock() {
  if (state.stockFilter === "all") return state.products;
  return state.products.filter((product) => getStockState(product.stock) === state.stockFilter);
}

function pushSystemEvent(level, text) {
  state.systemEvents.unshift({
    level,
    text,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });
  state.systemEvents = state.systemEvents.slice(0, 8);
}

function updateNextReference() {
  const highest = state.orders.reduce((max, order) => {
    const value = Number(String(order.reference || "").replace(/\D/g, ""));
    return Number.isFinite(value) ? Math.max(max, value) : max;
  }, 847399);
  state.nextReference = highest + 1;
}

async function fetchJson(path, options) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  state.apiAvailable = true;
  return response.json();
}

function setChipGroupActive(containerSelector, activeButton) {
  document.querySelectorAll(`${containerSelector} .chip`).forEach((chip) => {
    const isActive = chip === activeButton;
    chip.classList.toggle("chip-active", isActive);
    chip.classList.toggle("active", isActive);
  });
}

function setSwitcherOpen(isOpen) {
  if (!switcher || !toggleSwitcherBtn) return;
  switcher.classList.toggle("open", isOpen);
  switcher.setAttribute("aria-hidden", String(!isOpen));
  toggleSwitcherBtn.setAttribute("aria-expanded", String(isOpen));
}

function showScreen(screenId) {
  const exists = screens.some((screen) => screen.id === screenId);
  state.currentScreen = exists ? screenId : "landing";

  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === state.currentScreen);
  });

  switchButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === state.currentScreen);
  });

  document.querySelectorAll(".bottom-nav").forEach((nav) => {
    nav.querySelectorAll("button[data-link]").forEach((button) => {
      button.classList.toggle("nav-active", button.dataset.link === state.currentScreen);
    });
  });

  window.location.hash = state.currentScreen;
  setSwitcherOpen(false);
}

function showModalStep(stepId) {
  ["modalStep1", "modalStep2", "modalStep3", "modalStep4"].forEach((id) => {
    document.getElementById(id)?.classList.toggle("hidden", id !== stepId);
  });
}

function closePaymentModal() {
  paymentModal?.classList.add("hidden");
  payPhoneHint.textContent = "";
  showModalStep("modalStep1");
}

function openPaymentModal() {
  modalAmountText.textContent = `Total: ${formatMoney(getSubtotal() + PAYMENT_FEE)}`;
  payPhoneInput.value = state.customer.phone.replace(/^0/, "");
  payPhoneHint.textContent = "";
  showModalStep("modalStep1");
  paymentModal?.classList.remove("hidden");
  payPhoneInput.focus();
}

function updateCustomerProfile() {
  const stats = getProfileStats();
  document.getElementById("profileName").textContent = state.customer.name;
  document.getElementById("profilePhone").textContent = `+250 ${state.customer.phone.slice(1)}`;
  document.getElementById("profileSpend").textContent = formatMoney(stats.totalSpend);
  document.getElementById("profileOrders").textContent = String(stats.totalOrders);
  document.getElementById("smsToggle").textContent = state.customer.smsEnabled ? "ON" : "OFF";
  document.getElementById("smsToggle").classList.toggle("toggle-on", state.customer.smsEnabled);
  document.getElementById("smsToggle").classList.toggle("toggle-off", !state.customer.smsEnabled);
  document.getElementById("profileLangToggle").textContent = state.customer.locale.toUpperCase();
  document.getElementById("langToggle").textContent = state.customer.locale.toUpperCase();
}

function renderShop() {
  const grid = document.getElementById("productGrid");
  const visibleProducts = getVisibleProducts();
  const enabledProducts = state.products.filter((product) => product.enabled);
  const featuredVisible = visibleProducts.filter((product) => product.featured).length;
  const lowStockVisible = visibleProducts.filter((product) => getStockState(product.stock) === "low").length;
  const activeCategoryLabel =
    state.selectedCategory === "all"
      ? "All departments"
      : CATEGORY_LABELS[state.selectedCategory] || state.selectedCategory;

  document.getElementById("shopInsights").innerHTML = `
    <div class="insight-pill"><strong>${visibleProducts.length}</strong><span>showing</span></div>
    <div class="insight-pill"><strong>${featuredVisible}</strong><span>featured picks</span></div>
    <div class="insight-pill"><strong>${lowStockVisible}</strong><span>limited items</span></div>
    <div class="insight-pill"><strong>${escapeHtml(activeCategoryLabel)}</strong><span>active filter</span></div>
  `;

  document.getElementById("landingProductCount").textContent = `${enabledProducts.length} Items`;

  grid.innerHTML = visibleProducts.length
    ? visibleProducts
        .map((product) => {
          const qtyInCart = getCartQuantity(product.id);
          const stockState = getStockState(product.stock);
          const badges = [
            product.featured
              ? '<span class="product-badge product-badge--featured">Featured</span>'
              : "",
            product.badge
              ? `<span class="product-badge product-badge--stock">${escapeHtml(product.badge)}</span>`
              : "",
            qtyInCart
              ? `<span class="product-badge product-badge--cart">In cart x${qtyInCart}</span>`
              : "",
          ]
            .filter(Boolean)
            .join("");

          return `
            <article class="product-card ${qtyInCart ? "in-cart" : ""}">
              <div class="product-topline">
                <div class="product-emoji">${getProductMarker(product)}</div>
                <div class="product-badges">${badges}</div>
              </div>
              <div>
                <h3 class="product-name-en">${escapeHtml(product.name)}</h3>
                <p class="product-name-rw">${escapeHtml(product.localName)}</p>
              </div>
              <p class="muted">${escapeHtml(product.description)}</p>
              <div class="product-meta-row">
                <strong class="product-price">${formatMoney(product.price)}</strong>
                <span class="stock-pill stock-pill--${stockState}">${getStockLabel(stockState)}</span>
              </div>
              <span class="product-unit">${escapeHtml(product.unit)} · ${escapeHtml(
                CATEGORY_LABELS[normalizeCategory(product.category)] || product.category
              )}</span>
              <button class="add-btn ${qtyInCart ? "in-cart" : ""}" type="button" data-product-id="${escapeHtml(product.id)}">
                ${qtyInCart ? `Add More (${qtyInCart})` : "Add to Cart"}
              </button>
            </article>
          `;
        })
        .join("")
    : '<div class="empty-state">No visible products match this filter right now.</div>';

  const cartQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = getSubtotal() + PAYMENT_FEE;
  const floatBar = document.getElementById("floatBar");

  floatBar.style.display = cartQty ? "flex" : "none";
  document.getElementById("floatCount").textContent = `${cartQty} item${cartQty === 1 ? "" : "s"}`;
  document.getElementById("floatTotal").textContent = formatMoney(cartTotal);

  document.querySelectorAll('button[data-link="cart"]').forEach((button) => {
    const label = button.querySelector("span:not(.nav-icon)");
    if (label) {
      label.textContent = cartQty ? `Cart (${cartQty})` : "Cart";
    }
  });
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const cartSuggestions = document.getElementById("cartSuggestions");
  const cartItems = getCartItems();
  const subtotal = getSubtotal();
  const total = subtotal + PAYMENT_FEE;
  const recommendations = getRecommendedProducts();

  cartList.innerHTML = cartItems.length
    ? cartItems
        .map(
          (item) => `
            <article class="cart-item">
              <div class="cart-emoji">${getProductMarker(item.product)}</div>
              <div class="cart-info">
                <h3 class="cart-name">${escapeHtml(item.product.name)}</h3>
                <p class="cart-sub">${escapeHtml(item.product.localName)}</p>
              </div>
              <div class="cart-right">
                <strong class="cart-price">${formatMoney(item.total)}</strong>
                <div class="qty-wrap">
                  <button class="qty-btn" type="button" data-cart-product="${escapeHtml(
                    item.product.id
                  )}" data-change="-1">-</button>
                  <span class="qty-num">${item.qty}</span>
                  <button class="qty-btn" type="button" data-cart-product="${escapeHtml(
                    item.product.id
                  )}" data-change="1">+</button>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : '<div class="empty-state">Your cart is empty. Add products from the shop.</div>';

  cartSuggestions.innerHTML =
    cartItems.length && recommendations.length
      ? `
        <article class="suggestion-card">
          <div class="suggestion-head">
            <strong>Quick add-ons</strong>
            <span class="muted">Popular extras before checkout</span>
          </div>
          <div class="suggestion-list">
            ${recommendations
              .map(
                (product) => `
                  <div class="suggestion-item">
                    <div class="suggestion-copy">
                      <strong>${escapeHtml(product.name)}</strong>
                      <span>${formatMoney(product.price)} · ${escapeHtml(product.unit)}</span>
                    </div>
                    <button class="suggestion-add" type="button" data-suggest-product="${escapeHtml(
                      product.id
                    )}">Add</button>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
      : "";

  document.getElementById("subtotal").textContent = formatMoney(subtotal);
  document.getElementById("grandTotal").textContent = formatMoney(total);
  document.querySelectorAll("#paymentOptions .pay-opt").forEach((button) => {
    button.classList.toggle("pay-opt-active", button.dataset.payment === state.paymentMethod);
  });
  const checkoutBtn = document.getElementById("checkoutBtn");
  checkoutBtn.disabled = !cartItems.length;
  checkoutBtn.textContent = cartItems.length ? "Pay with Mobile Money" : "Add items to continue";
}

function renderOrders() {
  const ordersList = document.getElementById("ordersList");

  ordersList.innerHTML = state.orders.length
    ? state.orders
        .map(
          (order) => `
            <article class="order-card">
              <div class="order-top">
                <div>
                  <div class="order-ref">${escapeHtml(order.reference)}</div>
                  <p class="order-items">${escapeHtml(getOrderItemsLabel(order))}</p>
                </div>
                <span class="status-badge status-${getStatusClass(order.status)}">${escapeHtml(
                  order.status
                )}</span>
              </div>
              <div class="order-bottom">
                <span>${escapeHtml(order.payment)}</span>
                <strong class="order-price">${formatMoney(order.amount)}</strong>
              </div>
            </article>
          `
        )
        .join("")
    : '<div class="empty-state">No orders yet. Complete a checkout to create one.</div>';
}

function renderOverview() {
  const stats = getOverviewStats();

  document.getElementById("overviewSales").textContent = formatMoney(stats.totalSales);
  document.getElementById("overviewMetrics").innerHTML = `
    <article class="metric-card">
      <span>Total Orders</span>
      <strong>${stats.totalOrders}</strong>
    </article>
    <article class="metric-card">
      <span>Items Sold</span>
      <strong>${stats.totalItems}</strong>
    </article>
    <article class="metric-card">
      <span>Average Order</span>
      <strong>${formatMoney(stats.averageOrder)}</strong>
    </article>
    <article class="metric-card">
      <span>Open Orders</span>
      <strong>${getOpenOrders().length}</strong>
    </article>
  `;

  document.getElementById("recentOrders").innerHTML = state.orders.length
    ? state.orders
        .slice(0, 4)
        .map(
          (order) => `
            <article class="trans-row">
              <div class="order-top">
                <div>
                  <div class="order-ref">${escapeHtml(order.reference)}</div>
                  <p class="order-items">${escapeHtml(getOrderItemsLabel(order))}</p>
                </div>
                <span class="status-badge status-${getStatusClass(order.status)}">${escapeHtml(
                  order.status
                )}</span>
              </div>
              <div class="order-bottom">
                <span>${escapeHtml(order.time)}</span>
                <strong class="order-price">${formatMoney(order.amount)}</strong>
              </div>
            </article>
          `
        )
        .join("")
    : '<div class="empty-state">No recent orders to display.</div>';
}

function renderAlerts() {
  const list = document.getElementById("alertsList");
  const newOrders = getNewOrders();

  list.innerHTML = newOrders.length
    ? newOrders
        .map(
          (order) => `
            <article class="alert-card">
              <div class="order-top">
                <div>
                  <span class="status-badge status-new">NEW</span>
                  <div class="order-ref">${escapeHtml(order.reference)}</div>
                </div>
                <strong class="order-price">${formatMoney(order.amount)}</strong>
              </div>
              <p class="order-items">${escapeHtml(getOrderItemsLabel(order))}</p>
              <div class="order-bottom">
                <span>${escapeHtml(order.phone)}</span>
                <span>${escapeHtml(order.time)}</span>
              </div>
              <div class="alert-actions">
                <button class="hold-btn" type="button" data-alert-action="pending" data-reference="${escapeHtml(
                  order.reference
                )}">
                  Hold
                </button>
                <button class="paid-btn" type="button" data-alert-action="paid" data-reference="${escapeHtml(
                  order.reference
                )}">
                  Mark as Paid
                </button>
              </div>
            </article>
          `
        )
        .join("")
    : '<div class="empty-state">No new alerts. Fresh checkouts will appear here.</div>';
}

function renderTransactions() {
  const rows = getFilteredTransactions();

  document.getElementById("transactionsList").innerHTML = rows.length
    ? rows
        .map(
          (order) => `
            <article class="trans-row">
              <div class="order-top">
                <div>
                  <div class="order-ref">${escapeHtml(order.reference)}</div>
                  <p class="order-items">${escapeHtml(order.customer)} · ${escapeHtml(order.phone)}</p>
                </div>
                <strong class="order-price">${formatMoney(order.amount)}</strong>
              </div>
              <p class="order-items">${escapeHtml(getOrderItemsLabel(order))}</p>
              <div class="order-bottom">
                <span>${escapeHtml(order.payment)}</span>
                <span class="status-badge status-${getStatusClass(order.status)}">${escapeHtml(
                  order.status
                )}</span>
              </div>
            </article>
          `
        )
        .join("")
    : '<div class="empty-state">No transactions match this search and filter.</div>';
}

function renderProductManager() {
  document.getElementById("productManager").innerHTML = state.products
    .map(
      (product) => `
        <article class="manager-card">
          <div class="manager-top">
            <div class="manager-info">
              <div class="manager-emoji">${getProductMarker(product)}</div>
              <div>
                <h3 class="manager-name">${escapeHtml(product.name)}</h3>
                <p class="manager-sub">${formatMoney(product.price)} · Stock ${product.stock}</p>
              </div>
            </div>
            <button
              class="toggle-pill ${product.enabled ? "toggle-on" : "toggle-off"}"
              type="button"
              data-product-toggle="${escapeHtml(product.id)}"
            >
              ${product.enabled ? "ON" : "OFF"}
            </button>
          </div>
          <p class="manager-sub">${escapeHtml(product.localName)}</p>
          <div class="alert-actions">
            <button class="hold-btn" type="button" data-product-edit="${escapeHtml(product.id)}">
              Edit Price
            </button>
            <button class="paid-btn" type="button" data-product-restock="${escapeHtml(product.id)}">
              Restock +5
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderExportPreview() {
  const exportOrders = getExportOrders();
  const totalRevenue = exportOrders.reduce((sum, order) => sum + order.amount, 0);
  const paidCount = exportOrders.filter((order) => order.status === "Paid").length;

  document.getElementById("exportPreview").innerHTML = `
    <div class="section-mini">
      <h3>Preview</h3>
    </div>
    <div class="stack-list compact-list">
      <article class="metric-card">
        <span>Orders</span>
        <strong>${exportOrders.length}</strong>
      </article>
      <article class="metric-card">
        <span>Revenue</span>
        <strong>${formatMoney(totalRevenue)}</strong>
      </article>
      <article class="metric-card">
        <span>Paid</span>
        <strong>${paidCount}</strong>
      </article>
      <article class="metric-card">
        <span>Open</span>
        <strong>${exportOrders.length - paidCount}</strong>
      </article>
    </div>
  `;
}

function renderAdminOverview() {
  const paidOrders = getPaidOrders();
  const categoryRevenue = getCategoryRevenue();
  const customers = getAdminUsers();
  const paidRevenue = paidOrders.reduce((sum, order) => sum + order.amount, 0);

  document.getElementById("adminTotalRevenue").textContent = formatMoney(paidRevenue);
  document.getElementById("adminMetrics").innerHTML = `
    <article class="metric-card">
      <span>Customers</span>
      <strong>${customers.length}</strong>
    </article>
    <article class="metric-card">
      <span>Total Orders</span>
      <strong>${state.orders.length}</strong>
    </article>
    <article class="metric-card">
      <span>Paid Orders</span>
      <strong>${paidOrders.length}</strong>
    </article>
    <article class="metric-card">
      <span>Stock Alerts</span>
      <strong>${state.products.filter((product) => product.stock < 5).length}</strong>
    </article>
  `;

  const maxCategoryValue = Math.max(...categoryRevenue.map((entry) => entry.value), 1);
  document.getElementById("categoryChart").innerHTML = categoryRevenue.length
    ? categoryRevenue
        .map(
          (entry) => `
            <div class="bar-row">
              <span class="bar-label">${escapeHtml(entry.label)}</span>
              <div class="bar-track">
                <div class="bar-fill" style="width:${Math.max(
                  6,
                  (entry.value / maxCategoryValue) * 100
                )}%"></div>
              </div>
              <span class="bar-value">${formatMoney(entry.value)}</span>
            </div>
          `
        )
        .join("")
    : '<div class="empty-state">Category revenue will appear as orders come in.</div>';
}

function renderAdminRevenue() {
  const series = getRevenueSeries();
  const topProducts = getTopProducts();
  const maxSeriesValue = Math.max(...series.map((entry) => entry.value), 1);

  document.getElementById("revenueChart").innerHTML = series
    .map(
      (entry) => `
        <div class="bar-row">
          <span class="bar-label">${escapeHtml(entry.label)}</span>
          <div class="bar-track">
            <div class="bar-fill bar-fill--green" style="width:${Math.max(
              6,
              (entry.value / maxSeriesValue) * 100
            )}%"></div>
          </div>
          <span class="bar-value">${formatMoney(entry.value)}</span>
        </div>
      `
    )
    .join("");

  document.getElementById("topProductsList").innerHTML = topProducts.length
    ? topProducts
        .map(
          (product) => `
            <article class="order-card">
              <div class="order-top">
                <div class="order-ref">${escapeHtml(product.name)}</div>
                <strong class="order-price">${product.qty} sold</strong>
              </div>
            </article>
          `
        )
        .join("")
    : '<div class="empty-state">Top products will appear after more sales.</div>';
}

function renderAdminUsers() {
  const users = getAdminUsers();

  document.getElementById("usersList").innerHTML = users.length
    ? users
        .map(
          (user, index) => `
            <article class="user-card">
              <div class="user-avatar">${escapeHtml(user.name.slice(0, 2).toUpperCase())}</div>
              <div class="user-info">
                <div class="user-name">${escapeHtml(user.name)}</div>
                <div class="user-phone">${escapeHtml(user.phone)}</div>
              </div>
              <div class="user-right">
                <div class="user-spend">${formatMoney(user.spend)}</div>
                <div class="user-count">
                  ${user.orders} order${user.orders === 1 ? "" : "s"}
                  ${index === 0 ? '<span class="user-badge badge-top">Top</span>' : ""}
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : '<div class="empty-state">Customer activity will appear here after purchases.</div>';
}

function renderAdminStock() {
  const products = getFilteredStock();

  document.getElementById("stockList").innerHTML = products.length
    ? products
        .map((product) => {
          const stockState = getStockState(product.stock);
          const width = Math.min(100, Math.max(6, (product.stock / 25) * 100));
          return `
            <article class="stock-item stock-${stockState}">
              <div class="stock-top">
                <div>
                  <div class="stock-name">${escapeHtml(product.name)}</div>
                  <div class="stock-cat">${escapeHtml(
                    CATEGORY_LABELS[normalizeCategory(product.category)] || product.category
                  )}</div>
                </div>
                <span class="stock-badge badge-${stockState}">
                  ${stockState.toUpperCase()}
                </span>
              </div>
              <div class="stock-bar-track">
                <div class="stock-bar-fill" style="width:${width}%"></div>
              </div>
              <div class="order-bottom">
                <span>Units available</span>
                <strong class="order-price">${product.stock}</strong>
              </div>
            </article>
          `;
        })
        .join("")
    : '<div class="empty-state">No stock items match this filter.</div>';
}

function renderAdminSystem() {
  const healthItems = [
    {
      name: "Backend API",
      status: state.apiAvailable ? "ok" : "degraded",
      detail: state.apiAvailable ? "Connected to localhost:3000" : "Running in demo fallback mode",
      width: state.apiAvailable ? 96 : 58,
    },
    {
      name: "Mobile Money",
      status: "ok",
      detail: "Push payment simulation available",
      width: 92,
    },
    {
      name: "SMS Gateway",
      status: state.customer.smsEnabled ? "ok" : "degraded",
      detail: state.customer.smsEnabled ? "Notifications enabled" : "Notifications disabled by user",
      width: state.customer.smsEnabled ? 90 : 55,
    },
  ];

  document.getElementById("systemHealthList").innerHTML = healthItems
    .map(
      (item) => `
        <article class="health-card">
          <div class="health-top">
            <div class="health-name">${escapeHtml(item.name)}</div>
            <span class="health-status health-${item.status}">${item.status.toUpperCase()}</span>
          </div>
          <div class="health-bar-track">
            <div class="health-bar-fill health-${item.status === "ok" ? "ok" : "deg"}-fill" style="width:${item.width}%"></div>
          </div>
          <div class="health-meta">${escapeHtml(item.detail)}</div>
        </article>
      `
    )
    .join("");

  document.getElementById("systemEventLog").innerHTML = state.systemEvents.length
    ? state.systemEvents
        .map(
          (event) => `
            <div class="event-row">
              <span class="event-dot event-dot--${event.level}"></span>
              <span class="event-text">${escapeHtml(event.text)}</span>
              <span class="event-time">${escapeHtml(event.time)}</span>
            </div>
          `
        )
        .join("")
    : '<div class="empty-state">System events will appear here as activity happens.</div>';
}

function renderBadges() {
  const newOrders = getNewOrders().length;
  const lowStock = state.products.filter((product) => product.stock < 5).length;
  const alertBadge = document.getElementById("alertBadge");
  const traderDot = document.getElementById("traderDot");
  const adminDot = document.getElementById("adminDot");
  const stockBadge = document.getElementById("stockBadge");

  alertBadge.textContent = String(newOrders);
  alertBadge.style.display = newOrders ? "grid" : "none";
  traderDot.style.display = newOrders ? "grid" : "none";
  adminDot.style.display = lowStock ? "grid" : "none";
  stockBadge.style.display = lowStock ? "grid" : "none";
}

function renderAll() {
  updateCustomerProfile();
  renderShop();
  renderCart();
  renderOrders();
  renderOverview();
  renderAlerts();
  renderTransactions();
  renderProductManager();
  renderExportPreview();
  renderAdminOverview();
  renderAdminRevenue();
  renderAdminUsers();
  renderAdminStock();
  renderAdminSystem();
  renderBadges();
}

function addToCart(productId) {
  const existing = state.cart.find((item) => item.productId === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ productId, qty: 1 });
  }

  renderAll();
}

function updateCartQuantity(productId, delta) {
  const entry = state.cart.find((item) => item.productId === productId);
  if (!entry) return;

  entry.qty += delta;
  if (entry.qty <= 0) {
    state.cart = state.cart.filter((item) => item.productId !== productId);
  }

  renderAll();
}

async function saveOrder(orderPayload) {
  try {
    const savedOrder = normalizeOrder(
      await fetchJson("/orders", {
        method: "POST",
        body: JSON.stringify(orderPayload),
      })
    );
    state.orders.unshift(savedOrder);
    return savedOrder;
  } catch (error) {
    const localOrder = normalizeOrder({
      ...orderPayload,
      reference: `NPC-${state.nextReference}`,
      time: "Just now",
      period: "today",
    });
    state.orders.unshift(localOrder);
    return localOrder;
  } finally {
    state.nextReference += 1;
  }
}

async function submitCheckout() {
  const phoneDigits = payPhoneInput.value.replace(/\D/g, "");
  if (!/^7\d{8}$/.test(phoneDigits)) {
    payPhoneHint.textContent = "Enter a valid 9-digit mobile number starting with 7.";
    return;
  }

  const items = getCartItems();
  if (!items.length) {
    payPhoneHint.textContent = "Your cart is empty.";
    return;
  }

  payPhoneHint.textContent = "";
  state.customer.phone = `0${phoneDigits}`;
  processingTitle.textContent = `Sending ${getPaymentLabel()} request...`;
  showModalStep("modalStep2");

  await new Promise((resolve) => window.setTimeout(resolve, 1200));

  const savedOrder = await saveOrder({
    customer: state.customer.name,
    phone: state.customer.phone,
    items: items.map((item) => ({ productId: item.product.id, qty: item.qty })),
    amount: getSubtotal() + PAYMENT_FEE,
    status: "New",
    payment: getPaymentLabel(),
  });

  state.cart = [];
  confirmRefText.textContent = savedOrder.reference;
  pushSystemEvent("ok", `Order ${savedOrder.reference} created with ${savedOrder.payment}.`);
  renderAll();
  showModalStep("modalStep3");
}

async function updateOrderStatus(reference, nextStatus) {
  const order = state.orders.find((entry) => entry.reference === reference);
  if (!order) return;

  order.status = nextStatus;
  renderAll();

  try {
    await fetchJson(`/orders/${encodeURIComponent(reference)}/status`, {
      method: "PUT",
      body: JSON.stringify({ status: nextStatus }),
    });
  } catch (error) {
    // Keep local demo state if backend update is unavailable.
  }

  pushSystemEvent(
    nextStatus === "Paid" ? "ok" : "warn",
    `Order ${reference} moved to ${nextStatus}.`
  );
  renderAll();
}

async function updateProduct(productId, patch) {
  const product = getProduct(productId);
  if (!product) return;

  Object.assign(product, patch);
  renderAll();

  try {
    const savedProduct = normalizeProduct(
      await fetchJson(`/products/${encodeURIComponent(productId)}`, {
        method: "PUT",
        body: JSON.stringify(product),
      })
    );

    const index = state.products.findIndex((entry) => entry.id === productId);
    if (index !== -1) state.products[index] = savedProduct;
  } catch (error) {
    // Keep local demo state if backend update is unavailable.
  }

  renderAll();
}

function exportOrdersAsCsv() {
  const rows = getExportOrders();
  const csv = [
    "Reference,Customer,Phone,Items,Amount,Status,Payment,Time",
    ...rows.map((order) =>
      [
        order.reference,
        order.customer,
        order.phone,
        getOrderItemsLabel(order),
        order.amount,
        order.status,
        order.payment,
        order.time,
      ]
        .map((value) => `"${String(value).replaceAll('"', '""')}"`)
        .join(",")
    ),
  ].join("\n");

  downloadFile("npc-canteen-orders.csv", "text/csv;charset=utf-8", csv);
}

function exportSummaryReport() {
  const orders = getExportOrders();
  const lines = [
    "NPC Canteen Summary Report",
    `Orders: ${orders.length}`,
    `Revenue: ${formatMoney(orders.reduce((sum, order) => sum + order.amount, 0))}`,
    `Paid: ${orders.filter((order) => order.status === "Paid").length}`,
    `Open: ${orders.filter((order) => order.status !== "Paid").length}`,
    "",
    ...orders.map(
      (order) =>
        `${order.reference} | ${order.customer} | ${formatMoney(order.amount)} | ${order.status}`
    ),
  ].join("\n");

  downloadFile("npc-canteen-summary.txt", "text/plain;charset=utf-8", lines);
}

function exportPrintableReport() {
  const orders = getExportOrders();
  const printWindow = window.open("", "_blank", "width=800,height=900");
  if (!printWindow) return;

  printWindow.document.write(`
    <html>
      <head>
        <title>NPC Canteen Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #222; }
          h1 { margin-bottom: 8px; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background: #f3f3f3; }
        </style>
      </head>
      <body>
        <h1>NPC Canteen Report</h1>
        <p>Total Orders: ${orders.length}</p>
        <p>Total Revenue: ${formatMoney(orders.reduce((sum, order) => sum + order.amount, 0))}</p>
        <table>
          <thead>
            <tr>
              <th>Reference</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            ${orders
              .map(
                (order) => `
                  <tr>
                    <td>${escapeHtml(order.reference)}</td>
                    <td>${escapeHtml(order.customer)}</td>
                    <td>${escapeHtml(formatMoney(order.amount))}</td>
                    <td>${escapeHtml(order.status)}</td>
                    <td>${escapeHtml(order.payment)}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function downloadFile(filename, contentType, content) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function resetPin(role, showError = false) {
  state.authPins[role] = "";
  const dots = document.querySelectorAll(`#${role}PinDots span`);
  dots.forEach((dot) => dot.classList.remove("filled"));
  document.getElementById(`${role}PinError`)?.classList.toggle("hidden", !showError);
}

function updatePinDots(role) {
  const dots = document.querySelectorAll(`#${role}PinDots span`);
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < state.authPins[role].length);
  });
}

function handlePinInput(role, screenOnSuccess, correctPin, key) {
  if (key === "back") {
    state.authPins[role] = state.authPins[role].slice(0, -1);
    updatePinDots(role);
    return;
  }

  if (state.authPins[role].length >= 4) return;

  document.getElementById(`${role}PinError`)?.classList.add("hidden");
  state.authPins[role] += key;
  updatePinDots(role);

  if (state.authPins[role].length === 4) {
    window.setTimeout(() => {
      if (state.authPins[role] === correctPin) {
        resetPin(role, false);
        showScreen(screenOnSuccess);
      } else {
        resetPin(role, true);
      }
    }, 150);
  }
}

async function initializeApp() {
  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && screens.some((screen) => screen.id === initialHash)) {
    state.currentScreen = initialHash;
  }

  try {
    const [products, orders] = await Promise.all([
      fetchJson("/products"),
      fetchJson("/orders"),
    ]);

    state.products = products.map(normalizeProduct);
    state.orders = orders.map(normalizeOrder);
    pushSystemEvent("ok", "Loaded live backend data.");
  } catch (error) {
    state.apiAvailable = false;
    state.products = deepClone(FALLBACK_PRODUCTS).map(normalizeProduct);
    state.orders = deepClone(FALLBACK_ORDERS).map(normalizeOrder);
    pushSystemEvent("warn", "Backend unavailable. Running with demo data.");
  }

  updateNextReference();
  renderAll();
  showScreen(state.currentScreen);
}

switchButtons.forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.screen));
});

routeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextScreen = button.dataset.link;
    if (nextScreen) showScreen(nextScreen);
  });
});

toggleSwitcherBtn?.addEventListener("click", () => {
  setSwitcherOpen(!switcher?.classList.contains("open"));
});

closeSwitcherBtn?.addEventListener("click", () => setSwitcherOpen(false));
modalClose?.addEventListener("click", closePaymentModal);
retryBtn?.addEventListener("click", () => showModalStep("modalStep1"));
doneBtn?.addEventListener("click", () => {
  closePaymentModal();
  showScreen("orders");
});
confirmPayBtn?.addEventListener("click", submitCheckout);

document.getElementById("shopSearch")?.addEventListener("input", (event) => {
  state.searchQuery = event.target.value;
  renderShop();
});

document.getElementById("shopCategories")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-cat]");
  if (!button) return;

  state.selectedCategory = button.dataset.cat || "all";
  setChipGroupActive("#shopCategories", button);
  renderShop();
});

document.getElementById("productGrid")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-product-id]");
  if (!button) return;
  addToCart(button.dataset.productId);
});

document.getElementById("cartList")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-cart-product]");
  if (!button) return;
  updateCartQuantity(button.dataset.cartProduct, Number(button.dataset.change || 0));
});

document.getElementById("cartSuggestions")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-suggest-product]");
  if (!button) return;
  addToCart(button.dataset.suggestProduct);
});

document.getElementById("paymentOptions")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-payment]");
  if (!button) return;
  state.paymentMethod = button.dataset.payment || "mtn";
  renderCart();
});

document.getElementById("checkoutBtn")?.addEventListener("click", () => {
  if (!state.cart.length) {
    window.alert("Your cart is empty.");
    return;
  }
  openPaymentModal();
});

document.getElementById("clearAlerts")?.addEventListener("click", async () => {
  const newOrders = getNewOrders();
  await Promise.all(newOrders.map((order) => updateOrderStatus(order.reference, "Pending")));
});

document.getElementById("alertsList")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-alert-action]");
  if (!button) return;

  const reference = button.dataset.reference;
  const action = button.dataset.alertAction;
  if (action === "paid") updateOrderStatus(reference, "Paid");
  if (action === "pending") updateOrderStatus(reference, "Pending");
});

document.getElementById("transactionSearch")?.addEventListener("input", (event) => {
  state.transactionQuery = event.target.value;
  renderTransactions();
});

document.getElementById("transactionFilters")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-status]");
  if (!button) return;
  state.transactionFilter = button.dataset.status || "all";
  setChipGroupActive("#transactionFilters", button);
  renderTransactions();
});

document.getElementById("productManager")?.addEventListener("click", async (event) => {
  const toggleButton = event.target.closest("button[data-product-toggle]");
  if (toggleButton) {
    const product = getProduct(toggleButton.dataset.productToggle);
    if (product) {
      await updateProduct(product.id, { enabled: !product.enabled });
      pushSystemEvent("warn", `${product.name} visibility updated.`);
    }
    return;
  }

  const editButton = event.target.closest("button[data-product-edit]");
  if (editButton) {
    const product = getProduct(editButton.dataset.productEdit);
    if (!product) return;
    const nextValue = window.prompt(`Enter new price for ${product.name}`, String(product.price));
    if (!nextValue) return;

    const parsed = Number(nextValue);
    if (!Number.isFinite(parsed) || parsed <= 0) {
      window.alert("Please enter a valid positive number.");
      return;
    }

    await updateProduct(product.id, { price: parsed });
    pushSystemEvent("ok", `${product.name} price changed to ${formatMoney(parsed)}.`);
    return;
  }

  const restockButton = event.target.closest("button[data-product-restock]");
  if (restockButton) {
    const product = getProduct(restockButton.dataset.productRestock);
    if (!product) return;
    await updateProduct(product.id, { stock: product.stock + 5 });
    pushSystemEvent("ok", `${product.name} restocked by 5 units.`);
  }
});

document.getElementById("exportRange")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-range]");
  if (!button) return;
  state.exportRange = button.dataset.range || "today";
  setChipGroupActive("#exportRange", button);
  renderExportPreview();
});

document.getElementById("exportStatus")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-status]");
  if (!button) return;
  state.exportStatus = button.dataset.status || "all";
  setChipGroupActive("#exportStatus", button);
  renderExportPreview();
});

document.getElementById("stockFilterChips")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-sf]");
  if (!button) return;
  state.stockFilter = button.dataset.sf || "all";
  setChipGroupActive("#stockFilterChips", button);
  renderAdminStock();
});

document.getElementById("traderKeypad")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-key]");
  if (!button) return;
  handlePinInput("trader", "trader-overview", TRADER_PIN, button.dataset.key);
});

document.getElementById("adminKeypad")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-key]");
  if (!button) return;
  handlePinInput("admin", "admin-overview", ADMIN_PIN, button.dataset.key);
});

document.getElementById("traderSignOut")?.addEventListener("click", () => showScreen("landing"));
document.getElementById("adminSignOut")?.addEventListener("click", () => showScreen("landing"));

document.getElementById("smsToggle")?.addEventListener("click", () => {
  state.customer.smsEnabled = !state.customer.smsEnabled;
  pushSystemEvent(
    state.customer.smsEnabled ? "ok" : "warn",
    `SMS notifications turned ${state.customer.smsEnabled ? "on" : "off"}.`
  );
  renderAll();
});

function toggleLanguage() {
  state.customer.locale = state.customer.locale === "rw" ? "en" : "rw";
  renderAll();
}

document.getElementById("langToggle")?.addEventListener("click", toggleLanguage);
document.getElementById("profileLangToggle")?.addEventListener("click", toggleLanguage);

document.getElementById("exportCSV")?.addEventListener("click", exportOrdersAsCsv);
document.getElementById("exportSummary")?.addEventListener("click", exportSummaryReport);
document.getElementById("exportPDF")?.addEventListener("click", exportPrintableReport);

initializeApp();
