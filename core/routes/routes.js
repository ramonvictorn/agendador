/** 
* @author Ramon Victor <ramon.lantec@gmail.com>
* @desc Concentra todas as rotas da API
*/

exports.init = init;

const renderAgendaControler = require('../controllers/renderAgenda');
const renderLoginController = require('../controllers/renderLogin');
const loginController = require('../controllers/login');
const registerUserController = require('../controllers/registerUser');
const getEventsController = require('../controllers/getEvents');
const insertEventController = require('../controllers/insertEvent');

/**  
*
* @desc Routes and controllers for pages
* @param {object} app is a object express()
*/
function init(app){
    app.get('/', checkSecurity,renderAgendaControler.agenda)
    app.get('/agenda', checkSecurity ,renderAgendaControler.agenda);
    app.get('/login',  renderLoginController.login);
    app.post('/login', loginController.login);
    app.post('/register', registerUserController.register)
    app.post('/getEvents', getEventsController.getEvents)
    app.post('/insertEvent', checkSecurity , insertEventController.insertEvent)
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
        console.log('User Não autenticado')
        return res.status(403).send({error:"User not permited"});
    }
    
}

