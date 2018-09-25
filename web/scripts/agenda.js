var t;

$(function() {

    // page is now ready, initialize the calendar...
  
    $('#calendar').fullCalendar({
      editable: false, // Don't allow editing of events
      handleWindowResize: true,
      weekends: false, // Hide weekends
      header: true, // Hide buttons/titles
      minTime: '07:00:00', // Start time for the calendar
      maxTime: '22:00:00', // End time for the calendar
      displayEventTime: true, // Display event time
      resources: 'https://fullcalendar.io/demo-resources.json',
      //finish designaddResource
      selectable:true,
        slotDuration: '00:30:00',
        slotLabelInterval:'01:00',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
          },
          defaultView: 'agendaWeek', // Only show week view
          
          locale: 'pt-br',
          timeFormat: 'H(:mm)',
          displayEventEnd: true,
          weekNumbers: true,
          selectOverlap:false,
          eventLimit: true, // allow "more" link when too mfalseany events
          events: [
            {
              title  : 'reserva 1',
              start  : '2018-09-25T16:30:00',
              end  : '2018-09-25T18:30:00',
              description: 'Reunião com adm',
              color: '#C2185B'
            },
            {
              title  : 'reserva 2',
              start  : '2018-09-25T18:30:00',
              end : '2018-09-25T19:30:00',
              description: 'Reunião com dev',
              color: '#Cdcdcd'
            },
            {
              title  : 'reserva 3',
              start  : '2018-09-25T19:30:00',
              end : '2018-09-25T21:30:00',
              color: 'pink'
            }
          ],
          height: 500,
          weekends:false,
          timezone: 'America/Sao_Paulo',
        
        // Events Mouse
          dayClick: function(date) {
            console.log('clicked ' + date.format());
          },

          // Alguma data é selecionada
          select: function(startDate, endDate,eventObj) {
            console.log('selected ' + startDate.format() + ' to ' + endDate.format());
            
          },

          // Quando é selecionado um horário com evento
          selectOverlap: function(event) {
            console.log('ja tem evento cadastrado neste horário')
            return event.rendering === 'background';
          },

          // Click sobre evento
          eventClick: function(calEvent, jsEvent, view) {
            $('.modalPequena').show(); //mostrar a modal
            $('.pequenaTittle').text(calEvent.title);
            $('.inicio').text(calEvent.start.format('DD/MM/YYY HH:mm:ss'));
            $('.fim').text(calEvent.end.format('DD/MM/YYY HH:mm:ss'));
            $('.titulo').text(calEvent.description);
            $('.pequenaBody').css('background-color', calEvent.color)
            console.log(calEvent)
          },       
          
    });

    
});


