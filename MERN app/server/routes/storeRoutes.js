const express = require("express");
const store = express.Router();
const {
  getProducts,
  getProduct,
  addNewProduct,
  deleteProduct,
  updateProduct
} = require("../functions/routeFunctions");

store.get(`/`, getProducts);
store.get(`/product-details/:id`, getProduct);
store.post(`/add-new-product`, addNewProduct);
store.patch(`/product-details/:id`, updateProduct)  
store.delete(`/product-details/:id`, deleteProduct);

module.exports = store;
