import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
  toggleModal, 
  updateEvents,
} from '../actions/agendaAction.js';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment) 


const mapStateToProps = store => ({
  modalShow: store.agendaReduce.modalShow,
  events:store.agendaReduce.events,
});


const mapDispatchToProps = dispatch => ({
  _toggleModal: () => dispatch(toggleModal),
  _updateEvents: (events) => dispatch(updateEvents(events)),
});


// const MyCalendar = ({click, events}) => {
class MyCalendar extends Component {
  constructor(){
    super()
    this.selectSlot = this.selectSlot.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.configDate = this.configDate.bind(this);
  }
  
  componentDidMount(){
    this.getEvents();
  }  

  configDate (date)  {
    var newDate = new Date (date);
    return newDate;
  }
  
  selectSlot (slotInfo){
    this.props._toggleModal();
    // this.props._updateEvents();
    console.log('select slot', slotInfo)
  }

  getEvents(){
    let serverAns;
    $.ajax({
      url: '/events/getEvents',
      dataType: 'json',
      type: 'POST',
      contentType: 'application/json',
      // data: JSON.stringify(data),
      success: (ans) => { serverAns = ans; },
      error: (err) => { serverAns = {err : err.responseJSON} },
      complete: () => {
          if(!serverAns.err){
              const events = serverAns.data ? serverAns.data : [];
              this.props._updateEvents(events);  
          } 
      }
  });
  }
  
  render(){
    return (
      <div>
        <BigCalendar
          localizer={localizer}
          events={this.props.events}
          startAccessor={(event) => this.configDate(event.start)}
          endAccessor={(event)=>this.configDate(event.end)}
          defaultView='week'
          className='BigCalendar'
          selectable={true}
          onSelectSlot={(slotInfo)=>{console.log('selecionou'); this.selectSlot(slotInfo)}}
        />
      </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyCalendar);