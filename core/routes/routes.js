/** 
* @author Ramon Victor <ramon.lantec@gmail.com>
* @desc Concentra todas as rotas da API
*/

exports.init = init;

const renderAgendaControler = require('../controllers/renderAgenda');
const renderLoginController = require('../controllers/renderLogin');
const renderAdmController = require('../controllers/renderAdm');
const loginController = require('../controllers/login');
const registerUserController = require('../controllers/registerUser');
const userLogoutController = require('../controllers/logout.js');
const getEventsController = require('../controllers/getEvents');
const insertEventController = require('../controllers/insertEvent');


/**  
*
* @desc Routes and controllers for API
* @param {object} app is a object express()
*/
function init(app){
    //app.get('*', (req, res) => res.render('index.js'));
    // app.get('/', checkSecurity ,renderAgendaControler.agenda);
    // app.get('/adm/user', checkSecurityAdm , renderAdmController.adm );
    // app.get('/agenda', checkSecurity ,renderAgendaControler.agenda);
    //app.get('*',  renderLoginController.login);
    //app.post('/user/login', loginController.login);
    // app.post('/user/register',checkSecurityAdm, registerUserController.register)
    // app.post('/user/logout',checkSecurity, userLogoutController.logout )
    // app.post('/getEvents', getEventsController.getEvents)
    // app.post('/events/insertEvent', checkSecurity , insertEventController.insertEvent)
}


/**  
*
* @desc Middleware to verify that the user is allowed to access the route
* @param {Object} next is a controller for this route
*/
function checkSecurity(req, res, next){
    if(req.session.agendador ){
        if(req.session.agendador.user){
            console.log('User autenticado')
            next()
        }   
    }else{
        if(req.method == "GET"){
            console.log('User Não autenticado, redirecionando para /login')
            //return res.status(403).send({error:"User not permited for this page"});
            return res.redirect("/login");
        }else{
            console.log('User Não autenticado')
        return res.status(403).send({error:"User not permited"});
        }
    }
    
}


/**  
*
* @desc Middleware to verify that the user is allowed to access the route
* @param {Object} next is a controller for this route
*/
function checkSecurityAdm(req, res, next){
    if(req.session.agendador ){
        if(req.session.agendador.user.role == 'admin'){
            console.log('User é admin')
            next()
        }else{
            if(req.method == "GET"){
                console.log('User Não é admin, redirecionando para /login')
                //return res.status(403).send({error:"User not permited for this page"});
                return res.redirect("/login");
            }else{
                console.log('User Não é admin')
            return res.status(403).send({error:"User not permited"});
            }
        }   
    }else{
        if(req.method == "GET"){
            console.log('User Não está logado, redirecionando para /login')
            //return res.status(403).send({error:"User not permited for this page"});
            return res.redirect("/login");
        }else{
            console.log('User Não autenticado')
        return res.status(403).send({error:"User not permited"});
        }
    }
    
}
