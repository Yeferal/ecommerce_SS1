const Conversation = require('../Initialization/Conversation');
const { Op } = require('sequelize');
const Account = require('../Initialization/Account');

async function create(cuenta_uno, cuenta_dos, anonimo){
    Conversation.create({
        cuenta_uno: cuenta_uno,
        cuenta_dos: cuenta_dos,
        anonimo: anonimo
    })/*.then(Conversation => {
        res.json(Conversation);
    })*/
}

function searchByPK(req, res){
    Conversation.findByPk(req.body.id).then(Conversation => {
        res.json(Conversation);
    })
}

//Query para encontrar el id de un usuario
async function searchUserId(usuario){
    return await Account.findOne({
        where: {
            user: usuario
        }
    });
}

//Query que devuelve si existe una conversacion con los parametros especificos
async function search(emisor, receptor){
    exist1 = await searchUserId(emisor);
    exist2 = await searchUserId(receptor);
    return await Conversation.count({
        where: {
            [Op.or]: [ {
                [Op.and]: [
                    { cuenta_uno: exist1.id_cuenta },
                    { cuenta_dos: exist2.id_cuenta }
                ]
            }, {
                [Op.and]: [
                    { cuenta_uno: exist2.id_cuenta },
                    { cuenta_dos: exist1.id_cuenta }
                ]
           }
        ]}
    });    
}

//Query que devuelve los datos de una conversacion especifica
async function searchAndGive(emisor, receptor){
    exist1 = await searchUserId(emisor);
    exist2 = await searchUserId(receptor);
    return await Conversation.findOne({
        where: {
            [Op.or]: [ {
                [Op.and]: [
                    { cuenta_uno: exist1.id_cuenta },
                    { cuenta_dos: exist2.id_cuenta }
                ]
            }, {
                [Op.and]: [
                    { cuenta_uno: exist2.id_cuenta },
                    { cuenta_dos: exist1.id_cuenta }
                ]
           }
        ]}
    });    
}

//Query que devuelve los datos de una conversacion especifica
async function comprobateAnonymous(emisor, receptor, anonymous){
    exist1 = await searchUserId(emisor);
    exist2 = await searchUserId(receptor);
    return await Conversation.findOne({
        where: {
            [Op.or]: [ {
                [Op.and]: [
                    { cuenta_uno: exist1.id_cuenta },
                    { cuenta_dos: exist2.id_cuenta },
                    { anonimo: anonymous }
                ]
            }, {
                [Op.and]: [
                    { cuenta_uno: exist2.id_cuenta },
                    { cuenta_dos: exist1.id_cuenta },
                    { anonimo: anonymous }
                ]
           }
        ]}
    });    
}



function simpleUpdate(){

}

module.exports = {
    searchUserId, create, searchByPK, search, simpleUpdate, searchAndGive, comprobateAnonymous
}