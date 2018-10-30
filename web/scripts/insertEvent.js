/**
 * @function createEvent - cria o evento e o retorna formatado 
 * @param evento - objeto contendo as dados da reserva
 */
function createEvent(){
    console.log('insertEvent.js -> Function createEvent')
    var evento = {};
    evento.name = $('.cadastroNome').val();
    evento.finalidade = $('.cadastroFinalidade').val();
    evento.start = $('.cadastroInicio').val();
    evento.end = $('.cadastroFim').val();
    console.log('insertEvent.js -> Function createEvent -> Evento criado', evento)
return evento;}


/**
 * @function insertEvent - Envia o evento na rota para inserir o evento
 */
function insertEvent(){
    console.log('insertEvent.js -> Function insertEvent')
    var evento = createEvent();
    $.post( "/insertEvent", evento)
            .done(function( evento ) {
                console.log( "Evento cadastrado: " , evento );
                
    });
}