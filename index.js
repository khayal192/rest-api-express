const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

const port = 8000;
const host = "localhost";

app.use(express.json());

app.use(productRoutes);

app.listen(port, host, () => {
  console.log("App is ranning");
});
