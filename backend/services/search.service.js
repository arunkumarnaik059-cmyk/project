const repo = require("../repositories/product.repo");
const { normalize, extractPrice, isCheapIntent } = require("../utils/textUtils");
const { calculateScore } = require("../utils/scoring");

function searchProducts(rawQuery) {
  const normalizedQuery = normalize(rawQuery);
  const priceLimit = extractPrice(normalizedQuery);
  const cheapIntent = isCheapIntent(normalizedQuery);

  return repo.getAllProducts()
    .map(product => {
      const score = calculateScore(
        product,
        normalizedQuery,
        priceLimit,
        cheapIntent
      );
      return { product, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
}



module.exports = { searchProducts };
