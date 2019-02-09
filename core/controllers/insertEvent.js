exports.insertEvent = insertEvent;
const insertEventModel = require('../models/insertEvent');

function insertEvent(req,res){
    const context = {
        title: req.body.title,
        start:req.body.start,
        end:req.body.end,
        agenda:req.body.agenda,
    }
    
    insertEventModel.insertEvent(context,(eventoInserido)=>{
            res.status(200).send({eventoInserido})
        },(err)=>{
            console.log('errorrrr', err)
            res.status(401).send({error:"Insert_Error"})
        });
    // var evento = {};
    // evento.title = req.body.title;
    // evento.start = req.body.start;
    // evento.end = req.body.end;
    // evento.finalidade = req.body.finalidade;
    // evento.user = req.session.agendador.user.email;

    // if(evento.title == null || evento.title == undefined || evento.title == ""){
    //     return res.status(401).send({error:"Parametros_Invalidos"})
    // }
    // if(evento.start == null || evento.start == undefined || evento.start == ""){
    //     return res.status(401).send({error:"Parametros_Invalidos"})
    // }
    // if(evento.end == null || evento.end == undefined || evento.end == ""){
    //     return res.status(401).send({error:"Parametros_Invalidos"})
    // }
    // if(evento.finalidade == null || evento.finalidade == undefined || evento.finalidade == ""){
    //     return res.status(401).send({error:"Parametros_Invalidos"})
    // }
    // if(evento.usuario == null || evento.usuario == undefined || evento.usuario == ""){
    //     return res.status(401).send({error:"Parametros_Invalidos"})
    // }


    // if(validarEvento(evento)){
    //     insertEventModel.insertEvent(evento,(eventoInserido)=>{
    //         res.status(200).send({eventoInserido})
    //     },(err)=>{
    //         console.log('errorrrr', err)
    //         res.status(401).send({error:"Insert_Error"})
    //     });

        
    // }
    
}

function checkParams(){
    return true;
}


function validarEvento(evento){
    var valido = false;
    if(evento != null && evento != undefined){
        valido = true;
    }

return valido;}