const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password,salt);
    return newPassword;
}

helpers.matchPassword = async (password, dataPassword) =>{
    try{
        return await bcrypt.compare(password, dataPassword);
    }catch(e){
        console.log(e);
    }
}

module.exports = helpers;