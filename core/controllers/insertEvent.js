exports.insertEvent = insertEvent;
const insertEventModel = require('../models/insertEvent');

function insertEvent(req,res){
    console.log('insert event', req.body)
    var evento= req.body;
    if(validarEvento(evento)){
        insertEventModel.insertEvent(evento,(eventoInserido)=>{
            console.log('sucess in insert')
            res.status(200).send({eventoInserido})
        },()=>{
            console.log('errorrrr')
            res.status(401).send({error:"Insert_Error"})
        });

        
    }
    
}


function validarEvento(evento){
    var valido = false;
    if(evento != null && evento != undefined){
        valido = true;
    }

return valido;}