module.exports = getUser;
const User = require('../Schemas/user');
const crypto = require('crypto')

function getUser(data,cb){
  let response = {};
  User.find({"_id": data.idUser}, 
      function (err, docs) {
          //console.log(docs)
          if(err){
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