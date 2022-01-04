const Account = require('../Model/Initialization/Account');
const Token = require('../Model/Initialization/VerificationToken');

async function serverListen(req, res) {
    try {
        const { email, token } = req.query;
        const foundUser = await Account.findOne({ where: { correo: email}});
        if(foundUser.dataValues.verificado) {
            return res.status(200).json({msj:'Este correo ya ha sido activado previamente'})
        } else {
            const foundToken = await Token.findOne({ where: { token: token }});
            if(foundToken){
                await Account.update(
                    { verificado: true },
                    { returning: true, where: { correo: email }});
                return res.status(200).json({msj:'La cuenta con correo '+email+" ha sido verificada con exito"})
            } else {
                return res.status(404).json({msj:'Token expirado'});
            }
        }
    } catch(err){
        return res.status(404).json({msj:'Email not found'});
    }
}

module.exports = {
    serverListen
}