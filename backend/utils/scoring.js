function calculateScore(product, normalizedQuery, priceLimit, cheapIntent) {
  let score = 0;

  const title = product.title.toLowerCase();
  const description = product.description.toLowerCase();
  const tokens = normalizedQuery.split(" ");

  // 🔥 TOKEN-BASED MATCHING (KEY FIX)
  tokens.forEach(token => {
    if (title.includes(token)) score += 15;
    if (description.includes(token)) score += 10;
  });

  if (product.stock > 0) score += 10;

  if (cheapIntent) {
    score += Math.max(0, 100000 - product.price) / 1000;
    if (product.price > 60000) score -= 20;
  } else {
    score += product.rating * 5;
  }

  if (priceLimit && product.price > priceLimit) {
    return -1;
  }

  return score;
}

module.exports = { calculateScore };
