const express = require('express');
const Router = express.Router();
const Member = require('../Controller/MemberController');

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

//Router.post('/createMember', Member.createMember);
//Router.post('/findAffiliates', Member.findAffiliates);
//Router.get('/findAffiliates2', Member.findAffiliates);


module.exports = Router;