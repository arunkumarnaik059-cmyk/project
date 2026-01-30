const service = require("../services/product.service");

exports.addProduct = (req, res) => {
  const id = service.createProduct(req.body);
  res.json({ productId: id });
};

exports.updateMetadata = (req, res) => {
  const product = service.updateMetadata(req.body.productId, req.body.Metadata);
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
};
