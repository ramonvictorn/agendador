exports.insertEvent = insertEvent;
const insertEventModel = require('../models/insertEvent');

function insertEvent(req,res){

    console.log('foo session', req.session.agendador.user._id)
    console.log('insert controller ', req.body)
    const context = {
        agenda: req.body.agenda,
        title:req.body.title,
        start:req.body.start,
        end:req.body.end,
        user:req.session.agendador.user._id,
        dayStart: new Date(req.body.start).getDate(),
        dayEnd: new Date(req.body.end).getDate(),
        details: '{}',
    }
    if(!checkParams(req.body)) res.status(400).send({error:'INVALID_PARAMS'})

    insertEventModel.insertEvent(context,
        (response)=>{
            if(response.error){
                res.status(400).send({error:response.error.text})
            }else{
                res.status(200).send({data: response.data})
            }
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

