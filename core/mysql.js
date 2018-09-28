var mysql = require('mysql');

var con;
exports.dbInit = dbInit;
exports.con = con;

var con;
function dbInit(call,req,res){
        con = mysql.createConnection({
        host: "localhost",
        user: "inventario",
        password: "#Lantec2018",
        database: "login"
      });
      
      teste(call,res,res);
}

function teste(call,req,res){
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM users", function (err, result, fields) {
          if (err) {
            throw err;
            console.log('erro :', err)
        }else{
            console.log('Mysql result teste',result);
            call(con,req,res);
        }
         
        });
      });
}