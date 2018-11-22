exports.login = login;
const userSchema = require('../Schemas/user');
const crypto = require('crypto')

/**
 * @function realiza a query no banco para ver se o usuario existe
 * @param {object} login - objeto contendo os seguintes paramentros
 * @param {string} login.email - propriedade com o email do usuario
 * @param {string} login.password - propriedade com a senha do usuario
 * @param {function} cb - callback para se executado 
 * @param {function} erro - callback de erro
 */
function login(login,cb, erro){
    userSchema.find({email:login.email, password:login.password}, function (err,docs){
      if(err || docs.length == 0){erro()
      }else{
        console.log('doc ', docs[0])
        cb(docs[0]);
      }
    })
      
}