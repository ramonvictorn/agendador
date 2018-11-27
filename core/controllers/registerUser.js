const registerUserModel = require('../models/registerUser.js');

exports.register = register;

function register(req,res){
    console.log('controllersPost --> function user/register  ')
    if(!verifyParams(req.body)) return res.status(200).send({error:"INVALID_PARAMS"});
    registerUserModel.register(req.body, ()=> res.status(200).send({data:'ok'}))
    
}




function verifyParams(params){
    if(params.name == undefined || params.name == '' || params.email == undefined) return false;
    if(params.password == undefined || params.role == undefined) return false;
    return true;
}