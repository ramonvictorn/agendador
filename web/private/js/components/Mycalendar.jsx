import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment) 

const MyCalendar = ({click, events}) => {

  const configDate = (date)=> {
    var newDate = new Date (date);
    return newDate;
}
  const selectSlot = (slotInfo)=>{
    click()
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