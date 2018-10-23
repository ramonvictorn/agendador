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

    $('.cadastroEventoFechar').on('click',function(){
        $('.modalCadastro').hide();
    })


    $(".data").mask("99/99/9999 99:99:99",{autoclear: false});
    var cadastrarEvento = $('.cadastrarEvento')
    cadastrarEvento.on( "click", insertEvent);
}



function createEvent(){
    console.log('function createEvent')
    var evento = {};
    evento.name = $('.cadastroNome').val();
    evento.finalidade = $('.cadastroFin018-10-20T19:47:37-03:00alidade').val();
    evento.start = $('.cadastroInicio').val();
    evento.end = $('.cadastroFim').val();

    evento.start =evento.start;
    console.log('evento criado', evento)
return evento;}

function insertEvent(){
    console.log('function insertEvent')
    var evento = createEvent();
    console.log('evento para o post ', evento)
    $.post( "/insertEvent", evento)
            .done(function( evento ) {
                console.log( "Evento cadastrado: " , evento );
                
        });
}
