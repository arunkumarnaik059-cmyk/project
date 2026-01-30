const service = require("../services/search.service");

exports.search = (req, res) => {
  const data = service.searchProducts(req.query.query);
  res.json({ data });
};
