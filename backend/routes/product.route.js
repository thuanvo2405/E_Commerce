import express from "express";
import {
  getAllProducts,
  getFeaturedProducts,
  deleteProduct,
  createProduct,
  getRecommendedProducts,
  getProductsCategory,
  toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured-product", getFeaturedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);
router.get("/recommendations", getRecommendedProducts);
router.get("/category/:category", getProductsCategory);

export default router;
