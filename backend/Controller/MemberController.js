const express = require('express');

const MemberModel = require('../Model/Querys/MemberModel');

const MemberController = {};

MemberController.createMember = async(req, res) => {
    return await MemberModel.createMember(req, res);
}

MemberController.findAffiliates = async(req, res) => {
//    return await MemberModel.returnAffilites(req, res);
    return await MemberModel.returnAffilites(req, res);
}

MemberController.deleteAffiliate = async(req, res) => {
    return await MemberModel.deleteAffiliate(req, res);
}

MemberController.returnNoAffiliates = async(req, res) => {
    const user = await MemberModel.returnNoAffiliates(req, res);
    res.json(user);
}


module.exports = MemberController;