const express = require('express');

const PostModel = require('../Model/Querys/PostModel');
const MemberModel = require('../Model/Querys/MemberModel');

const SearchController = {};

SearchController.findPost = async (req, res) => {
    return await PostModel.searchPost(req, res);
}

SearchController.findStandardUsers = async (req, res) => {
    // return await MemberModel.returnUsers(req, res);
    const user = await MemberModel.returnUsers(req, res);
    
    res.json(user);
}



module.exports = SearchController;