const express = require('express');
const app = express();
const routes = require('./core/routes/routes.js');
const routesPost = require('./core/routes/routesPost.js');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
const ejs = require('ejs');


app.set('views', './web/view') // specify the views directory
app.set('view engine', 'html') // sets the template engine
app.engine('html',ejs.renderFile);
// Configure body parse
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
// //permitir acesso ao Js e css
app.use('/static', express.static('web/'));
app.use('/callendar', express.static('node_modules/'))
// //finish2


app.set('trust proxy', 1) // trust first proxy
app.use(session({
    store: new FileStore('../session'),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))




routes.init(app);
routesPost.initPost(app);
app.listen(8080,()=> console.log('App listening on port 8080'));