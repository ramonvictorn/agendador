exports.login = login;
exports.register = register;
exports.getEvents = getEvents;
exports.insertEvent = insertEvent;
const crypto = require('crypto');
const User = require('../models/user');
const Event = require('../models/event');

async function login(login, cb,erro){
    const hasher = crypto.createHash('SHA256');
    hasher.update(login.password);
    const enteredHash = hasher.digest('hex');
    login.password = enteredHash;
    const user =  await User.findOne({'email':login.email , 'password':login.password}).select('+password');
    if(user){
        console.log('Usuario com permissao ')
        cb();
    }else{
        console.log('Usuario sem permissao ')
        erro()
    }
    
}

function register(login, cb){
    console.log('model register', login)
    login.name = "teste";
    const user = User.create(login);
    console.log('user ,', login)    
}


async function getEvents(cb){
    console.log('model getEvents')
    var events = await Event.find({}, function (err, event) {
        
    });
    
    if(events){
        console.log('events ', events, 'teste data',events[0].start)
        cb(events)
    }
}

function insertEvent(evento){
    console.log('model insertEvent', evento)
    const event = Event.create(evento);
}
