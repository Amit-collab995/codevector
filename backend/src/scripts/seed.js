import "dotenv/config";
import { faker } from "@faker-js/faker";
import connectDB from "../config/db.js";
import Product from "../models/Product.js";

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
  "Toys",
  "Beauty",
  "Automotive",
];

const generateProducts = (count = 200000) => {
  return Array.from({ length: count }, () => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price({ min: 5, max: 500 })),
    category: faker.helpers.arrayElement(categories),
    stock: faker.number.int({ min: 0, max: 200 }),
    image: faker.image.url({ width: 400, height: 400 }),
  }));
};

const seedDB = async () => {
  try {
    await connectDB();

    console.log("🗑️  Clearing existing products...");
    await Product.deleteMany({});

    const products = generateProducts(200000);
    console.log(`🌱 Seeding ${products.length} products...`);
    await Product.insertMany(products);

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDB();
