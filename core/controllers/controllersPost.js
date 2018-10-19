exports.login = login;
exports.register = register;
const modelPost = require('../models/modelsPost')




function login(req,res){
    console.log('controllersPost --> function /login  ')
    const login = {email:req.body.email,password: req.body.password}
    console.log('controllersPost --> login , ', login)

    modelPost.login(login,cb,erro);

    function cb(){
        console.log('permissao sucess')
        req.session.agendador = {};
        req.session.agendador.user = login;
        req.session.cookie.expires = new Date(Date.now() + 3600000)
        res.status(200).send({sucess:'Ok'})
         
    }
    function erro(){
        console.log('erro aqui')
        return res.status(403).send({error:"User not found"});
    }
}


function register(req,res){
    console.log('controllersPost --> function /register  ')
    const login = {email:req.body.email,
                    password: req.body.password
                }
                    console.log('controllersPost --> login , ', login)
    modelPost.register(login);
      
}
