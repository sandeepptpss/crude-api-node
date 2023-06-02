const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;
const express = require('express');     
const server = express();

//bodyParser
server.use(express.json());
               

const auth = (req, res, next) => {
  next()
};


// Products
// API ROOT , base URL, example - google.com/api/v2/

// Create Post /products
server.post('/products',(req,res)=>{
  console.log(req.body);
  products.push(req.body);
  res.json(req.body)
})


// Read GET /products
server.get('/products', (req, res) => {
  res.json(products);
});


// Read GET /products/:id

server.get('/products/:id', (req, res) => {
  const id= +req.params.id;
const product = products.find(p=>p.id===id);
res.json(product);
})


// Update GET /products/:id

server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  products.splice(productIndex,1,{...req.body, id:id})
  res.status(201).json();
});

// Update GET /products/:id
server.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  const product = products[productIndex];
  products.splice(productIndex,1,{...product,...req.body})
  res.status(201).json();
});


server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  const product = products[productIndex];
  products.splice(productIndex,1)
  res.status(201).json(product);
});



server.listen(8000, () => {
  console.log('server started');
});