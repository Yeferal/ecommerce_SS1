const express = require('express');

const passport = require('passport');
const AccountModel = new require('../Model/Querys/AccountModel');

const LoggerController = {};


LoggerController.signup = (req,res,next) => {
    console.log('da ',req.user);
    passport.authenticate('local.signup', function(err, user, info) {
      if (err) { return res.status(501).json(err); }
      // console.log('sss ',req.user);
      if (!user) { 
        // console.log('asdfa');  
        return res.status(200).json({message:'Ya existe un usuario con el mismo DPI'}); }
      req.logIn(user, function(err) {
        if (err) { return res.status(501).json(err); }
        console.log('registro');
        return res.status(200).json({message:'SE REGISTRO', result: true});
      });
    })(req, res, next);
}

LoggerController.login = (req,res,next) => {
    // console.log(req.body);
    passport.authenticate('local.login', function(err, user, info) {
      if (err) { return res.status(501).json({message:'Error: Intente mas Tarde', error: err}); }
    //   console.log(req.user);
      if (!user) { return res.status(501).json({message:'El DPI o Password son incorrectos', error: err}); }
      req.logIn(user, function(err) {
        if (err) { return res.status(501).json({message:'Error: Intente mas Tarde', error: err}); }
        // console.log(req);
        return res.status(200).json({message:'SE LOGUEO'});
      });
    })(req, res, next);
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