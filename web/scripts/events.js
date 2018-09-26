
$(function() {
    
    $('#calendar').fullCalendar('addEventSource',
        [
            {
                title  : 'reserva 1',
                start  : '2018-09-25T16:30:00',
                end  : '2018-09-25T18:30:00',
                description: 'Reunião com adm',
                color: '#C2185B',
                user:'ramon'
            },
            {
                    title  : 'reserva 3',
                    start  : '2018-09-25T19:30:00',
                    end : '2018-09-25T21:30:00',
                    color: 'pink',
                    user:'joao'
            }
    ]
    )

})

//     [ {
//     title  : 'reserva 1',
//     start  : '2018-09-25T16:30:00',
//     end  : '2018-09-25T18:30:00',
//     description: 'Reunião com adm',
//     color: '#C2185B',
//     user:'ramon'
//   },
//     title  : 'reserva 2',
//     start  : '2018-09-25T18:30:00',
//     end : '2018-09-25T19:30:00',
//     description: 'Reunião com dev',
//     color: '#Cdcdcd',
//     user: 'Pedro'
//   },
//   {
//     title  : 'reserva 3',
//     start  : '2018-09-25T19:30:00',
//     end : '2018-09-25T21:30:00',
//     color: 'pink',
//     user:'joao'
//   }
// ] 

