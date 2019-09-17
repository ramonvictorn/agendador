module.exports = isLogged;

/**
 * @function isLogged - verify if user have a session opened
 * @param {object} data - the object with params
 * @param {string} data.login - propriedade com o email do usuario
 * @param {string} data.id - <optinional>
 * @param {function} cb - callback para se executado 
 * @param {function} erro - callback de erro
 */
function isLogged(data,cb){
    let response = {};
    
    if(req.session){
        console.log(data.login, ' have session')
        response.data = req.session;

    }else{
        console.log(data.login , 'don t have session')
        response.error = {text:'NO_SESSION ', code:400};
    }
}