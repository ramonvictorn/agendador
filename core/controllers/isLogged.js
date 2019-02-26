const isLoggedModels = require('../models/isLogged.js')

module.exports = isLogged;

function isLogged(req,res){
    console.log('is logged controler')
    let response = {};
    let context = {
        login:req.body.login,
    }
    if(req.session.agendador){
        console.log(' have session')
        res.status(200).send({data:req.session.agendador})

    }else{
        console.log( 'don t have session')
        res.status(400).send({error:'NO_SESSION'})
    }
    // isLoggedModels(context,(response)=>{
    //     if(response.error){
    //         res.status(responde.error.code).send({error:response.error.text})
    //     }else{
    //         res.status(200).send({data:response.data})
    //     }
    // })
}