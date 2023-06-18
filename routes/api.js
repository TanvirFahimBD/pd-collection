const express = require("express");
const ProductController = require("../controller/ProductController");
const router = express.Router();

router.post("/CreateProduct", ProductController.CreateProduct);
router.get("/GetProducts", ProductController.GetProducts);
router.post("/GenerateToken/:id", ProductController.GenerateToken);
router.post("/CreateProduct", ProductController.CreateProduct);

module.exports = router;
