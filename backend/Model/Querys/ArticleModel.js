    //DB
const Article = require('../Initialization/Article');

async function createArticle(req,res, id){
    return await Article.create({
        id_post: id,
        stock: req.body.stock,
        minimo_stock: req.body.minimo_stock
    })   
}

async function updateArticle(req, res, id){
    return await Article.update({
        stock: req.body.stock,
        minimo_stock: req.body.minimo_stock
    },{
        where:{
            id_post: id            
        }
    })
}

async function updateStock(req, res, id){
    return await Article.update({
        stock: req.body.stock        
    },{
        where:{
            id_post: id
        }
    })
}

module.exports = {
    createArticle, updateArticle, updateStock
}