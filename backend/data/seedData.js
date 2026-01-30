const { addProduct } = require("../repositories/product.repo");

function seedProducts() {

  // ---------------- iPhone 11 ----------------
  addProduct({
    title: "iPhone 11 64GB Black",
    description: "iPhone 11 black color with 64GB storage",
    rating: 4.1,
    price: 29999,
    mrp: 49999,
    stock: 25,
    metadata: { model: "iphone 11", storage: "64GB", color: "black", year: 2019 }
  });

  addProduct({
    title: "iPhone 11 128GB White",
    description: "iPhone 11 white color with 128GB storage",
    rating: 4.2,
    price: 34999,
    mrp: 54999,
    stock: 20,
    metadata: { model: "iphone 11", storage: "128GB", color: "white", year: 2019 }
  });

  // ---------------- iPhone 12 ----------------
  addProduct({
    title: "iPhone 12 64GB Blue",
    description: "iPhone 12 blue color with OLED display",
    rating: 4.3,
    price: 39999,
    mrp: 59999,
    stock: 18,
    metadata: { model: "iphone 12", storage: "64GB", color: "blue", year: 2020 }
  });

  addProduct({
    title: "iPhone 12 128GB Red",
    description: "iPhone 12 red color 128GB storage",
    rating: 4.4,
    price: 44999,
    mrp: 64999,
    stock: 15,
    metadata: { model: "iphone 12", storage: "128GB", color: "red", year: 2020 }
  });

  // ---------------- iPhone 13 ----------------
  addProduct({
    title: "iPhone 13 128GB Black",
    description: "iPhone 13 black color with improved battery",
    rating: 4.6,
    price: 54999,
    mrp: 69999,
    stock: 12,
    metadata: { model: "iphone 13", storage: "128GB", color: "black", year: 2021 }
  });

  addProduct({
    title: "iPhone 13 Pro 256GB Gold",
    description: "iPhone 13 Pro gold color with 256GB storage",
    rating: 4.7,
    price: 99999,
    mrp: 119999,
    stock: 6,
    metadata: { model: "iphone 13 pro", storage: "256GB", color: "gold", year: 2021 }
  });

  // ---------------- iPhone 14 ----------------
  addProduct({
    title: "iPhone 14 128GB Purple",
    description: "iPhone 14 purple color with A16 chip",
    rating: 4.5,
    price: 64999,
    mrp: 79999,
    stock: 10,
    metadata: { model: "iphone 14", storage: "128GB", color: "purple", year: 2022 }
  });

  addProduct({
    title: "iPhone 14 Pro 256GB Silver",
    description: "iPhone 14 Pro silver color with dynamic island",
    rating: 4.8,
    price: 119999,
    mrp: 139999,
    stock: 4,
    metadata: { model: "iphone 14 pro", storage: "256GB", color: "silver", year: 2022 }
  });

  // ---------------- iPhone 15 ----------------
  addProduct({
    title: "iPhone 15 128GB Blue",
    description: "iPhone 15 blue color with USB-C",
    rating: 4.6,
    price: 69999,
    mrp: 79999,
    stock: 14,
    metadata: { model: "iphone 15", storage: "128GB", color: "blue", year: 2023 }
  });

  addProduct({
    title: "iPhone 15 Pro Max 256GB Black",
    description: "iPhone 15 Pro Max black color with titanium body",
    rating: 4.9,
    price: 159999,
    mrp: 179999,
    stock: 3,
    metadata: { model: "iphone 15 pro max", storage: "256GB", color: "black", year: 2023 }
  });

  // ---------------- iPhone 16 ----------------
  addProduct({
    title: "iPhone 16 128GB Red",
    description: "Latest iPhone 16 red color with 128GB storage",
    rating: 4.6,
    price: 59999,
    mrp: 69999,
    stock: 20,
    metadata: { model: "iphone 16", storage: "128GB", color: "red", year: 2024 }
  });

  addProduct({
    title: "iPhone 16 Pro 256GB",
    description: "Premium iPhone 16 Pro with high storage",
    rating: 4.8,
    price: 119999,
    mrp: 129999,
    stock: 5,
    metadata: { model: "iphone 16 pro", storage: "256GB", year: 2024 }
  });

  // ---------------- Accessories ----------------
  addProduct({
    title: "iPhone Cover Strong Blue",
    description: "Strong mobile cover for iPhone 16 Pro",
    rating: 4.0,
    price: 999,
    mrp: 1999,
    stock: 100,
    metadata: { category: "accessory", compatible: "iphone 16 pro" }
  });

  addProduct({
    title: "iPhone Fast Charger 20W",
    description: "20W fast charger compatible with all iPhones",
    rating: 4.3,
    price: 1499,
    mrp: 2499,
    stock: 80,
    metadata: { category: "accessory", type: "charger" }
  });
}

module.exports = { seedProducts };
