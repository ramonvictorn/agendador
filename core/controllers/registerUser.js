exports.register = register;

function register(req,res){
    console.log('controllersPost --> function /register  ')
    const login = {email:req.body.email,
                    password: req.body.password
                }
                    console.log('controllersPost --> login , ', login)
    modelPost.register(login);
      
}