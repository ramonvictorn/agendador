exports.init = init;

const controllers = require('../controllers/controllers');

function init(app){
    app.get('/agenda', checkSecurity ,controllers.agenda);
    app.get('/login', login, controllers.login);
}


//verifica se o usuario esta logado com base na session
function checkSecurity(req, res, next){
    console.log('checkSecurity')
    if(req.session.agendador ){
        if(req.session.agendador.user == 'ramon'){
            console.log('User autenticado')
            next()
        }   
    }else{
        console.log('User Não autenticado')
        res.redirect('/login')
    }
    
}


// inicia a sessao do usuario
function login(req, res, next){
    if(req.session.agendador ){
        if(req.session.agendador.user == 'ramon'){
            console.log('ckeck ok')
            res.redirect('/agenda')
        }   
    }else{
        console.log('ckeck invalido')
        next();
    }
}
