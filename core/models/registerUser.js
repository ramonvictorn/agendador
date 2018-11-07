exports.register = register;

function register(login, cb){
    console.log('model register', login)
    login.name = "teste";
    const user = User.create(login);
    console.log('user ,', login)    
}