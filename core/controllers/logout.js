exports.logout = logout;
const userSchema = require('../Schemas/user');
const crypto = require('crypto')
const logoutModel = require('../models/logout.js');

function logout(req,res){
    logoutModel.logout(req,res)  
}