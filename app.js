const express = require('express');
const app = express();
const routes = require('./core/routes/routes.js');
const ejs = require('ejs');
// //seta o caminho especifico para os html's dinamicos
app.set('views', './web/view') // specify the views directory
app.set('view engine', 'html') // sets the template engine
app.engine('html',ejs.renderFile);
// //permitir acesso ao Js e css
app.use('/static', express.static('web/'));
app.use('/callendar', express.static('node_modules/'))
// //finish2

routes.init(app);
app.listen(8080);