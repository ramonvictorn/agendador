const GetEventsModel = require('../models/getEvents')

module.exports = getEvents;

/**
 * @function getEvents
 * @description define os callbacks 
 */
function getEvents(req,res){
    if(verifyParams(req.body)){
        let context = {
            agenda: req.body.agenda,
            day: req.body.day,
            month: req.body.month,
            monthEnd: req.body.month == 12 ? req.body.month+1 : 1,
            yearStart : req.body.month >  1 ? req.body.year : req.body.year-1,
            year:req.body.year,
        }

        GetEventsModel(context,(ret)=>{
            if(ret.error){
                console.log('erro no cb get',ret)
                res.status(400).send({Error:'error'})
            }else{
                // console.log('cb sucess ')
                res.status(200).send({data:ret.data})
            }
        })
    }else{
        res.status(400).send({error:'INVALID_PARAMS'})
    }

}

/**
 * @function verifyParams
 * @summary Verify if all params are receive and return false if not ok
 */
function verifyParams(params){
    if(params.agenda == undefined && params.agenda == null) return false;
    
    return true
}