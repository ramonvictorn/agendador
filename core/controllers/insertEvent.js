exports.insertEvent = insertEvent;
const insertEventModel = require('../models/insertEvent');

function insertEvent(req,res){
    const context = {
        agenda: req.body.agenda,
        title:req.body.title,
        start:req.body.start,
        end:req.body.end,
        user:req.session.agendador.user._id,
        dayStart: new Date(req.body.start).getDate(),
        dayEnd: new Date(req.body.end).getDate(),
        year : new Date(req.body.start).getFullYear(),
        month : new Date(req.body.start).getMonth(),
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
    
}

function checkParams(){
    return true;
}

