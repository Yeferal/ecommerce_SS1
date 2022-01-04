const Message = require('../Initialization/Message');
const Account = require('../Initialization/Account');

//Account.belongsTo(Message);
async function createInSocket(conversacion, mensaje, cuenta_emisora, cuenta_receptora, fecha){
    Message.create({
        id_conversacion: conversacion,
        mensaje: mensaje,
        cuenta_emisora: cuenta_emisora,
        cuenta_receptora: cuenta_receptora,
        fecha: fecha
    })
}

function createMessage(req, res){
    Message.create({
        id_conversacion: req.body.id_conversacion,
        mensaje: req.body.mensaje,
        fecha: req.body.fecha
    }).then(Message => {
        res.json(Message);
    })
}

function searchMessageByPK(req, res){
    Message.findByPk(req.body.id).then(Message => {
        res.json(Message);
    })
}

async function searchConversation(idConv){
    return await Message.findAll({
        where: {
            id_conversacion: idConv
        }
    });
}



module.exports = {
    createMessage, searchMessageByPK, createInSocket, searchConversation
}

//Borrar y actualizar para despues.
