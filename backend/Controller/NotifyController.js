const express = require('express');
const NotifyModel = require('../Model/Querys/NotifyModel');

const NotifyController = {};
/*
NotifyController.createNotify = async(req, res) => {
    return await NotifyModel.createNotification(req, res);
}*/

NotifyController.findNotifications = async(req,res) => {
    // console.log('entro 1');
    return await NotifyModel.returnNotifications(req, res);
}

NotifyController.updateViewNotify = async(req, res) => {
    console.log('entro');
    return await NotifyModel.updateViewNotifications(req, res);
}

NotifyController.findAllNotifications = async(req, res) => {
    return await NotifyModel.returnAllNotifications(req, res);
}

module.exports = NotifyController;