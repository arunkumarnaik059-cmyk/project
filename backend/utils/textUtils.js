function normalize(text) {
  return text
    .toLowerCase()
    .replace("ifone", "iphone")
    .replace("sasta", "cheap");
}

function extractPrice(query) {
  const match = query.match(/\d+/);
  const num = match ? parseInt(match[0]) : null;
  return num && num >= 1000 ? num : null;
}

function isCheapIntent(query) {
  return query.includes("cheap");
}

function tokenize(query) {
  return query.split(" ").filter(Boolean);
}

module.exports = { normalize, extractPrice, isCheapIntent, tokenize };
