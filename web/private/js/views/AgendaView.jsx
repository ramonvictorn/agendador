import React from 'react';
import Calendar from '../components/Calendar.jsx';
import MyCalendar from '../components/Mycalendar.jsx';
import ModalEvent from '../components/ModalEvent.jsx';
const AgendaView = ()=>{
    let events = [
        {
          title: 'Ramon',
          start: (1549130434)*1000, 
          end: (1549144834)*1000,
          allDay: false,
          resource: false,
        }
      ]
    return (
        <div>
            <h1>Página da agenda mano</h1>
            <ModalEvent></ModalEvent>
            {/* <Calendar/> */}
            <h1>AGR É O BIG</h1>
            <MyCalendar events={events}/>
        </div>
    )
}

export default AgendaView;