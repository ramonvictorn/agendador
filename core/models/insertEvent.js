exports.insertEvent = insertEvent;

const Event = require('../Schemas/event');



function insertEvent(evento){
    console.log('model insertEvent', evento)
    const event = Event.create(evento);
}
