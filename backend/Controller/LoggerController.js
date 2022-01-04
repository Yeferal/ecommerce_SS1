const express = require('express');

const passport = require('passport');
const AccountModel = new require('../Model/Querys/AccountModel');

const LoggerController = {};

LoggerController.signupView = (req, res) =>{
    res.send("Redireccionar vista signup");
}

// LoggerController.signup = passport.authenticate('local.signup',{
//         successRedirect: '/profile',
//         failureRedirect: '/signup',                
// });    

LoggerController.signup = (req,res,next) => {
    // console.log(req.body);
    passport.authenticate('local.signup', function(err, user, info) {
      if (err) { return res.status(501).json(err); }
      console.log(req.user);
      if (!user) { return res.status(501).json(info); }
      req.logIn(user, function(err) {
        if (err) { return res.status(501).json(err); }
        // console.log(get('/profile'));
        return res.status(200).json({message:'SE REGISTRO'});
      });
    })(req, res, next);
}


LoggerController.loginView = (req, res) =>{
    res.status(200).json({redirect:'/login', message: "No esta logueado"});
}
    
// LoggerController.login = (req, res) => passport.authenticate('local.login', (err, user, info) => {
//     if (err) { return res.status(501).json(err); }
//     if (!user) { return res.status(501).json(info); }
//     req.logIn(user, function(err) {
//       if (err) { return res.status(501).json(err); }
//       return res.status(200).json({message:'Login Success'});
//     });
//     //console.log(info);
//     //return res.status(200).json({message:'Login Success'});
//   });

LoggerController.login = (req,res,next) => {
    // console.log(req.body);
    passport.authenticate('local.login', function(err, user, info) {
      if (err) { return res.status(501).json(err); }
    //   console.log(req.user);
      if (!user) { return res.status(501).json(info); }
      req.logIn(user, function(err) {
        if (err) { return res.status(501).json(err); }
        // console.log(req);
        return res.status(200).json({message:'SE LOGUEO'});
      });
    })(req, res, next);
}   

// LoggerController.login = passport.authenticate('local.login',{
//     successMessage: 'true'
// //     failureRedirect: '/signup',
//     // res.send(JSON.parse(nname:"Redirecciona vista login"));
// })

// LoggerController.login = passport.authenticate('local.login',{
    
//     // successRedirect: '/profile',
//     // failureRedirect: '/signup',
// })

LoggerController.profile = (req, res) =>{    
    res.send("Este es el perfil");
}

LoggerController.logout = (req, res) =>{
    req.logOut();
    req.session.cart = [];
    res.status(200).json({message:'Redirecciona a login'});
}

LoggerController.isLogged = (req, res) => {
  if(req.isAuthenticated()){
      res.send(true);
  }else{
      res.send(false);
  }
}

module.exports = LoggerController;