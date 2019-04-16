import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
  toggleModal, 
  updateEvents,
  setValuesModal,
  setModalType,
  updateOrganizeEvents,
} from '../actions/agendaAction.js';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import arrayFunctions from '../../../../utils/slotFunctios.js'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment) 


const mapStateToProps = store => ({
  modalShow: store.agendaReduce.modalShow,
  events:store.agendaReduce.events,
  myUser: store.appReduce.myUser,
  organizeEvents: store.agendaReduce.organizeEvents,
  modalValues : store.agendaReduce.modalValues,
});


const mapDispatchToProps = dispatch => ({
  _toggleModal: () => dispatch(toggleModal()),
  _updateEvents: (events) => dispatch(updateEvents(events)),
  _setValuesModal : (values) => dispatch(setValuesModal(values)),
  _setModalType : (value) => dispatch(setModalType(value)),
  _updateOrganizeEvents:(events) =>dispatch(updateOrganizeEvents(events))
});

class MyCalendar extends Component {
  constructor(){
    super()
    this.selectSlot = this.selectSlot.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.configDate = this.configDate.bind(this);
    this.onSelectEvent = this.onSelectEvent.bind(this);
    this.setStartTime = this.setStartTime.bind(this);
    this.onSelecting = this.onSelecting.bind(this);
    this.openModal =  this.openModal.bind(this);
  }
  
  componentDidMount(){
    this.getEvents();
  }  

  configDate (date)  {
    var newDate = new Date (date);
    return newDate;
  }
  openModal(type,slotInfo){
    this.props._setValuesModal({start : slotInfo.start})
    this.props._setValuesModal({end : slotInfo.end})
    let startBlock = arrayFunctions.blockSlotsStart(this.props.modalValues.start,this.props.organizeEvents)
    this.props._setValuesModal({slotsExcludeStart:startBlock})
    this.props._setModalType(type);
    this.props._toggleModal();
    let endBLock = arrayFunctions.blockSlotsEnd(this.props.modalValues.start, this.props.modalValues.end,this.props.organizeEvents)
    this.props._setValuesModal({slotsExcludeEnd:endBLock})
  }
  selectSlot (slotInfo){
    let year,month,hourStart,HourFinish, minutesStart,minutesFinish,day;
    year = slotInfo.start.getFullYear();
    day = slotInfo.start.getDate();
    month = slotInfo.start.getMonth() + 1;
    hourStart = slotInfo.start.getHours();
    HourFinish = slotInfo.end.getHours();
    minutesStart = slotInfo.start.getMinutes();
    minutesFinish = slotInfo.end.getMinutes();
    let can = true;
    let used = arrayFunctions.getSlots(slotInfo.start,slotInfo.end);
    if(this.props.modalShow == false){
        if(this.props.organizeEvents[year]){
          if(this.props.organizeEvents[year][month]){
            if(this.props.organizeEvents[year][month][day]){
              //dia existe, varrer slots
              for(var i = used.inicial; i<= (used.inicial+used.linkeds-1); i++){
                if(this.props.organizeEvents[year][month][day][i] != undefined){
                    can = false;
                    alert('Selecione outro horário, já existe reserva')
                    break
                  }
                }
                  //pode abrir a modal
                  if(can == true){
                    this.openModal('create',slotInfo)
                  }
            }else{
              this.openModal('create',slotInfo)
            }
          }else{
            this.openModal('create',slotInfo)
          }
        }else{
          this.openModal('create',slotInfo)
        }
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
              this.props._updateOrganizeEvents(arrayFunctions.organizeEvents(this.props.events))
          }else{
            alert('ERROR MY CALENDAR - getEvents')
          } 
      }
    });
  }
  onSelectEvent(event){
    // console.log('MyCalendar - onSelectEvent')
    if(this.props.modalShow == false){
      this.props._toggleModal()
      this.props._setValuesModal({title:event.title})
      this.props._setValuesModal({start:event.start})
      this.props._setValuesModal({end:event.end})
      this.props._setValuesModal({agenda:event.agenda})
      this.props._setValuesModal({idUser:event.user})
      this.props._setValuesModal({idEvent:event._id})
      if(event.user == this.props.myUser){
        this.props._setModalType('edit');
      }else{
        this.props._setModalType('view');
      }
         
    }else{
      // console.log('ja ta aberta velho, nem tenta')
    }
  }

  setStartTime(hour){
    var dateNow = new Date();
    var day = dateNow.getDate()
    var month = dateNow.getMonth();
    var year = dateNow.getFullYear()
    return new Date(year,month,day,hour,0,0);
  }

  onSelecting(selected){
    // console.log('selected ', selected)
    return true
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
          ignoreEvents={false}
          step={30}
          timeslots={2}
          className='BigCalendar'
          selectable={true}
          onSelectSlot={(slotInfo)=>{this.selectSlot(slotInfo)}}
          onSelectEvent={(event)=>{this.onSelectEvent(event)}}
          selected={a}
          min={this.setStartTime(7)}
          max={this.setStartTime(22)}
          onSelecting={(selected)=>this.onSelecting(selected)}
        />
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyCalendar);