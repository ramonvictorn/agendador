module.exports = getUser;

const getUserModel = require('../models/getUser.js')

/**
 * @description define os callbacks 
 */
function getUser(req,res){
    let contextData = {}
    if(req.body.idUser == undefined){
        contextData.idUser =  req.session.agendador.user._id
    }else{
        contextData.idUser = req.body.idUser;
    }
    getUserModel(contextData, (response)=>{
        if(response.error){
            res.status(400).send({error:response.error})
        }else{  
            res.status(200).send({data:response.data})
        }

    })

}