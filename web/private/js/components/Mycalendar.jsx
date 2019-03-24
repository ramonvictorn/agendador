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

import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = BigCalendar.momentLocalizer(moment) 


const mapStateToProps = store => ({
  modalShow: store.agendaReduce.modalShow,
  events:store.agendaReduce.events,
  user: store.appReduce.user,
  organizeEvents: store.agendaReduce.organizeEvents,
});


const mapDispatchToProps = dispatch => ({
  _toggleModal: () => dispatch(toggleModal()),
  _updateEvents: (events) => dispatch(updateEvents(events)),
  _setValuesModal : (values) => dispatch(setValuesModal(values)),
  _setModalType : (value) => dispatch(setModalType(value)),
  _updateOrganizeEvents:(events) =>dispatch(updateOrganizeEvents(events))
});


// const MyCalendar = ({click, events}) => {
class MyCalendar extends Component {
  constructor(){
    super()
    this.selectSlot = this.selectSlot.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.configDate = this.configDate.bind(this);
    this.onSelectEvent = this.onSelectEvent.bind(this);
    this.setStartTime = this.setStartTime.bind(this);
    this.organizarEvents = this.organizarEvents.bind(this);
    this.onSelecting = this.onSelecting.bind(this);
    this.calcSlot = this.calcSlot.bind(this)
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
      console.log('MyCalendar - SelectSlot false',this.props.organizeEvents)
      // if(this.props.organizeEvents['2019']['03']['15']['03'] != true){
      //   console.log('deu true então tem evento')
      // }else{
      //   console.log('pode criar q n tem evento')
      // }
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
              this.organizarEvents()
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

  setStartTime(hour){
    var dateNow = new Date();
    var day = dateNow.getDate()
    var month = dateNow.getMonth();
    var year = dateNow.getFullYear()
    return new Date(year,month,day,hour,0,0);
  }
  // set in store events[year][month][day][hour][minutes]
  organizarEvents(){
    var events = this.props.events;
    let organizedEvents = {};
    // let diaI,mesI,anoI,horaI;
    // let diaF,mesF,anoF,horaF;
    events.map((ele)=>{
      //create year
      if(organizedEvents[ele.year] != undefined){ 
      }else{
        organizedEvents[ele.year] = {}
      }
      //create month
      if(organizedEvents[ele.year][ele.month] != undefined){
      }else{
        organizedEvents[ele.year][ele.month] = {}
      }
      //create day
      if(organizedEvents[ele.year][ele.month][ele.dayStart] != undefined){
      }else{
        organizedEvents[ele.year][ele.month][ele.dayStart] = []
      }
      //create array slots
      let slots = this.calcSlot(ele.start,ele.end)
      // console.log('before', organizedEvents[ele.year][ele.month][ele.dayStart][slots['inicial']])
      if(organizedEvents[ele.year][ele.month][ele.dayStart][slots['inicial']] == undefined){
        organizedEvents[ele.year][ele.month][ele.dayStart][slots['inicial']] = ele;
        // console.log('linkeds = ',slots['linkeds'], "slots['inicial']", slots['inicial'])
        // console.log(slots['inicial'] + slots['linkeds'] - 1)
        for(var i = 1; i < slots['linkeds']; i++){
          let calc = slots['inicial'] + i
          organizedEvents[ele.year][ele.month][ele.dayStart][calc] = {linked:slots['inicial']};
        }
      }
      

    })
    this.props._updateOrganizeEvents(organizedEvents)
    console.log('fim do organize ', organizedEvents)
  }

  calcSlot(start,end){
    let startParam = new Date(start)
    let endParam = new Date(end)
    let useds = [];
    let calc = startParam.getHours() * 2
    startParam.getMinutes() >= 1 ? calc =  calc + 1 : calc = calc
    useds[calc] = true;
    let used = {}
    used['inicial'] = calc

    //calc links slots
    let hourStart = startParam.getHours()
    let MinuteStart = startParam.getMinutes()
    let hourEnd = endParam.getHours()
    let MinuteEnd = endParam.getMinutes()

    let slotHour = 0;
    let slotMinutes = 0
    if(hourEnd - hourStart <= 0){
      slotHour = 0;
      slotMinutes = 1;
      //dura menos de 30min
    }else{
      //dura mais de 30 min
      //simulacao 16:30     || 19:00
      if(MinuteEnd == 30 || MinuteStart == 30){
        slotHour =  hourEnd - hourStart; //3
        MinuteEnd == 30 ? slotHour = slotHour +1: ''
        MinuteStart == 30 ? slotHour = slotHour +1: '' //4
        if(MinuteEnd == 30 && MinuteStart == 30){
          slotHour =  (hourEnd - hourStart)*2;
        }else{
          slotHour =  ((hourEnd - hourStart)*2) - 1;
        }
      }else{
        slotHour = (hourEnd - hourStart)*2
      }
      // slotMinutes = MinuteEnd >= 30 ? slotMinutes = 1 : slotMinutes = 0;
      // slotMinutes = MinuteStart >= 30 ? slotMinutes = slotMinutes + 1 : slotMinutes = 0
    }
    // console.log('slots during event = ', slotHour+slotMinutes, 'no evento ', hourStart)
    
    used['linkeds'] =  slotHour+slotMinutes
    return used;
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