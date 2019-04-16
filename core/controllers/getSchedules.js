const getScheduleModels = require('../models/getSchedules.js')
module.exports = getSchedulesController;

function getSchedulesController(req,res){
    if(verifyParams(req.body)){
        let context = {
            id: req.body.id,
            code: req.body.code,
        }
        getScheduleModels(context,(ret)=>{
            if(ret.err){
                res.status(ret.err.code).send({error:ret.error.text})
            }else{
                res.status(200).send({data:ret.data})
            }
        })
    }
}

    
function verifyParams(params){
    if(params.id == undefined && params.code == undefined) return false;
    return true;
}
            //     getUserScheduleModels(req.session.agendador.user._id,(data)=>{
            //         console.log('cb do get user schedule ',data, data.data.length)
            //         context = {};
            //         let returns = {};
            //         for(var cont = 0;cont < data.data.length; cont++){
            //             console.log('looping ', data.data[cont], cont)
            //             context.id = data.data[cont];
            //             getScheduleModels(context,(ret)=>{
            //                 if(ret.error != undefined &&  ret.error != null){
            //                     return true;// res.status(400).send({error:'ERROR_ON_GET_SCHEDULE'})
            //                     returns.error =  {
            //                         code:400,
            //                         text:'ERROR',
            //                     }
            //                     // break
            //                 }else{
            //                     console.log('oi ',ret)  
            //                     returns.data == undefined ? returns.data = [ret.data] : ret.data.push(ret.data) 
            //                 }
            //                 cont++;
            //             })
            
            //         }
            //         console.log('AFTER LOOPING > ', returns.data)
            //     })
            // }else{
            //     res.status(400).send({error:'INVALID_PARAMS'})
            // }