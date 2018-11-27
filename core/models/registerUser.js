/**
 * @author Ramon Victor <ramon.lantec@gmail.com>
 * @description Model para registro de usuário
 */

 const User = require('../Schemas/user');
exports.register = register;

/**
 * @function register - Realizar o cadastro de um novo usuário
 * @param {Object} login - Objeto contendo as propriedades do usuario 
 * @param {Function} cb - callback de sucesso 
 */
function register(login, cb){
    const user = User.create(login);    
}