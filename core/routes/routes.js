/** 
* @author Ramon Victor <ramon.lantec@gmail.com>
* @desc Concentra as rotas que retornam paginas
*/

exports.init = init;

const controllers = require('../controllers/controllers');


/**  
*
* @desc Routes and controllers for pages
* @param {object} app is a object express()
*/
function init(app){
    app.get('/agenda', checkSecurity ,controllers.agenda);
    app.get('/login',  controllers.login);
}


/**  
*
* @desc Middleware to verify that the user is allowed to access the route
* @param {Object} next is a controller for this route
*/
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

