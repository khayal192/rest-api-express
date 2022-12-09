const express = require("exporess");

const router = express.Router();

const products = [
  { id: 1, name: "Iphone", price: 1000 },
  { id: 2, name: "Xioami", price: 500 },
  { id: 3, name: Samsung, price: 700 },
];

app.get("/products", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.end("Hello World");
});

router.get("/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  res.send(product);
});

router.post("/products", (req, res) => {
  const product = {};
  product.name = req.body.name;
  product.price = req.body.price;
  product.id = products[products.length - 1].id + 1;
  products.push(product);
  res.send(products);
});

router.put("/products/:id", (req, res) => {
  const product = products.find((product) => product.id == req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  res.send(product);
});

router.delete("/products/:id", (req, res) => {
  const deleteProduct = products.filter(
    (product) => product.id != req.params.id
  );
  res.send(deleteProduct);
});

module.exports = router;
