const express = require("express");
const {
  getAllProducts,
  getProductDetailsById,
} = require("../../controller/productController");
const productRoute = express.Router();

productRoute.get("/", getAllProducts);
productRoute.get("/:id", getProductDetailsById);

module.exports = productRoute;
