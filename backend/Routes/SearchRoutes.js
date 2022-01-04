const express = require('express');
const Router = express.Router();
const SearchController = require('../Controller/SearchController');

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

//Router.get('/search',SearchController.findPost);
//Router.get('/searchStandard', SearchController.findStandardUsers);



module.exports = Router;