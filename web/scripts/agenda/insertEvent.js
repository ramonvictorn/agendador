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

    $.ajax({
        url: '/events/insertEvent',
        type: 'POST',
        data: createEvent(),
        dataType: 'json',  
        beforeSend: function () {
            //Aqui adicionar o loader
            console.log('cadastrando evento')
        },         
        success: function(data) {
            //Aqui adicionar msg de sucesso
            console.log('insert event')
        },
        error: function() {
            //Aqui adicionar msg de erro
            console.log("erro");
        }   
     });
}


/**
 * @function converteDataTimestamp - converte as datas para timestamp
 * @param {String }dataHora - String com uma data na order DD/MM/YYYY HH:MM
 * @returns {timestamp} data convertida em timestamp 
 */
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