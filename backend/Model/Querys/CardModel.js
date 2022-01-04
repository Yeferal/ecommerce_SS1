const Card = require('../Initialization/Card');

async function createCard(req,res){
    return await Card.create({
        id_cuenta: req.user,
        fecha_corte: req.body.fecha_corte,
        codigo_seguridad: req.body.codigo_seguridad,
        no_tarjeta: req.body.tarjeta,
        activa: true   
    })
}

async function deleteCard(req){
    return await Card.update({
        activa: false
    },{
        where: {
            id_cuenta: req.user,
            no_tarjeta: req.params.tarjeta
        }        
    })
}

async function cards(req){
    return await Card.findAll({
        where:{
            id_cuenta: req.user
        }
    })
}

async function existCard(req){
    return await Card.findOne({where:{
        no_tarjeta: req.body.tarjeta,
        id_cuenta: req.user
    }})
}

module.exports = {
    createCard, deleteCard, cards, existCard
}