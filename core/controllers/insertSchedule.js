module.exports = insertSchedule;

const insertScheduleModel = require('../models/insertSchedule.js')
function insertSchedule(req,res){
    console.log('controller insert agenda ', req.body)
    let context = {
        name: req.body.name,
        code:req.body.code,
        details:{
            images:[req.body.images],
            block:req.body.block,
            center: req.body.center,
        }

    }
    insertScheduleModel(context,(ret)=>{
        if(ret.error){
            res.status(ret.error.code).send({error:ret.error.text})
        }else{
            res.status(200).send({data:ret.data})
        }
    })
}