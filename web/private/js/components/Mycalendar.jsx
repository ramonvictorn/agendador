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
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import arrayFunctions from '../../../../utils/slotFunctios.js'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment) 


const mapStateToProps = store => ({
  modalShow: store.agendaReduce.modalShow,
  events:store.agendaReduce.events,
  myUser: store.appReduce.myUser,
  organizedEvents: store.agendaReduce.organizedEvents,
  modalValues : store.agendaReduce.modalValues,
  currentSchedule: store.agendaReduce.currentSchedule,
  monthsVerified: store.agendaReduce.monthsVerified,
});

const mapDispatchToProps = dispatch => ({
  _toggleModal: () => dispatch(toggleModal()),
  _updateEvents: (events,agenda) => dispatch(updateEvents(events,agenda)),
  _setValuesModal : (values) => dispatch(setValuesModal(values)),
  _setModalType : (value) => dispatch(setModalType(value)),
  _addMonthVerified : (value) => dispatch(addMonthVerified(value)),
  _updateOrganizeEvents:(events,agenda) =>dispatch(updateOrganizeEvents(events,agenda))
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
    this.navigate = this.navigate.bind(this);
  }
  
  componentDidMount(){
    console.log('did mount my calendar')
    this.getEvents();
  }  

  configDate (date)  {
    var newDate = new Date (date);
    return newDate;
  }
  openModal(type,slotInfo){
    this.props._setValuesModal({start : slotInfo.start})
    this.props._setValuesModal({end : slotInfo.end})
    let startBlock = arrayFunctions.blockSlotsStart(this.props.modalValues.start,this.props.organizedEvents)
    this.props._setValuesModal({slotsExcludeStart:startBlock})
    this.props._setModalType(type);
    this.props._toggleModal();
    let endBLock = arrayFunctions.blockSlotsEnd(this.props.modalValues.start, this.props.modalValues.end,this.props.organizedEvents)
    this.props._setValuesModal({slotsExcludeEnd:endBLock})
  }
  selectSlot (slotInfo){
    let scheduleEventsOrganized =  this.props.organizedEvents[this.props.currentSchedule.id]
    // console.log('select slots -> ', scheduleEventsOrganized)
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
        if(scheduleEventsOrganized[year]){
          if(scheduleEventsOrganized[year][month]){
            if(scheduleEventsOrganized[year][month][day]){
              //dia existe, varrer slots
              for(var i = used.inicial; i<= (used.inicial+used.linkeds-1); i++){
                if(scheduleEventsOrganized[year][month][day][i] != undefined){
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
    console.log('get eventss no my calendar')
      let serverAns;
      let data = {
        agenda:this.props.currentSchedule.id,
        day: new Date().getDate(),
        month: (new Date().getMonth()) + 1,
        year: new Date().getFullYear(),
      }
      $.ajax({
        url: '/events/getEvents',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (ans) => { serverAns = ans; },
        error: (err) => { serverAns = {err : err.responseJSON} },
        complete: () => {
            if(!serverAns.err){
              const events = serverAns.data ? serverAns.data : [];
              const agenda = this.props.currentSchedule.id;
              this.props._updateEvents(events,agenda);  
              this.props._updateOrganizeEvents(arrayFunctions.organizedEvents(events),agenda)
              this.props._addMonthVerified(data.month);
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
  navigate(dateNav){
    let dateNavegate = new Date(dateNav);
    let serverAns;
    let data = {
      agenda:this.props.currentSchedule.id,
      day: new Date(dateNav).getDate(),
      month: (new Date(dateNav).getMonth()) + 1,
      year: new Date(dateNav).getFullYear(),
    }
    if(this.props.monthsVerified.indexOf(dateNavegate.getMonth()+1) == -1){
      $.ajax({
        url: '/events/getEvents',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (ans) => { serverAns = ans; },
        error: (err) => { serverAns = {err : err.responseJSON} },
        complete: () => {
            if(!serverAns.err){
              const events = serverAns.data ? serverAns.data : [];
              const agenda = this.props.currentSchedule.id;
              this.props._updateEvents(events,agenda);  
              this.props._updateOrganizeEvents(arrayFunctions.organizedEvents(events),agenda)
              this.props._addMonthVerified(data.month);
            }else{
              alert('ERROR MY CALENDAR - getEvents')
            } 
        }
      });
    }else{
      // console.log('esse mes ja tem') nada
    }
  }

  render(){
    console.log('MyCaledar Render')
    let events;
    let a;
    let selected = {}
    if(this.props.events[this.props.currentSchedule.id] != undefined){
      events = this.props.events[this.props.currentSchedule.id];
    }else{
      events = []
    }
    return (
        <BigCalendar
          localizer={localizer}
          events={events}
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
          views={{
            month: true,
            week: true,
            day: true,
          }}
          toolbar={true}
          onNavigate={(date)=>this.navigate(date)}
        />
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyCalendar);