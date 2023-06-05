const fs = require('fs');

//Create POST /products     C R U D
//////////////////////////////////////////////////////
const model = require('../model/product');
const Product = model.Product;

exports.createProduct = async (req, res) => {
  const product = await Product(req.body);
  // product.save();
  product.save((err,doc)=>{
    consolelog((err,doc));
    if(err){
     res.status(400).json(err);

    }else{
      res.status(201).json(err);
    }
  })
};


// Read GET /products
exports.getAllProduct = (req, res) => {
  const product = new Product(req.body);
  res.json();
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