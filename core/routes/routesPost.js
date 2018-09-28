exports.initPost = initPost;

const controllersPost = require('../controllers/controllersPost');

function initPost (app){
    app.post('/login', controllersPost.login);
}
