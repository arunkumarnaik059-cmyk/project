let products = {};
let currentId = 1;

function addProduct(product) {
  product.productId = currentId++;
  products[product.productId] = product;
  return product.productId;
}

function getProduct(id) {
  return products[id];
}

function getAllProducts() {
  return Object.values(products);
}

module.exports = { addProduct, getProduct, getAllProducts };
