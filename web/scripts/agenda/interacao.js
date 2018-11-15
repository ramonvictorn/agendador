
$( document ).ready(function() {
    clickDia();
    selectDay();
    clickEvento();
    selecionadoJaExiste();
})

/**
 * @function clickDia - Atrela o evento de click ao dia a função
 */
function clickDia(){
    //console.log('[interacao.js] - clickDia');
    $('#calendar').fullCalendar('option', 'dayClick', function(date) {
            console.log('[interacao.js] - evento - Click ' + date.format('DD/MM/YYYY HH:mm:ss'));
            $('.modalCadastro').show();
            $('.modalCadastro').css('opacity', 1);
           
        });
}

function selectDay(){
    console.log('[interacao.js] - selectDay');
    $('#calendar').fullCalendar('option', 'select', function(startDate, endDate,eventObj) {
        console.log('interacao.js - evento - selec');
            var inicio = $('.cadastroInicio');
            inicio.val(startDate.format('DD/MM/YYYY HH:mm:ss'));
            $('.cadastroFim').val(endDate.format('DD/MM/YYYY HH:mm:ss'))
            console.log('inicio ', inicio)
            $('.modalCadastro').show();
        });
}

/**
 * @function clickEvento - Atrela o evento de click em uma reserva a uma ação
 */
function clickEvento(){
    //console.log('[interacao.js] - clickEvento');
    $('#calendar').fullCalendar('option', 'eventClick', function(calEvent, jsEvent, view) {
            console.log('[interacao.js] Evento -> Click sobre evento');
            $('.modalPequena').show(); //mostrar a modal
            $('.pequenaTittle').text(calEvent.title);
            $('.inicio').text(calEvent.start.format('DD/MM/YYYY HH:mm:ss'));
            $('.fim').text(calEvent.end.format('DD/MM/YYY HH:mm:ss'));
            $('.titulo').text(calEvent.description);
            $('.pequenaBody').css('background-color', calEvent.color)
            $('.usuario').text(calEvent.user)
        });
}

/**
 * @function selecionadoJaExiste - Atrela o evento do usuário selecionar uma data
 * com reserva já existente a uma ação
 */
function selecionadoJaExiste(){
    //console.log('[interacao.js] - selecionadoJaExiste');
    $('#calendar').fullCalendar('option', 'selectOverlap', function(event) {
            console.log('[interacao.js] Evento -> Selecionado Já Existe');
            $('.modalPequena').show(); //mostrar a modal
            $('.pequenaTittle').text("Reserva não é possivel");
            return event.rendering === 'background';
        });
}




// BACKUP NÃO APAGAR------------------------------

// dayClick: function(date) {
//     console.log('clicked ' + date.format('DD/MM/YYYY HH:mm:ss'));
//     $('.modalCadastro').show();
//     $('.modalCadastro').css('opacity', 1);
   
// },

// select: function(startDate, endDate,eventObj) {
//     console.log('selected aqui ' + startDate.format() + ' to ' + endDate.format());
//     var inicio = $('.cadastroInicio');
//     inicio.val(startDate.format('DD/MM/YYYY HH:mm:ss'));
//     $('.cadastroFim').val(endDate.format('DD/MM/YYYY HH:mm:ss'))
//     console.log('inicio ', inicio)
//     $('.modalCadastro').show();
// },

//  // Click sobre evento
//  eventClick: function(calEvent, jsEvent, view) {
//     $('.modalPequena').show(); //mostrar a modal
//     $('.pequenaTittle').text(calEvent.title);
//     $('.inicio').text(calEvent.start.format('DD/MM/YYYY HH:mm:ss'));
//     $('.fim').text(calEvent.end.format('DD/MM/YYY HH:mm:ss'));
//     $('.titulo').text(calEvent.description);
//     $('.pequenaBody').css('background-color', calEvent.color)
//     $('.usuario').text(calEvent.user)
//     console.log(calEvent, 'start: ',calEvent.start.format('DD/MM/YYYY HH:mm:ss'))
//   },   

// Quando é selecionado um horário com evento já cadastrado
// selectOverlap: function(event) {
//     console.log('ja tem evento cadastrado neste horário')
//     $('.modalPequena').show(); //mostrar a modal
//     $('.pequenaTittle').text("Reserva não é possivel");
//     return event.rendering === 'background';
//   },