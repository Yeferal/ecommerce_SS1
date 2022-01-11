//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');


module.exports = Router;