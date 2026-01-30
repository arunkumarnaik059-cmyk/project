const repo = require("../repositories/product.repo");

function createProduct(data) {
  return repo.addProduct({
    title: data.title,
    description: data.description,
    rating: data.rating,
    price: data.price,
    mrp: data.mrp,
    stock: data.stock,
    metadata: {}
  });
}

function updateMetadata(productId, metadata) {
  const product = repo.getProduct(productId);
  if (!product) return null;
  product.metadata = { ...product.metadata, ...metadata };
  return product;
}

module.exports = { createProduct, updateMetadata };
