const mongoose = require('../db.js');
const crypto = require('crypto');
const EventSchema = new mongoose.Schema({
    agenda:{
        type:String
    },
    name:{
        type:String,
        required:true,
    },
    start:{
        type:Date,
        required:true,
        unique:true,
        lowercase:true,
    },
    end:{
        type:Date,
        required:true,
    },
    user:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

EventSchema.pre('save',  function (next) {
    next();
})


const Event = mongoose.model('Event', EventSchema, 'events');


module.exports = Event;