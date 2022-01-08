const AccountModel = require('../Model/Querys/AccountModel');
const UserModel = require('../Model/Querys/UserModel');

const AccountController = {};

AccountController.createUser = async function(req){    
    await UserModel.createUser(req);        
}

module.exports = AccountController;
