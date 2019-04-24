module.exports = getSchedules;

const ScheduleSchema = require('../Schemas/schedule.js')

function getSchedules(context,cb){
    let query = {}
    let returns = {};

    // if ((context.id).match(/^[0-9a-fA-F]{24}$/)) {
        query._id = context.id
    // }else{
    //     query.code = context.code;
    // }
    
    ScheduleSchema.find(query, function(err,docs){
        if(err){
            console.log('GET_SCHEDULE_ERROR ',err)
            returns.error = {
                code:400,
                text:'ERRO_ON_GET_SCHEDULES',
            }
            cb(returns)
        }else{
            // console.log('GET_SCHEDULE__SUCESS', docs);
            if(docs.length == 0){
                returns.error = {
                    code:400,
                    text:'SCHEDULES_NOT_FOUNT',
                }
            }else{
                returns.data = docs[0];
            }
            // returns.data = docs;
            cb(returns)
        }
    })
}
