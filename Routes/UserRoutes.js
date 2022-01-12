//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn} = require('../Lib/auth');

//Controlador
const AccountController = require('../Controller/AccountController');

// GET

// Router.get('', isLoggedIn);
// POST
// DELETE
// PATCH