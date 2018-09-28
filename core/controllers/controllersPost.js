exports.login = login;
const modelsPost = require('../models/modelsPost');





function login(req,res){
    console.log('controllersPost --> function /login  ')
    modelsPost.login(req,res)
}


