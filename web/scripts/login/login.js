// Executa funções quando a pagina e carregada
$( document ).ready(function() {
    console.log( "page ready!" );
    events();
});



/**
 * @function events Adiciona o evento click ao botão login
 */
function events(){
    var login = $('#login');
    login.on("click", postLogin);
}

/**
 * @function - Pega os dados do formulario e retorna um obj
 */
function getDados(){
    console.log('getDados()')
    var credenciais = {}
    var email = $('#email');
    email = email.val()
    var password = $('#password');
    password = password.val();
    credenciais.email = email;
    credenciais.password = password;
    console.log('Credenciais login', credenciais); 
    
    return credenciais;}

/**
 * @function postLogin - Faz um post na rota de login com os dados do formulario
 */
function postLogin(){
    // $.post( "/login", getDados())
    // .done(function( data ) {
    // console.log( "Data Loaded: " , data );
    // if(data.error){alert('User not found')}
    // else window.location = 'agenda';
    // });
    $.ajax({
        url: '/login',
        type: 'POST',
        data: getDados(),
        dataType: 'json',  
        beforeSend: function () {
            //Aqui adicionas o loader
            loadingAjax();
        },         
        success: function(data) {
            sucessAjax(data);
        },
        error: function() {
            console.log("erro");
        }   
     });
}


// customizacao login

function loadingAjax(){
    var divLogin = $.find('.login');
    $(divLogin).addClass("loading");

    var spanState = $.find('.state');
    $(spanState).html("Authenticating")
}


function sucessAjax(data){
    console.log('sucess')
    if(data.error){
        var divLogin = $.find('.login');
        $(divLogin).addClass("ok");

        var spanState = $.find('.state');
        $(spanState).html("Usuário não encontrado")

        var btLogin = $.find('#login');
        $(btLogin).attr("disabled", "disabled");
        $(btLogin).removeAttr("disabled");

        setTimeout(function(){
            $(divLogin).removeClass("loading ok");
            $(spanState).html("Login in") 
        },3000)
    } else{
        var divLogin = $.find('.login');
        $(divLogin).addClass("ok");

        var spanState = $.find('.state');
        $(spanState).html("Bem-vindo!")

        setTimeout(function(){
            window.location = 'agenda';
        },700)
        

    } 
}