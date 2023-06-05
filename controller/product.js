const fs = require('fs');

//Create POST /products C R U D
//////////////////////////////////////////////////////
const model = require('../model/product');
const mongoose = require('mongoose');
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
exports.getAllProduct =async  (req, res) => {

  const products = await Product.find();

  res.json(products);
};
// Read GET /products/:id

exports.getProduct =async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

// Update PUT /products/:id
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
// Update PATCH /products/:id
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
// Delete DELETE /products/:id
  exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const deleteData = await Product.findOneAndDelete({_id:id});
    res.status(201).json(deleteData);
  }
  catch(err){
    res.status(400).json(err);
  }
    // const doc = await Product.findOneAndDelete({_id:id})
};