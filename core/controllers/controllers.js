exports.agenda = agenda;
exports.login = login;
const models = require('../models/models');



function agenda(req,res){
    res.render('agenda');
    console.log('rota / acessada')
}


function login(req,res){
    res.render('login');
    console.log('rota /login acessada')
}


