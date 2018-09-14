exports.init = init;

const controllers = require('../controllers/controllers');

function init(app){
    app.get('/', controllers.index);
}
