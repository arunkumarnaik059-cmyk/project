const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/product.routes");
const searchRoutes = require("./routes/search.routes");
const { seedProducts } = require("./data/seedData");
seedProducts();

app.use("/api/v1", productRoutes);
app.use("/api/v1", searchRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
