const jwt = require('jsonwebtoken');
const Account = require('../Model/Initialization/Account');
const Crypto = require('crypto');
const Token = require('../Model/Querys/Token');
const Sender = require('./SenderEmail');


function randomString(size = 21){
  return Crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size)
}

async function sendToken(req, res){
  console.log("register ,", req.body);
  try {
    let { id_cuenta, username, email } = req.body;
    const verificationToken = await Token.create(id_cuenta, randomString(), new Date(), new Date());
    let jwtTokenVerify = jwt.sign({ email: req.body.email}, 'secret', { expiresIn: "1h"});
    await Sender.sendVerificationEmail(req.body.email, verificationToken.dataValues.token, jwtTokenVerify);


    return res.status(200).json('Te has registrado de forma exitosa, el link de activacion ha sido enviado a: '+email);

  } catch(err) {
    console.log("err1", err);
    return res.status(500);
  }
}

module.exports = {
  sendToken
}