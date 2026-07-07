import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ---------- Routes ----------
app.use("/api/products", productRoutes);

// ---------- Health Check ----------
app.get("/", (req, res) => {
  res.json({ message: "🚀 CodeVector API is running" });
});

// ---------- 404 Handler ----------
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ---------- Global Error Handler ----------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: err.message || "Internal Server Error" });
});

export default app;
