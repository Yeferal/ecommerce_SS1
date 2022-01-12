//Modelo de la DB
const Product = require('../Initialization/Product');
const { Op } = require("sequelize");
const fs = require('fs');
var path = require('path')

async function createProduct(req, res){
    // console.log(req.file);
    // console.log(req.body);
        return await Product.create({
            nombre: req.body.nombre,
            fecha_creacion: Date.now(),
            descripcion: req.body.descripcion,
            precio_unitario: req.body.precio_unitario,
            estado: req.body.estado,
            // path_img: req.file.path,
            activado: true
        }).then(post => {
            res.status(200).json(post);
        }).catch(err =>{
            res.status(300).json({message: 'No se creo correctamente el producto'});
        });
}

async function getProduct(req, res){
    return await Product.findOne({where:{id_producto: req.params.id_producto}})
    .then(post => {
        res.status(200).json(post);
    }).catch(err =>{
        res.status(300).json({message: 'No se encontro el producto'});
    });
}

async function getProducts(req, res){
    return await Product.findAll({where:{activado: true}}).then(post => {
        res.status(200).json(post);
    }).catch(err =>{
        res.status(300).json({message: 'No se encontraron productos'});
    });
}

async function updateProduct(req, res){
    return await Product.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio_unitario: req.body.precio_unitario,
            estado: req.body.estado
    },
    {
        where: {id_producto: req.params.id_producto}
    }).then(post => {
        res.status(200).json(post);
    }).catch(err =>{
        res.status(300).json({message: 'No se encontraron productos'});
    });
}

async function updateImgProduct(req, res){

    let pro = await Product.findOne({where:{id_producto: req.params.id_producto}})
    // console.log('dsdsds ',pro);
    if(pro.message == undefined){
        try {
            await fs.unlink(path.resolve(pro.path_img), function (err) {
                // if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            });
            
        } catch(err) {
            console.error('Something wrong happened removing the file', err)
        }
    }
    
    return await Product.update({
        path_img: req.file.path
    },
    {
        where: {id_producto: req.params.id_producto}
    }).then(post => {
        res.status(200).json(post);
    }).catch(err =>{
        res.status(300).json({message: 'No se encontro el producto'});
    });
}

async function deleteProduct(req, res){
    return await Product.update({
        activado: false
    },{
        where: {id_producto: req.params.id_producto}
    }).then(post => {
        res.status(200).json(post);
    }).catch(err =>{
        res.status(300).json({message: 'No se eliminio el producto'});
    });
}

// async function getProduct(req, res){}

async function oneProduct(id_producto){
    return await Product.findOne({
        where:{
            activado: true,
            id_producto: id_producto
        }        
    }) 
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    updateImgProduct,
    deleteProduct,
    oneProduct
}