//expres
const express = require('express');
//db
const Product = require('../Model/Querys/ProductModel')
const ShopController = {};

ShopController.createCart = (req, res, next) => {
    if (req.session.cart != undefined) {
        //Nada :D
    } else {
        req.session.cart = []
    }
    next();
}

ShopController.addProduct = async (req, res) => {
    const existe = existProduct(req, res);
    if (!existe) {
        const pro = await Product.oneProduct(req.body.id_producto);

        req.session.cart.push({
            "id_producto": req.body.id_producto,
            "cantidad": req.body.cantidad,
            "precio": pro.precio_unitario
        });
    }
    res.status(200).json({message: "AddProduct"});
}

ShopController.deletePost = (req,res)=>{
    req.session.cart.forEach((cart, index, object)=>{
        if(cart.id_producto == req.params.id){
            object.splice(index,1);
        }
    })
    res.status(200).json({message: "Delete Cart"});
}

ShopController.getAll = (req, res) => {
    res.json(req.session.cart);
}

ShopController.deleteAll = (req,res)=>{
    req.session.cart = [];
    res.status(200).json({message: "Clean Cart"});
}

ShopController.updateCart = (req, res) => {
    // console.log('Ssssssssssss',req.body);
    req.session.cart.forEach(cart => {
        console.log(cart);
        if (cart.id_producto == req.body.id) {
            // console.log('Ddio');
            cart.cantidad = req.body.cantidad;
        }
    });
    res.status(200).json({message: "UpdateProduct"});
}

ShopController.totalCart  = async (req,res) =>{
    totalV = total(req);
    res.status(200).json(totalV);
}

function total(req) {
    totalV = 0
    req.session.cart.forEach(cart => {
        cart.total = cart.precio * cart.cantidad;
        totalV += cart.total;
    });
    return totalV;
}

function existProduct(req, res) {
    existe = false;
    req.session.cart.forEach(cart => {
        if (cart.id_producto == req.body.id_producto) {
            cart.cantidad += req.body.cantidad;
            existe = true;
        }
    });
    return existe;
}
module.exports = ShopController;