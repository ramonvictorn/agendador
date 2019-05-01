module.exports = getEvents;

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
function getEvents(context,cb){
    let ret = {}
    // console.log('model getEvents -> function getEvents', context);
    EventsSchema.find({agenda:context.agenda}, function(err,docs){
        if(err){
            console.log('Events_Not_Found')
            ret.error = {
                code:400,
                text:'ERROR_GET_EVENTS'
            }
        }else{
            ret.data = docs
        }
        cb(ret)
    })
}