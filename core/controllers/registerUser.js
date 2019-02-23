const registerUserModel = require('../models/registerUser.js');

exports.register = register;

function register(req,res){
    console.log('controllersPost --> function user/register  ')
    if(!verifyParams(req.body)) return res.status(200).send({error:"INVALID_PARAMS"});

    const data = {
        name:req.body.name,
        login:req.body.login,
        password:req.body.password,
        role: req.body.role,
        details: req.body.details || {
            urlUser:'https://static.thenounproject.com/png/994628-200.png',
            agendas:[500,501],
        },
    }
    registerUserModel.register(data, 
        (response)=>{
            if(response.error){
                res.status(400).send({error: response.error.text})
            }else{
                res.status(200).send({data:response.data})
            }
        })
}




function verifyParams(params){
    if(params.name == undefined || params.name == '' || params.login == undefined) return false;
    if(params.password == undefined || params.role == undefined) return false;
    return true;
}