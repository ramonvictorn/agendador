$( document ).ready(function() {
    // var a = $('.modalPequena');
    // console.log('foo ready', a)   
    // setTitle("modal aqui");
    // setBody("body aqui");
    // hideBtSalvar();
    eventos();
    showModal();

});


function setTitle(texto){
    var modal = $('.modalPequena');
    var title = $('.pequenaTittle')
    title.text(texto);
}

function setBody(texto){
    var body = $('.pequenaBody');
    body.text(texto);
}

function hideBtSalvar(){
    $('.btSalvar').hide();
}

function showModal(){
    $('.modalPequena').show();
}
function hideModal(){
    $('.modalPequena').hide();
}

function eventos(){
    var fechar = $(".btFechar");
    fechar.on( "click", function() {
        hideModal()
      });
}