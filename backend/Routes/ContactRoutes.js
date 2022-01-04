const express = require('express');
const Router = express.Router();
const Contact = require('../Controller/ContactController');
 
const { isLoggedIn, isNotLoggedIn } = require('../Lib/auth');

Router.post('/createContact', Contact.createContact);
Router.post('/getContacts', Contact.getContacts);

module.exports = Router;