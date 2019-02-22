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
    var user = new User({
        name: data.name,
        login:data.login,
        password:data.password,
        details: data.details,
    });

    user.save(function (err,user) {
      if (err) {
          console.log('Model Register User ERROR - ', err, user)
          response.error = err;
        }else {
            // saved!
            console.log('save 1', user);
            response.data = user
        }
        cb(response);
    });
    
return  'oi'
}

