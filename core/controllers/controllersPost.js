exports.login = login;
const modelPost = require('../models/modelsPost')




function login(req,res){
    console.log('controllersPost --> function /login  ')
    const login = {email:req.body.email,
                    password: req.body.password
                }
                    console.log('controllersPost --> login , ', login)
    if(modelPost.login(login)){
        console.log('model true')

    }
}


