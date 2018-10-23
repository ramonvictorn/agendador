exports.initPost = initPost;

const controllersPost = require('../controllers/controllersPost');
const express = require('express');
const bcrypt = require('bcryptjs')
const User = require('../models/user');
const authConfig = require('../config/auth')
const router = express.Router();

function initPost (app){
    app.post('/login', controllersPost.login);
    app.post('/register', controllersPost.register)
    app.post('/getEvents', controllersPost.getEvents)
    app.post('/insertEvent', checkSecurity , controllersPost.insertEvent)
}


//verifica se o usuario esta logado com base na session
function checkSecurity(req, res, next){
    console.log('checkSecurity')
    if(req.session.agendador ){
        if(req.session.agendador.user){
            console.log('User autenticado')
            next()
        }   
    }else{
        console.log('User Não autenticado')
        return res.status(403).send({error:"User not permited"});
    }
    
}