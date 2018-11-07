exports.insertEvent = insertEvent;
const insertEventModel = require('../models/insertEvent');

function insertEvent(req,res){
    console.log('insert event', req.body)
    var evento= req.body;
    insertEventModel.insertEvent(evento);
}
