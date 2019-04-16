const mongoose = require('mongoose');
const url = require('../settings.js').database
console.log('db.js : file db insert.js')
//mongoose.connect('mongodb://localhost:27017/',{ useNewUrlParser: true });
// mongoose.connect('mongodb://ramon:Lantec2018@ds125912.mlab.com:25912/agendador-beta',{ useNewUrlParser: true });
// mongoose.connect('mongodb://ramon.lantec:<Lantec2018>@ds139576.mlab.com:39576/reservas-dev',{ useNewUrlParser: true });
// const uri = 'mongodb://ramon:Lantec2019>@ds139576.mlab.com:39576/reservas-dev'
function dbConnect(cb){
    console.log('db.js : Connecting with db...')
    mongoose.connect(url,
    { useNewUrlParser: true }, function(error) {
        cb(error)
    });
    
    mongoose.set('useCreateIndex', true);
    mongoose.Promise = global.Promise;
    
}
exports.dbConnect = dbConnect;

// , {useMongoClient:true}
// console.log('db.js : database conected!')
// module.exports = mongoose;