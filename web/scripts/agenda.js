var t;

$(function() {

    // page is now ready, initialize the calendar...
  
    $('#calendar').fullCalendar({
      //config for new design
      // editable: false, // Don't allow editing of events
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
              start  : '2018-09-14T12:30:00',
              description: 'description for All Day Event',
              color: '#C2185B'
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
          height: 500,
          weekends:false,
          timezone: 'America/Sao_Paulo',
          //Quando envento click no evento
          // eventClick: function(eventObj) {
          //   if (eventObj.url) {
          //     alert(
          //       'Clicked ' + eventObj.title + '.\n' +
          //       'Will open ' + eventObj.url + ' in a new tab'
          //     );
      
          //     window.open(eventObj.url);
      
          //     return false; // prevents browser from following link in current tab.
          //   } else {
          //     console.log('Evento ' + eventObj.title + ' Ás ' + eventObj.start._i, eventObj);
          //     console.log('Evento as ' , eventObj.start)
          //   }
          // },

          dayClick: function(date) {
            console.log('clicked ' + date.format());
          },
          select: function(startDate, endDate,eventObj) {
            console.log('selected ' + startDate.format() + ' to ' + endDate.format());
            
          },
          selectOverlap: function(event) {
            console.log('ja tem evento cadastrado neste horário')
            return event.rendering === 'background';
          },
          eventClick: function(calEvent, jsEvent, view) {

            alert('Event: ' + calEvent.title);
            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            alert('View: ' + view.name);
        
            // change the border color just for fun
            $(this).css('border-color', 'red');
        
          },
          groupByResource: true,
          resources: [
          { id: 'a', title: 'Room A' },
          { id: 'b', title: 'Room B' }
          ],
         
          
          
          
    });

    
});


