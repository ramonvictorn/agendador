/**
 * @function createEvent - cria o evento e o retorna formatado 
 * @param evento - objeto contendo as dados da reserva
 */
function createEvent(){
    console.log('insertEvent.js -> Function createEvent')
    var evento = {};
    var dataInicio = $('.cadastroInicio').val();
    var dataFim = $('.cadastroFim').val();
    evento.name = $('.cadastroNome').val();
    evento.finalidade = $('.cadastroFinalidade').val();
    evento.start = converteDataTimestamp(dataInicio);
    evento.end = converteDataTimestamp(dataFim);
    
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

function converteDataTimestamp(dataHora){
    var separador = /\D/;
    var separaDataHora = dataHora.split(separador);

    var dia = separaDataHora[0];
    var mes = separaDataHora[1];
    var ano = separaDataHora[2];
    var hora = separaDataHora[3];
    var minuto = separaDataHora[4];
    var segundo = separaDataHora[5];

    var timestamp = Date.UTC(ano, mes-1, dia, hora, minuto, segundo)

    return timestamp;
}