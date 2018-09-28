const express = require('express');
const app = express();
const routes = require('./core/routes/routes.js');
const routesPost = require('./core/routes/routesPost.js')
const ejs = require('ejs');
// //seta o caminho especifico para os html's dinamicos
app.set('views', './web/view') // specify the views directory
app.set('view engine', 'html') // sets the template engine
app.engine('html',ejs.renderFile);

// Configure body parse
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
// //permitir acesso ao Js e css
app.use('/static', express.static('web/'));
app.use('/callendar', express.static('node_modules/'))
// //finish2

routes.init(app);
routesPost.initPost(app);
app.listen(8080);