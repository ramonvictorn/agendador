var t;

$(function() {

    // page is now ready, initialize the calendar...
  
    $('#calendar').fullCalendar({
        slotDuration: '00:30:00',
        slotLabelInterval:'01:00',
        defaultView: 'agendaWeek',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
          },
          locale: 'pt-br',
          timeFormat: 'H(:mm)',
          displayEventEnd: true,
          weekNumbers: true,
          eventLimit: true, // allow "more" link when too many events
          events: [
            {
              title  : 'reserva 1',
              start  : '2018-09-14T12:30:00'
            },
            {
              title  : 'reserva 2',
              start  : '2018-09-14T16:30:00',
              end : '2018-09-14T18:30:00'
            },
            {
              title  : 'reserva 3',
              start  : '2018-09-14T18:30:00',
              end : '2018-09-14T19:30:00'
            }
          ],
          height: 600,
          weekends:false,
          timezone: 'America/Sao_Paulo',
          //Quando envento click no evento
          eventClick: function(eventObj) {
            if (eventObj.url) {
              alert(
                'Clicked ' + eventObj.title + '.\n' +
                'Will open ' + eventObj.url + ' in a new tab'
              );
      
              window.open(eventObj.url);
      
              return false; // prevents browser from following link in current tab.
            } else {
              alert('Evento ' + eventObj.title + ' Ás ' + eventObj.start);
            }
          },
          
          
    });
});


