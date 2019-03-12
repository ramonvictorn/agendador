import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
  toggleModal, 
  updateEvents,
  setValuesModal,
  setModalType,
} from '../actions/agendaAction.js';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment) 


const mapStateToProps = store => ({
  modalShow: store.agendaReduce.modalShow,
  events:store.agendaReduce.events,
  user: store.appReduce.user,
});


const mapDispatchToProps = dispatch => ({
  _toggleModal: () => dispatch(toggleModal()),
  _updateEvents: (events) => dispatch(updateEvents(events)),
  _setValuesModal : (values) => dispatch(setValuesModal(values)),
  _setModalType : (value) => dispatch(setModalType(value))
});


// const MyCalendar = ({click, events}) => {
class MyCalendar extends Component {
  constructor(){
    super()
    this.selectSlot = this.selectSlot.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.configDate = this.configDate.bind(this);
    this.onSelectEvent = this.onSelectEvent.bind(this);
  }
  
  componentDidMount(){
    this.getEvents();
  }  

  configDate (date)  {
    var newDate = new Date (date);
    return newDate;
  }
  
  selectSlot (slotInfo){
    console.log('Myselect slot props ', slotInfo)
    if(this.props.modalShow == false){
      // console.log('MyCalendar - SelectSlot false')
      this.props._toggleModal();
      this.props._setValuesModal({start : slotInfo.start})
      this.props._setValuesModal({end : slotInfo.end})
      this.props._setModalType('create');
    }else{
      // console.log('MyCalendar - Select Slot true entao n faaz nada')
    }

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
  onSelectEvent(event){
    console.log('MyCalendar - onSelectEvent')
    if(this.props.modalShow == false){
      this.props._toggleModal()
      this.props._setValuesModal({title:event.title})
      this.props._setValuesModal({start:event.start})
      this.props._setValuesModal({end:event.end})
      this.props._setValuesModal({agenda:event.agenda})
      this.props._setValuesModal({idUser:event.user})
      if(event.user == this.props.user._id){
        this.props._setModalType('edit');
      }else{
        this.props._setModalType('view');
      }
         
    }else{
      // console.log('ja ta aberta velho, nem tenta')
    }
  }
  
  render(){
    let a = {}
    let selected = {}
    return (
        <BigCalendar
          localizer={localizer}
          events={this.props.events}
          startAccessor={(event) => this.configDate(event.start)}
          endAccessor={(event)=>this.configDate(event.end)}
          defaultView='week'
          className='BigCalendar'
          selectable={true}
          onSelectSlot={(slotInfo)=>{this.selectSlot(slotInfo)}}
          onSelectEvent={(event)=>{this.onSelectEvent(event)}}
          selected={a}
          onSelecting={(selected,a,b)=>{console.log('My foo on selecting',selected, a,b); return true}}
        />
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyCalendar);