exports.login = login;
const userSchema = require('../Schemas/user');
const crypto = require('crypto')
const loginModel = require('../models/login');

function login(req,res){
    let context = {
        login : req.body.login,
        password : req.body.password,
    };
    const hasher = crypto.createHash('SHA256');
    hasher.update(context.password);
    const enteredHash = hasher.digest('hex');
    context.password = enteredHash;
    
    loginModel.login(context, (response)=>{
        if(response.error){
            res.status(400).send({error:response.error.text});
        }else{
            if(!req.session.agendador){
                console.log('usuario sem sessao iniciada, criando...', response.data)
                req.session.agendador = {};
                req.session.agendador.user = response.data;
                req.session.cookie.expires = new Date(Date.now() + 3600000)
            }
            res.status(200).send({data:response.data});
        }
    })
}