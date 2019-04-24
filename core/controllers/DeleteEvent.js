const deleteEventModel = require('../models/deleteEvent.js')


function deleteEvent(req,res){
    let data = {
        _id: req.body.id,
    }
    deleteEventModel(data,(err,doc)=>{
        // console.log('cb delete event ', err,doc)
        // console.log('doc e err no delete ', doc, err)
        if(err == undefined || err == null){
            res.status(200).send({data:'event_Deleted'})
        }else{
            res.status(400).send({error:'error_Delete_Event'})
            console.log('DELETE_EVENT_ERROR')
        }
    })

}

module.exports = deleteEvent;