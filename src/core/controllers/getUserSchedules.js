const getUserSchedulesModels = require('../models/getUserSchedules.js');
const getSchedulesModels = require('../models/getSchedules.js');
module.exports = getUserSchedules;

function getUserSchedules(req,res){
    const context = {
        idUser:req.body.idUser == undefined ? req.session.agendador.user._id : ''
    }
    getUserSchedulesModels(context,(ret)=>{
        let dataSchedules = [];
        for(var count = 0; count < ret.length;count++){
            getSchedulesModels({id:ret[count]},(dataReturned)=>{
                dataSchedules.push(dataReturned.data)
                if(dataSchedules.length == ret.length){
                    res.status(200).send({data:dataSchedules})
                }
            })
        }
        // getSchedulesModels()
    })

}