const mongoose = require('../db.js');
const crypto = require('crypto');
const EventSchema = new mongoose.Schema({
    agenda:{
        type:String,
        required:false,
    },
    title:{
        type:String,
        required:false,
    },
    start:{
        type:Date,
        required:false,
        unique:false,
    },
    end:{
        type:Date,
        required:false,
        unique:false,
    },
    dayStart:{
        type:Number,
        required:false,
        unique:false,
    },
    dayEnd:{
        type:Number,
        required:false,
        unique:false,
    },
    user:{
        type:String,
        require:false,
    },
    details:{
        type:Object,
        required:false,
        default:{},
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