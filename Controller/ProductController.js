const ProductModel = require('../Model/Querys/ProductModel');
const fs = require('fs');
var path = require('path')

ProductController = {}

ProductController.createProduct = async function (req, res){
    return await ProductModel.createProduct(req, res);
}

ProductController.getProducts = async function (req, res){
    return await ProductModel.getProducts(req, res);
    // console.log(products);
    // return res.status(200).json(products);
}

ProductController.getProduct = async function (req, res){
    return ProductModel.getProduct(req, res);
}

ProductController.updateProduct = async function (req, res){
    return ProductModel.updateProduct(req, res);
}

ProductController.updateImgProduct = async function (req, res){
    return ProductModel.updateImgProduct(req, res);
    
}

ProductController.deleteProduct = async function (req, res){
    return ProductModel.deleteProduct(req, res);
}

module.exports = ProductController;
