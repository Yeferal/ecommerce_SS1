const express = require('express');
const Router = express.Router();
const socketChat = require('../Controller/Socket');

const { isLoggedIn, isNotLoggedIn } = require('../Lib/auth');


//Router.post('/chat',);

module.exports = Router;