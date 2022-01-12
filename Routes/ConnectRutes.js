const express = require('express');
const Router = express.Router();

Router.get('/connect',(req, res) =>{
    res.send(true);
});

module.exports = Router;