const express = require("express");
const ProductController = require("../controller/ProductController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const router = express.Router();

router.post("/CreateProduct", ProductController.CreateProduct);
router.get("/GetProducts", ProductController.GetProducts);
router.post("/GenerateToken/:id", ProductController.GenerateToken);
router.post(
  "/UpdateProduct/:id",
  AuthVerifyMiddleware,
  ProductController.UpdateProduct
);

module.exports = router;
