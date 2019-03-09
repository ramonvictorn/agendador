exports.getEvents = getEvents;

const EventsSchema = require('../Schemas/event')
// async function getEvents(cb){
//     console.log('model getEvents')
//     var events = await getEventsSchema.find({}, function (err, event) {
        
//     });
    
//     if(events){
//         console.log('total de reservas ', events.length)
//         cb(events)
//     }
// }

/**
 * 
 * @param {function} cb função de calback para ser executada
 * @param {function} erro é executado caso ocorra erro na query
 */
function getEvents(cb,erro){
    //console.log('model getEvents -> function getEvents');
    EventsSchema.find({}, function(err,docs){
        if(err){
            console.log('Events_Not_Found')
            erro()
        }else{
            console.log('cb eventos');
            cb(docs);
        }
    })
}