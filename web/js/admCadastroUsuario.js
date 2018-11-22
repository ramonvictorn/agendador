function getDadosForm(){
    var formData = {};
    formData.nome = $('#cadUserNome').val();
    formData.email = $('#cadUserEmail').val();
    formData.senha = $('#cadUserSenha').val();
    formData.role = $('#cadUserRoles').val();
return formData;}


function registerUser(){
    $.ajax({
        url: '/user/register',
        type: 'POST',
        data: getDadosForm(),
        dataType: 'json',  
        beforeSend: function () {
            //Aqui adicionar o loader
            console.log('cadastrando usuario')
        },         
        success: function(data) {
            //Aqui adicionar msg de sucesso
            console.log('usuario cadastrado')
        },
        error: function() {
            //Aqui adicionar msg de erro
            console.log("usuario erro");
        }   
     });
}

$( document ).ready(function() {
    console.log('page ready')
    $('.cadUSerBt').click(registerUser);
  });
