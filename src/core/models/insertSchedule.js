module.exports = insertSchedule;

const Schedule = require('../Schemas/schedule.js');

function insertSchedule(data,cb){
  console.log('models insert agenda ', data)
  let response = {}
  save();

  function save(){
    var schedule = new Schedule({
        name:data.name,
        code: data.code,
        local:data.local,
        details: data.details,
    });

    schedule.save(function (err,event) {
      if (err) {
          console.log('insert schedule err',err)
          response.error = {text: 'SAVE_ERROR'};
        }else {
            console.log('insert schedule sucess')
            response.data = event
        }
        cb(response);
    });
  }
}