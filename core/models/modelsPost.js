exports.login = login;
var mysql = require('../mysql.js')
var data;
var con;

function login(req,res){
   console.log('modelsPost --> function loginnnn', req.body)
   
   mysql.dbInit(queryLogin,req,res);
   con = mysql.con;
   data = req.body;
}


function queryLogin(con,req,res){
    console.log('queryLogin start VALUE COM')
    var result;
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) {
          throw err;
          console.log('erro :', err)
      }else{
          console.log('queryLogin ', result);
          //call(con,req,res);
          console.log('RESULT ', result, 'DATA ', req.body)
          req.send(validador(result,data))
          console.log('value enviado', validador(result,data))
      }
       
      });
}

function validador(resultadoDb,resultadoUsuario){
    console.log('validador, db ',resultadoDb[1], 'resultadoUser ', resultadoUsuario)
    if(resultadoDb[1].usuario == resultadoUsuario.usuario && resultadoDb[1].senha == resultadoUsuario.senha){
        console.log('Usuario correto...');
        return true;
    }else{
        console.log('usuario incorreto..')
        return false;
    }
}