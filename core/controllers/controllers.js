exports.index = index;

const models = require('../models/models');



function index(req,res){
    res.render('agenda');
    console.log('rota / acessada')
}
