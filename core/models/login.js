exports.login = login;
const userSchema = require('../Schemas/user');
const crypto = require('crypto')

async function login(login, cb,erro){
    const hasher = crypto.createHash('SHA256');
    hasher.update(login.password);
    const enteredHash = hasher.digest('hex');
    login.password = enteredHash;
    const user =  await userSchema.findOne({'email':login.email , 'password':login.password}).select('+password');
    if(user){
        console.log('Usuario com permissao ')
        cb();
    }else{
        console.log('Usuario sem permissao ')
        erro()
    }
    
}
