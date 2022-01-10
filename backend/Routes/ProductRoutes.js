//Express
const express = require('express');
const Router = express.Router();
const Product = require('../Controller/ProductController');
const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');
const multer = require('multer');
// const uuid = require('uuid/v4');
const { uuid } = require('uuidv4');
var path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, uuid() + '-' + Date.now() + path.extname(file.originalname))
    }
  })

// const upload = multer({ dest: 'images'});
const upload = multer({ storage: storage});

Router.get('/products',Product.getProducts);
Router.get('/product/:id_producto',Product.getProduct);

Router.post('/add-product',upload.single('img'), Product.createProduct);

Router.post('/upload-img',upload.single('img'),Product.createProduct);

Router.put('/product-img/:id_producto',upload.single('img'), Product.updateImgProduct);
Router.put('/product/:id_producto', Product.updateProduct);

Router.delete('/product');

module.exports = Router;