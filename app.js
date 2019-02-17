// const express = require('express');
// const app = express();
// const path = require('path');
const routes = require('./core/routes/routes.js');
//const routesPost = require('./core/routes/routes');
// var session = require('express-session');
// var FileStore = require('session-file-store')(session);
// const ejs = require('ejs');

// const { createEngine } = require('express-react-views');

// app.set('views', path.resolve('./public')); // [A]
// app.set('view engine', 'js'); // [B]
// app.engine('js', createEngine()); // [C]

//app.set('views', './public/templates') // specify the views directory
// app.set('view engine', 'html') // sets the template engine
// app.engine('html',ejs.renderFile);
// Configure body parse
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())
// //permitir acesso ao Js e css    
//app.use('/static', express.static('public/'));
// app.get('/javascripts', express.static(__dirname + '/dist/web/scripts/'));
//app.use('/callendar', express.static('node_modules/'))
// //finish2

//app.use('/js', express.static(__dirname + '/public/js'));
//app.use('/css', express.static(__dirname + '/public/css'));
//app.set('views', './public/templates') // specify the views directory


// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     store: new FileStore('../session'),
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//     maxAge  : new Date(Date.now() + 3600), //1 Hour
//     expires : new Date(Date.now() + 3600), //1 Hour
// }))





// if(process.env.NODE_ENV == "development"){
//     //app.use('/js', express.static(__dirname + '/web/public/js'));
//     // app.use('/js', express.static(__dirname + '/web/public/js'));
//     // app.set('views', './web/public') // specify the views directory
//     ///app.use('/node_modules', express.static('node_modules/'))
// }else{
//     app.use('/js', express.static(__dirname + '/public/js'));
//     app.use('/css', express.static(__dirname + '/public/css'));
//     app.set('views', './public/templates') // specify the views directory
// }

// routesPost.initPost(app);
// app.listen(8080,()=> console.log('App listening on port 8080'));

const express = require('express');
const path = require('path');
const app = express();

//Config view engine
app.set('views', path.resolve('./web/private/templates')) // specify the views directory
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'web/public')));
routes.init(app);
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{res.render('index.ejs', {scripts:['/js/index.js',]})});

const port = process.env.PORT || 3002;
app.listen(port);

console.log('App is listening on port ' + port);