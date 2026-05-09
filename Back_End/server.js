const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory data store mimicking the frontend data
let products = [
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
  }
];

let orders = [
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
  }
];

// --- PRODUCTS API ---

app.get('/api', (req, res) => {
  res.json({
    name: 'NPC Canteen API',
    endpoints: [
      '/api/products',
      '/api/orders'
    ]
  });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body, id: req.params.id };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// --- ORDERS API ---

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/orders', (req, res) => {
  const newOrder = {
    ...req.body,
    reference: `NPC-${Math.floor(100000 + Math.random() * 900000)}`,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    period: "today"
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

app.put('/api/orders/:reference/status', (req, res) => {
  const { status } = req.body;
  const order = orders.find(o => o.reference === req.params.reference);
  if (order) {
    order.status = status;
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
