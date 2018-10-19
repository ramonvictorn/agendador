exports.init = init;

const controllers = require('../controllers/controllers');

function init(app){
    app.get('/agenda', checkSecurity ,controllers.agenda);
    app.get('/login',  controllers.login);
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
        res.redirect('/login')
    }
    
}

