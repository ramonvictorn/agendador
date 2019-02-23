const mongoose = require('../db.js');
const crypto = require('crypto');
const EventSchema = new mongoose.Schema({
    agenda:{
        type:String,
        required:false,
    },
    title:{
        type:String,
        required:true,
    },
    start:{
        type:Date,
        required:true,
        unique:false,
    },
    end:{
        type:Date,
        required:true,
        unique:false,
    },
    dayStart:{
        type:Number,
        required:true,
        unique:false,
    },
    dayEnd:{
        type:Number,
        required:true,
        unique:false,
    },
    user:{
        type:String,
        require:false,
    },
    details:{
        type:Object,
        required:true,
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