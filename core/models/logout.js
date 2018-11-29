exports.logout = logout;


function logout(req,res){
    req.session.destroy(function(err) {
        if(err){
            return res.status(403).send({error:"DESTROY_SESSION_ERROR"});  
        }else{
            return res.status(200).send({data:"USER_LOGOUT_SUCESS"});
        }
      })
   
}