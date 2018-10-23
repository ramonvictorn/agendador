const mongoose = require('../db.js');
const crypto = require('crypto');
const EventSchema = new mongoose.Schema({
    agenda:{
        type:String,
        required:false,
    },
    name:{
        type:String,
        required:true,
    },
    start:{
        type:Date,
        required:true,
    },
    end:{
        type:Date,
        required:true,
    },
    finalidade:{
        type:String,
        required:false,
    },
    user:{
        type:String,
        require:false,
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