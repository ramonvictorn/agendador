/**
 * @author Ramon Victor <ramon.lantec@gmail.com>
 * @description Model para registro de usuário
 */

const User = require('../Schemas/user');
exports.register = register;

/**
 * @function register - Realizar o cadastro de um novo usuário
 * @param {Object} data - Objeto contendo as propriedades do usuario 
 * @param {Function} cb - callback de sucesso 
 */
function register(data, cb){
    var response = {};
    verifyExistLogin();

    /**
     * @summary This function verify if user existi
     */
    function verifyExistLogin(){
        User.find({ login: data.login}, 
            function (err, docs) {
                if(err){
                    console.log('VERIFY EXIST LOGIN ', err)
                    response.error = err;
                } else{
                    if(docs.length >=1){
                        response.error = {text:'THIS_USER_ALREADY_EXIST'}
                        cb(response);
                    }else{
                        save();
                    }
                }
            }
        );
        
    }
    
    function save(){
        var user = new User({
            name: data.name,
            login:data.login,
            password:data.password,
            details: data.details,
        });
    
        user.save(function (err,user) {
          if (err) {
              console.log('REGISTER USER MODEL ERROR - ', err, user)
              response.error = {text: 'SAVE_ERROR'};
            }else {
                // saved!
                console.log('REGISTER USER MODEL - SAVE SUCESS');
                response.data = user
            }
            cb(response);
        });
    }
}



