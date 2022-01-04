//Express
const express = require('express');
const Router = express.Router();
const logger = require('../Controller/LoggerController');

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

Router.get('/signup',isNotLoggedIn,logger.signupView);

Router.post('/signup', isNotLoggedIn, logger.signup);

Router.get('/login',isNotLoggedIn,logger.loginView);

Router.post('/login',isNotLoggedIn,logger.login);

Router.get('/profile', isLoggedIn ,logger.profile);

Router.get('/logout',logger.logout);

Router.get('/IsLogged',logger.isLogged);

module.exports = Router;