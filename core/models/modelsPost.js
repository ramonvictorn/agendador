exports.login = login;
exports.register = register;
const crypto = require('crypto');
const User = require('../models/user')

async function login(login, cb,erro){
    const hasher = crypto.createHash('SHA256');
    hasher.update(login.password);
    const enteredHash = hasher.digest('hex');
    login.password = enteredHash;
    const user =  await User.findOne({'email':login.email , 'password':login.password}).select('+password');
    if(user){
        console.log('Usuario com permissao ')
        cb();
    }else{
        console.log('Usuario sem permissao ')
        erro()
    }
    
}

function register(login, cb){
    console.log('model register', login)
    login.name = "teste";
    const user = User.create(login);
    console.log('user ,', login)    
}

