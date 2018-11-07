exports.getEvents = getEvents;

const GetEventsModel = require('../models/getEvents')

function getEvents(req,res){
    console.log('post /getEvents -> function getEvents')
    GetEventsModel.getEvents(cb);

    function cb(eventos){
        console.log('callback getEvent', eventos.length)
        res.status(200).send({eventos})
    }
}