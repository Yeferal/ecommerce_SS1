//expres
const express = require('express');
//db
const Post = require('../Model/Querys/PostModel');
const TransactionModel = require('../Model/Querys/BuyModel');
const BuyModel = require('../Model/Querys/BuyModel');
const WalletModel = require('../Model/Querys/WalletModel');
const PostModel = require('../Model/Querys/PostModel');
const ShopController = {};

ShopController.createCart = (req, res, next) => {
    if (req.session.cart != undefined) {
        //Nada :D
    } else {
        req.session.cart = []
    }
    next();
}

ShopController.addPost = async (req, res) => {
    const existe = existPost(req, res);
    if (!existe) {
        const post = await Post.onePost(req.body.id);

        req.session.cart.push({
            "id": req.body.id,
            "cantidad": req.body.cantidad,
            "divisa": post.divisa,
            "precio": post.costo
        });
    }
    res.status(200).json({message: "AddPost"});
}

ShopController.getAll = (req, res) => {
    //for modificado
    res.json(req.session.cart);
}


ShopController.deleteAll = (req,res)=>{
    req.session.cart = [];
    res.status(200).json({message: "Clean Cart"});
}

ShopController.deletePost = (req,res)=>{
    req.session.cart.forEach((cart, index, object)=>{
        if(cart.id == req.params.id){
            object.splice(index,1);
        }
    })
    res.status(200).json({message: "Delete Cart"});
}

ShopController.updateCart = (req, res) => {
    req.session.cart.forEach(cart => {
        if (cart.id == req.body.id) {
            cart.cantidad = req.body.cantidad;
        }
    });
    res.send("A")
}

function existPost(req, res) {
    existe = false;
    req.session.cart.forEach(cart => {
        if (cart.id == req.body.id) {
            cart.cantidad += req.body.cantidad;
            existe = true;
        }
    });
    return existe;
}

ShopController.buy = async (req, res) => {
    totalV = total(req);
    const stock = await ff(req,res);
    const wallet = await WalletModel.existWallet(req.user, req.session.cart[0].divisa);    
    console.log("el valor es: ", wallet );
    if (wallet.monto >= totalV && stock) {
        await BuyModel.buy(req,res,totalV);
        // req.session.cart = [];
        res.json({message: "Compra Existosa"});
    } else {
        res.json({message: "error no cuenta con suficiente dinero en su cuenta"});
    }
}
ShopController.totalCart  = async (req,res) =>{
    totalV = total(req);
    res.status(200).json(totalV);
}



async function ff(req,res){
    await req.session.cart.forEach(async(cart)=>{
        const post = await PostModel.onePostArticle(cart.id);        
        if(post.Article.dataValues.stock < cart.cantidad){
            return false;
        }
    });
    return true;
}

ShopController.totalCart  = async (req,res) =>{
    totalV = total(req);
    res.status(200).json(totalV);
}

ShopController.getVentas = async (req,res)=>{
    const ventas = await BuyModel.reporteVentas(req,res);
    res.json(ventas);
}

ShopController.getCompras = async (req,res)=>{
    const compras = await BuyModel.reporteCompras(req,res);
    res.json(compras);
}

function total(req) {
    totalV = 0
    req.session.cart.forEach(cart => {
        cart.total = cart.precio * cart.cantidad;
        totalV += cart.total;
    });
    return totalV;
}

module.exports = ShopController;