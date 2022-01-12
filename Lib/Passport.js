const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const crypt = require('./Helpers');
const Account = require('../Model/Querys/AccountModel');
const AccountModel = require('../Model/Initialization/Account');
const AccountController = require('../Controller/AccountController');

passport.use('local.signup',new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
},async (req, user, password, done) => {
    pass = await crypt.encryptPassword(password);
    const usuario = await AccountModel.findOne({where:{user:user}});
    if(usuario == undefined){
        const usr = await Account.createAccountLogger(req, pass); 
        await AccountController.createUser(req);
        return done(null,usr.id_cuenta);
    }else{
        return done(null, false);
    }   
}))


passport.use('local.login', new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
},async (req, user, password, done) => {
    console.log('user:',user);
    // console.log('pass:',password);
    const usuario = await AccountModel.findOne({where:{id_cuenta: user}});    
    console.log('Usuario:\n',usuario);
    if(usuario != undefined){        
        if(usuario.activa){
            const match = await crypt.matchPassword(password, usuario.password);        
            if(match){
                return done(null, usuario.id_cuenta);
            }else{
                return done(null, false);
            }
        }else{
            return done(null, false); 
        }    
    }else{
        return done(null, false); 
    }
}))

passport.serializeUser((usr, done)=>{
    return done(null,usr);
})


passport.deserializeUser(async (usr,done)=>{
      const usuario = await AccountModel.findOne({where:{id_cuenta: usr}});
      console.log(usr,'asdfa ',usuario);
      return done(null,usuario.id_cuenta);
})