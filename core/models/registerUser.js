/**
 * @author Ramon Victor <ramon.lantec@gmail.com>
 * @description Model para registro de usuário
 */
exports.register = register;

/**
 * @function register - Realizar o cadastro de um novo usuário
 * @param {Object} login - Objeto contendo as propriedades do usuario 
 * @param {Function} cb - callback de sucesso 
 */
function register(login, cb){
    console.log('model register', login)
    login.name = "teste";
    const user = User.create(login);
    console.log('user ,', login)    
}