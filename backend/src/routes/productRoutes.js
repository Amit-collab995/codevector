import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// GET  /api/products       - Get all products (supports ?category=&minPrice=&maxPrice=&search=&page=&limit=)
router.get("/", getProducts);

// POST /api/products       - Create a product
router.post("/", createProduct);

// GET  /api/products/:id   - Get single product by ID
router.get("/:id", getProductById);

// PUT  /api/products/:id   - Update a product
router.put("/:id", updateProduct);

// DELETE /api/products/:id - Delete a product
router.delete("/:id", deleteProduct);

export default router;
