const express = require('express');
const Router = express.Router();
const Auth = require('../Controller/AuthController');
const ServerVerify = require('../Controller/ServerVerification');

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

//Router.post('/verification',Auth.sender);
Router.post('/verification', Auth.sendToken);
Router.get('/verification2',ServerVerify.serverListen);


module.exports = Router;