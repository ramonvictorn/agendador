exports.getEvents = getEvents;

const getEventsSchema = require('../Schemas/event')
async function getEvents(cb){
    console.log('model getEvents')
    var events = await getEventsSchema.find({}, function (err, event) {
        
    });
    
    if(events){
        console.log('total de reservas ', events.length)
        cb(events)
    }
}