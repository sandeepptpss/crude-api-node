const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

//Create POST /products     C R U D
//////////////////////////////////////////////////////
exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
};


// Read GET /products
exports.getAllProduct = (req, res) => {
  res.json(products);
};

// Read GET /products/:id

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};


// Update PUT /products/:id
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 2, { ...req.body, id: id });
  res.status(201).json();
};

// Update PATCH /products/:id
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 2, { ...product, ...req.body });
  res.status(201).json();
};
// Delete DELETE /products/:id

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 2);
  res.status(201).json(product);
};