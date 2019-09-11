exports.login = login;
const User = require('../Schemas/user');
const crypto = require('crypto')

/**
 * @function realiza a query no banco para ver se o usuario existe
 * @param {object} login - objeto contendo os seguintes paramentros
 * @param {string} login.email - propriedade com o email do usuario
 * @param {string} login.password - propriedade com a senha do usuario
 * @param {function} cb - callback para se executado 
 * @param {function} erro - callback de erro
 */
function login(data,cb){
  let response = {};
    // userSchema.find({email:login.email, password:login.password}, function (err,docs){
    //   if(err || docs.length == 0){erro()
    //   }else{
    //     console.log('doc ', docs[0])
    //     cb(docs[0]);
    //   }
    // })
    
  User.find({ login: data.login, password: data.password}, 
      function (err, docs) {
          if(err){
              console.log('VERIFY EXIST LOGIN ', err)
              response.error = err;
          } else{
              if(docs.length >=1){
                  response.data = docs[0]
                  cb(response);
              }else{
                response.error = {text:'USER_NOT_FOUND'}
                cb(response)
              }
          }
      }
  )
}