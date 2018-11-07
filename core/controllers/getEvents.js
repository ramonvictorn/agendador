exports.getEvents = getEvents;

const GetEventsModel = require('../models/getEvents')

/**
 * @description define os callbacks 
 */
function getEvents(req,res){
    console.log('post /getEvents -> controller - function getEvents')
    GetEventsModel.getEvents((events) => {
        if(events){
            console.log('Eventos OK total de reservas ', events.length)
            res.status(200).send({events})
        }  
    },()=>{
        console.log('erro get')
        res.status(401).send({error:"Events not Found"})
        
    });

}