//DB
const Service = require('../Initialization/Service');

async function createService(req,res, id){
    return await Service.create({
        id_post: id,
        tipo_servicio: req.body.tipo_servicio        
    })   
}

async function updateService(req, res){
    return await Post.update({
        tipo_servicio: req.body.tipo_servicio
    },{
        where:{
            id_post: req.body.id_post
        }
    })
}

module.exports = {
    createService, updateService
}