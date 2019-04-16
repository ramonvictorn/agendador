// const mongoose = require('../db.js');
const mongoose = require('mongoose');
const crypto = require('crypto');
const ScheduleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false,
    },
    local:{
        type:String,
        required:false,
    },
    details:{
        type:Object,
        required:false,
        default:{},
    },
    code:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

ScheduleSchema.pre('save',  function (next) {
    next();
})


const Schedule = mongoose.model('Schedule', ScheduleSchema, 'schedules');


module.exports = Schedule;