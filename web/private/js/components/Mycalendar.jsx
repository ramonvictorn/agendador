import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment) 

const MyCalendar = ({events}) => {

  const configDate = (date)=> {
    var newDate = new Date (date);
    console.log('date ', newDate);
    return newDate;
}
  const selectSlot = (slotInfo)=>{
    console.log('select slot',slotInfo)
  }
  
  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor={(event) => configDate(event.start)}
        endAccessor={(event)=>configDate(event.end)}
        defaultView='week'
        className='BigCalendar'
        selectable={true}
        onSelectSlot={(slotInfo)=>selectSlot(slotInfo)}
      />
    </div>
  )
}

export default MyCalendar;