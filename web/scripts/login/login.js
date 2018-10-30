
/**
 * @function events Adiciona o evento click ao botão login
 */
function events(){
    var login = $('#login');
    login.on("click", getDados);
}

/**
 * @function Pega os dados do formulario e retorna um obj
 */
function getDados(){
    var credenciais = {}
    var email = $('#email');
    email = email.val()
    var password = $('#password');
    password = password.val();
    credenciais.email = email;
    credenciais.password = password;
    console.log('foo credenciais ', credenciais); 
    
    return credenciais;}

/**
 * @function postLogin - Faz um post na rota de login com os dados do formulario
 */
function postLogin(){
    console.log('foo postLogin', data);

    $.post( "/login", getDados())
        .done(function( data ) {
            console.log( "Usuario correto: " , data );
            if(data.sucess){
                console.log( "Usuariooo correto: " , data );
                window.location = 'agenda'
            }
    });
    

}
events();