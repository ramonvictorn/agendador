exports.login = login;
const userSchema = require('../Schemas/user');
const crypto = require('crypto')
const loginModel = require('../models/login');

function login(req,res){
    var login = {};
    login.email = req.body.email;
    login.password = req.body.password;

    if(login.email == null || login.email == undefined || login.email == "" || login.password == null || login.password == undefined || login.password == "" ){
        return res.status(403).send({error:"Parametros_Invalidos"});
    }
    const hasher = crypto.createHash('SHA256');
    hasher.update(login.password);
    const enteredHash = hasher.digest('hex');
    login.password = enteredHash;
    
    loginModel.login(login, (usuario)=>{
        console.log('controller Login -> Usuario com premissão')
        if(!req.session.agendador){
            console.log('usuario sem sessao iniciada, criando...', usuario)
            req.session.agendador = {};
            req.session.agendador.user = usuario;
        }
        req.session.cookie.expires = new Date(Date.now() + 3600000)
        res.status(200).send({sucess:"User found"});
    }, ()=>{
        console.log('controller Login -> Usuario sem premissão')
        return res.status(200).send({error:"User not found"});
    })
    
}