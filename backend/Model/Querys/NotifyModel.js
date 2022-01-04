const Account = require('../Initialization/Account');
const Notifications = require('../Initialization/Notifications');


async function searchMyNotifications(req, res){
    return await Notifications.findAll({
        where: {
            usuario_recibe: req.body.usuario_recibe,
            leido: false
        },
        include: {
            model: Account
        }

    
    })
}

async function searchAllNotifications(req, res){
    return await Notifications.findAll({
        where: {
            usuario_recibe: req.body.usuario_recibe
        },
        include: {
            model: Account
        }
    })
}

const returnNotifications = async(req,res) => {
    try {
        const Notify = await searchMyNotifications(req, res);
        return res.status(200).json({Notify});
    } catch(error){
        res.status(500).json(error.message);
    }
}

const returnAllNotifications = async(req, res) => {
    try {
        const Notify = await searchAllNotifications(req, res);
        return res.status(200).json({ Notify });
    } catch(error){
        res.status(500).json(error.message);
    }
}


async function createNotification(userSend, userReceive, type, description){
    await Notifications.create({
        usuario_recibe: userReceive,
        usuario_envia: userSend,
        tipo: type,
        descripcion: description,
        leido: false
    })
}

async function updateViewNotifications(req, res){
    console.log(req.body.id)
    await Notifications.update({
        leido: true
    } , {
        where: {
            usuario_recibe: req.body.id
        }
    }).then(post => {
        console.log(post);
        res.json(post);
    })
}

module.exports = {
    createNotification, returnNotifications, updateViewNotifications,returnAllNotifications
}