const express = require('express');
// const { where } = require('sequelize/types');

const Auto = require('../Model/Initialization/Auto');


const AutoController = {}

AutoController.isExiste = async (req, res, next) => {
    resultado = await Auto.findOne({where: {id: 1}});
    if (resultado) {
        console.log(resultado);
        return res.status(200).json(resultado.auto);
    } else {
        console.log('No habia',resultado);
        return next();
    }
}

AutoController.createAuto = async (req, res) => {
    resul = await Auto.create({
        auto: false
    });
    return res.status(200).json(resul.auto);
}

AutoController.updateAuto = async (req, res) => {
    console.log(req.body);
    resulq = await Auto.update({
        auto: req.body.auto
    },{
        where: {id: 1}
    });
    return res.status(200).json(resulq);
}

module.exports = AutoController;