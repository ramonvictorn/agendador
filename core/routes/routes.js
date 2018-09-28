exports.init = init;

const controllers = require('../controllers/controllers');

function init(app){
    app.get('/agenda', controllers.agenda);
    app.get('/login', controllers.login);
}
