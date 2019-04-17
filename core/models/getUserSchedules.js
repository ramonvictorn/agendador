module.exports = getUserSchedules;
const userSchema = require('../Schemas/user.js')


function getUserSchedules(context,cb){
    let returns = {};
    userSchema.find({'_id':context.idUser}, function(err,docs){
        if(err){
            console.log('GET_USER_SCHEDULE_ERROR_USER_SCHEMA',err)
        }else{
            console.log('GET_USER_SCHEDULES_SUCESS', docs[0].schedules)
            cb(docs[0].schedules)
        }
    })
}
