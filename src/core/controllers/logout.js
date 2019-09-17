function logout(req,res){
    if(req.session  .agendador){
        req.session.destroy(function(err) {
            // cannot access session here
            if(err){
                res.status(400).send({erro:'ERROR_DESTROY_SESSION'})
            }else{
                res.status(200).send({data:'LOGOUT_SUCESS'})
            }
          })
        }
    else{
        res.status(400).send({erro:'SESSION_NOT_EXIST'})
    }
}


module.exports = logout;