const AccountModel = require('../Model/Querys/AccountModel');
const UserModel = require('../Model/Querys/UserModel');

const AccountController = {};

AccountController.createUser = async function(req){    
    await UserModel.createUser(req);        
}

AccountController.readUser = async (req,res)=>{
    const User = await AccountModel. readUserInformation(req);
    console.log(User);
    res.json(User); /*  
    const User = await AccountModel.readUserLoggedInformation(req);    
    res.json(User);*/
}

module.exports = AccountController;
