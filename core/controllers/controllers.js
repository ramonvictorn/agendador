exports.agenda = agenda;
exports.login = login;
const models = require('../models/models');



function agenda(req,res){
    res.send('Page agenda');
  
    console.log('rota /agenda acessada')
}


function login(req,res){
    res.render('login');
    console.log('rota /login acessada')
}


