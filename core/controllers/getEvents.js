exports.getEvents = getEvents;

const GetEventsModel = require('../models/getEvents')

/**
 * @description define os callbacks 
 */
function getEvents(req,res){
    console.log('post events/getEvents -> controller - function getEvents')
    GetEventsModel.getEvents((events) => {
        if(events){
            console.log('Eventos OK total de reservas ')
            res.status(200).send({data:events})
        }  
    },()=>{
        console.log('erro get')
        res.status(401).send({error:"Events not Found"})
        
    });

}