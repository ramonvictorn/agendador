import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
  toggleModal, 
  updateEvents,
  setValuesModal,
  setModalType,
  updateOrganizeEvents,
  addMonthVerified,
} from '../actions/agendaAction.js';

import { Calendar, momentLocalizer } from '../../../../utils/react-big-calendar/dist/react-big-calendar.min.js'
import moment from 'moment'
const localizer = momentLocalizer(moment) // or globalizeLocalizer


import arrayFunctions from '../../../../utils/slotFunctios.js'
import 'react-big-calendar/lib/css/react-big-calendar.css'

class MyCalendar extends Component {
  constructor(){
    super()

  }
  render(){
    console.log('MyCaledar Render')
    return (
        <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
    />
    )
  }
}


export default connect()(MyCalendar);