/**
 * @function  getEvents - Realizar um post para pegar os eventos na rota da api
 * @param eventos {array} - onde os eventos são salvos após a busca
 */
function getEvents(){
    console.log('getEvents.js -> Function getEvents')
    var eventos;
    $.post( "/getEvents")
            .done(function( data ) {
                console.log( "Eventos  " , data.events );
                eventos = arrumarData(data.events);
                $('#calendar').fullCalendar('addEventSource', eventos)
        });
}


/**
 * 
* @desc arrumarData - passa por todo o array de eventos e arruma a data para o UTF correto 
* @param {array} events - array com eventos
*/  
function arrumarData(events){
    console.log('getEvents.js -> Function arrumarData')
    var temp = events;
    for (var index = 0; index < events.length; index++) {
    temp[0].start = moment.utc(events[0].start).local().format()
    temp[0].end = moment.utc(events[0].end).local().format()
    }
    temp = events;
return events}

/**
 * Assim que o arquivo é inserido, a function é chamada para carregar os eventos
 */
getEvents();