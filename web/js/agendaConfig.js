

var t;
/**
 *  @description function Configura as opções da agenda
 */
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
    selectable:true,
    height: 500,
    weekends:false,
    timezone: 'America/Sao_Paulo',
    slotDuration: '00:30:00',
    slotLabelInterval:'01:00',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
    },
    defaultView: 'agendaWeek', 
    locale: 'pt-br',
    timeFormat: 'H(:mm)',
    displayEventEnd: true,
    weekNumbers: true,
    selectOverlap:false,
    eventLimit: true, 
          
    });

    
});


