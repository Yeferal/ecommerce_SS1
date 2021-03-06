//Express
const express = require('express');
const Router = express.Router();
const logger = require('../Controller/LoggerController');
const AccountController = require('../Controller/AccountController');

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

// GET
// Router.get('/profile', isLoggedIn ,logger.profile);

Router.get('/logout',logger.logout);

Router.get('/IsLogged',logger.isLogged);

Router.get('/logged', isLoggedIn,AccountController.readUser);

// // POST
Router.post('/login',isNotLoggedIn,logger.login);

Router.post('/signup', isNotLoggedIn, logger.signup);

// DELETE

// PATCH

module.exports = Router;