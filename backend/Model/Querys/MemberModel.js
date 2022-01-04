const Membership = require('../Initialization/Membership');
const { Op, DataTypes } =require('sequelize');
const Account = require('../Initialization/Account');
const Standard = require('../Initialization/StandardAccount');
const Post = require('../Initialization/Post');
const BusinessAccount = require('../Initialization/BusinessAccount');

async function searchUsers(){
    return await Account.findAll({
        include: {
            model: Standard
        }
    })
}

async function searchMyAffilities(req, res){
    return await Membership.findAll({
        where: {
            id_cuenta_empresarial: req.body.id_cuenta_empresarial
        },
        include: {
            model: Standard,
            include: {
                model:Account
            }
        }
    })    
}




const returnAffilites = async(req, res) => {
    try {
        const Affiliate = await searchMyAffilities(req, res);
        return res.status(200).json({Affiliate});
    } catch(error){
        return res.status(500).send(error.message);
    } 
}

const returnUsers = async (req, res) => {
    try {
        // const Users = await searchUsers();
        // return res.status(200).json({Users});
        return await searchUsers();
    } catch(error){
        return res.status(500).send(error.message);
    }
}

async function createMember(req, res)  {
    const exist = await Membership.findOne({
        where: {
            id_cuenta_empresarial: req.body.id_cuenta_empresarial,
            id_usuario: req.body.id_usuario,
            fecha_cierre: {
                [Op.eq]: null
            }
        }
    })
    if(exist != null){
        console.log('Este usuario actualmente esta afiliado a esta cuenta');
        res.json({menssage: 'Este usuario actualmente esta afiliado a esta  cuenta'});
    } else {
        await Membership.create({
            id_cuenta_empresarial: req.body.id_cuenta_empresarial,
            id_usuario: req.body.id_usuario,
            fecha_afiliacion: Date.now(),
            fecha_cierre: null
        }).then(post => {
            res.json(post);
        })
    }   
} 

//Elimina un afiliado de mi lista de afiliados
async function deleteAffiliate(req, res){
    try {
        Membership.destroy({
            where: {
                id_cuenta_empresarial: req.body.id_cuenta_empresarial,
                id_usuario: req.body.id_usuario
            }
        }).then(post => {
            return res.status(200).json({ mensaje: "Afiliado eliminado con exito" });
        })
    } catch(error){
        return res.status(500).send(error.message);
    }
}
/*
//Query para ver los no afiliados de una empresa
async function getNoAffiliates(req, res){
    return await Account.findAll({
        where: {
            id_cuenta: {
                [Op.ne]: req.body.id_cuenta
            }
        },
        include: {
            model: Standard,
            include: {
                model: Membership,
                where: {
                    id_cuenta_empresarial: {
                        [Op.ne]: req.body.id_cuenta_empresarial
                    },
                    id_usuario: {
                        []
                    }
                },
            }
        }
    }) 
}
*/

const returnNoAffiliates = async (req, res) => {
    try {
        return await getNoAffiliates(req, res);
    } catch(error){
        return res.status(500).send(error.message);
    }
}


module.exports = {
    searchUsers, returnUsers, createMember, returnAffilites, deleteAffiliate, returnAffilites, returnNoAffiliates

}