//Express
const express = require('express');
const Router = express.Router();


const SearchController = require('../Controller/SearchController');
const Member = require('../Controller/MemberController');
const Post = require('../Controller/PostController');
const Contact = require('../Controller/ContactController');
const Notify = require('../Controller/NotifyController');

const WalletController = require('../Controller/WalletController');

const {isLoggedIn} = require('../Lib/auth');

const SimulationBank = require('../Controller/SimulatorBank');

//Controlador
const AccountController = require('../Controller/AccountController');

//READ

Router.post('/unitUser', AccountController.getUnitUser);
Router.get('/logged', isLoggedIn,AccountController.readUser);

Router.post('/unitUser', AccountController.getUnitUser);



Router.get('/oneUser',AccountController.oneUser);

Router.get('/allUsers', AccountController.allUser);
Router.get('/allUsersProf', AccountController.allUsersProf);

Router.get('/user/:id',isLoggedIn,AccountController.oneUser);

//UPDATE STANDARD
Router.patch('/user/standard', AccountController.updateUserStandard);

//UPDATE BUSINESS
Router.patch('/user/business', AccountController.updateUserBusiness);

//DELETE
Router.delete('/user', isLoggedIn,AccountController.deleteUser);

//RUTAS MemberRoutes
Router.post('/findAffiliates', Member.findAffiliates);
Router.post('/createMember', Member.createMember);

//RUTAS SearchRoutes
Router.get('/searchStandard', SearchController.findStandardUsers);
Router.get('/search',SearchController.findPost);


//Rutas BusinessRoutes
Router.post('/getIdBusiness', AccountController.getIdBusiness);

//Rutas postRoutes
Router.post('/getMyArticles', Post.getMyArticles);
Router.post('/getMyServices', Post.getMyServices);

//Rutas contact
Router.post('/deleteContact', Contact.deleteContact);

//Rutas afiliacion
Router.post('/getNoAffiliates', Member.returnNoAffiliates);
Router.post('/deleteAffiliate', Member.deleteAffiliate);


//Rutas notificaciones
Router.post('/notify', Notify.findNotifications);
Router.post('/allNotify', Notify.findAllNotifications);
Router.get('/myWallet', isLoggedIn, WalletController.getWallet);

//Rutas notificaciones
Router.post('/notify', Notify.findNotifications);
Router.post('/allNotify', Notify.findAllNotifications);

module.exports = Router;