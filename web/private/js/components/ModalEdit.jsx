import React, {Component} from 'react';
import {Modal, Button, Form, Row,Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import { 
    toggleModal,
    setValuesModal,
    updateEvents,
    setModalType,
} from '../actions/agendaAction.js'

import log from '../../../../utils/logger.js'
import logar from '../../../../utils/teste.js'
import slotFunctions from '../../../../utils/slotFunctios.js'

class ModalEdit extends Component {
    constructor(){
        super()
        this.slotEventSelec;
        this.getValues = this.getValues.bind(this);
        this.insertEvent = this.insertEvent.bind(this);
        this.getEvents = this.getEvents.bind(this);
        this.slotsOnModalPicket = this.slotsOnModalPicket.bind(this);
        this.calcSlot = this.calcSlot.bind(this);
        this.calcHour = this.calcHour.bind(this);
        this.defineEndOnModal = this.defineEndOnModal.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this)
        new log()
        new logar()
        console.log('ramon teste' ,slotFunctions.getSlots())
    }
    getValues(value,type){
        const eventObj = {
            start : type == 'start' ? value : this.props.modalValues.start,
            end : type == 'end' ? value : this.props.modalValues.end,
            title : type == 'title' ? value : this.props.modalValues.title,
            agenda : type == 'agenda' ? value : this.props.modalValues.agenda,
        }
        this.props._setValuesModal(eventObj)
    }
    insertEvent(eventObj){  
        let serverAns = {}
        $.ajax({
            url: '/events/insertEvent',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(eventObj),
            success: (ans) => { serverAns = ans; },
            error: (err) => { serverAns = {err : err.responseJSON} },
            complete: () => {
                if(!serverAns.err){
                    console.log('ajax insert event') 
                    this.getEvents()
                    // this.props._toggleModal()
                } 
            }
        });
    }
    getEvents(){
        let serverAns;
        $.ajax({
          url: '/events/getEvents',
          dataType: 'json',
          type: 'POST',
          contentType: 'application/json',
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
    // block some slot on end event
    defineEndOnModal(trocou){
        // let value = new Date(this.props.modalValues.start)
        let value = new Date(trocou)
        console.log('value é ',value ,this.props.modalValues.start)
        let inicial;
        let year = value.getFullYear();
        let month = value.getMonth()+1;
        let day = value.getDate();
        let lastToFinish;
        let arrayBlock = []
        // this.props._setValuesModal({start: value})
        //ver qual o slot inicial
        // let startParam = new Date(start)
        // let endParam = new Date(end)
        // let calculed = {};

        //calc links slots
        if(value.getMinutes() == 30){
            console.log('hora com 30 min')
            inicial = (value.getHours()*2) + 1
        }else{
            inicial = value.getHours()*2
        }
        console.log('inicial slot is ',inicial)
        for(var i = inicial; i<=  48; i++){
            // if(this.props.organizeEvents[year][month][day][i] != undefined){ versao with bug undefined day
            // if((((this.props.organizeEvents[year])||{})[month]||{})[day]||{} !=undefined){ version 2
            if(Object.keys((((this.props.organizeEvents[year])||{})[month]||{})[day]||{}).length >= 1 ){
                // console.log('tem evento no meio i-> ',i, this.props.organizeEvents[year][month][day][i])
                // console.log('ramon' , (((this.props.organizeEvents[year])||{})[month]||{})[day]||{})
                console.log('teste leng ', Object.keys((((this.props.organizeEvents[year])||{})[month]||{})[day]||{}).length)
                lastToFinish = i +1
                break
            }else{
                lastToFinish = 48;
            }
        }
        // console.log('lastToFinish ',lastToFinish)
        for(var t = lastToFinish; t <= 48; t++){
            if(t%2 == 0){
                //hora termina com 00
                arrayBlock.push(new Date(new Date(((new Date().setHours(t/2)))).setMinutes(0)))
            }else{
                arrayBlock.push(new Date(new Date(((new Date().setHours((t/2)-0.5)))).setMinutes(30)))
            }
        }
        // console.log('block end ', lastToFinish , arrayBlock)
        this.props._setValuesModal({slotsExcludeEnd: arrayBlock})
        // let temp = new Date(value.setMinutes(value.getMinutes()+30))
        // console.log('temp 1 ', new Date(value.setMinutes(value.getMinutes()+30)))
        // this.props._setValuesModal({end: value})
       return null;
        
    }

    slotsOnModalPicket(){
        console.log('oi ', this.props.modalValues)
        let day = (new Date(this.props.modalValues.start)).getDate()
        let month = (new Date(this.props.modalValues.start)).getMonth() +1
        let year = (new Date(this.props.modalValues.start)).getFullYear()
        let hourStart = (new Date(this.props.modalValues.start)).getHours()
        let minutesStart = (new Date(this.props.modalValues.start)).getMinutes()
        let hourEnd = (new Date(this.props.modalValues.end)).getHours()
        let minutesEnd = (new Date(this.props.modalValues.end)).getMinutes()
        let toVerify = this.calcSlot(new Date(this.props.modalValues.start),new Date(this.props.modalValues.end))
        console.log('verify ',toVerify)
        let slots = []

        // console.log('foo teste slot ',toVerify,this.props.organizeEvents[year][month][day])//slots useds in this day
        if(this.props.organizeEvents[year][month][day] != undefined){
            for(var a = 0; a<=48; a++){
                this.props.organizeEvents[year][month][day]
                // console.log('looping nesse dia ', this.props.organizeEvents[year][month][day])
                if(this.props.organizeEvents[year][month][day][a] != undefined){
                    slots.push(a)
                }
            }
            // console.log('slots selecionados ', slots)
            let finish = this.calcHour(slots)
            // console.log('horas finais dos slots ',finish)
            this.props._setValuesModal({slotsExclude: finish})
        }

    }
    //recebe array de slot e retona a ro de inicio e fim de cada
    calcHour(slots){
        let hours = [];
        let hourStart ;
        let minutesStart;
        let hourEnd;
        let minutesEnd;

        slots.map((ele)=>{
            // console.log('map nos slots', ele/2)
            if(ele%2 == 0){
                //hora termina com 00
                hours.push(new Date(new Date(((new Date().setHours(ele/2)))).setMinutes(0)))
            }else{
                hours.push(new Date(new Date(((new Date().setHours((ele/2)-0.5)))).setMinutes(30)))
            }
        })

        return hours;
    }
    // retorna slot inicial e linkeds
    calcSlot(start,end){
        console.log('Calc slot modal edit')
        let startParam = new Date(start)
        let endParam = new Date(end)
        let calculed = {};

        //calc links slots
        let inicialSlot; //slot inicial do evento
        let linkedSlots;; //total de slot que o evento usa
        let slotHour = 0;
        let slotMinutes = 0;
        let hourStart = startParam.getHours()
        let MinuteStart = startParam.getMinutes()
        let hourEnd = endParam.getHours()
        let MinuteEnd = endParam.getMinutes()


        if(MinuteStart != 0 || MinuteEnd != 0){
        if(MinuteStart != 0){
            inicialSlot = (hourStart*2) + 1;
            linkedSlots = ((hourEnd - hourStart)*2) - 1;
        }
        if(MinuteEnd != 0){
            inicialSlot == undefined ? inicialSlot = (hourStart*2) : '';
            linkedSlots == undefined 
            ? linkedSlots = ((hourEnd - hourStart)*2) + 1
            : linkedSlots = linkedSlots + 1
        }
        

        }else{
        inicialSlot = (hourStart*2);
        linkedSlots = (hourEnd - hourStart)*2;
        }
        console.log('inicialSlot ', inicialSlot, linkedSlots )
        calculed['inicial'] = inicialSlot; //Ok
        calculed['linkeds'] = linkedSlots;
        return calculed
    }

    deleteEvent(id){
        console.log('deleteEvent')
        let serverAns = {}
        let data = {id:this.props.modalValues.idEvent}
        $.ajax({
            url: '/events/deleteEvent',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: (ans) => { serverAns = ans; },
            error: (err) => { serverAns = {err : err.responseJSON} },
            complete: () => {
                if(!serverAns.err){
                    console.log('ajax delete event') 
                    this.getEvents()
                    // this.props._toggleModal()
                } 
            }
        });

    }
    componentDidMount(){
        console.log('componentDidMount ModalEdit')
        this.slotsOnModalPicket()
        this.defineEndOnModal(this.props.modalValues.start)
    }
    
    render(){
        console.log('render ModalEdit -> props show', this.props);
        // this.props.modalType != 'view' ?this.slotsOnModalPicket() : ''
        let title;
        if(this.props.modalType == 'edit'){
            title = 'Editar'
        }else{
            title = "Cadastrar"
        }
        return(
            <React.Fragment>
                 <Modal
                        show={this.props.modalShow}
                        onHide={()=>{console.log('hide da modal edit'); if(this.props.modalShow == true){this.props._toggleModal()}}}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton >
                            <Modal.Title id="contained-modal-title-vcenter">
                                {title} reserva
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Título</Form.Label>
                                        <Form.Control type="text" placeholder="Digite o nome da reserva" onChange={ e => this.getValues(e.target.value, 'title')}  defaultValue={this.props.modalValues.title}/>
                                    </Form.Group>
    
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Sala</Form.Label>
                                        <Form.Control as="select" title=" Escolha uma agenda:" value={this.props.modalValues.agenda} onChange={(e)=>this.getValues(e.target.value,'agenda')}>
                                            <option value={501}>501 - Reunião.</option>
                                            <option  disabled value={500}>500 - Estudio</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
    
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Inicio </Form.Label>
                                        <DatePicker
                                        //  locale="pt"
                                        readOnly={false}
                                        className='picker form-control'
                                        selected={new Date(this.props.modalValues.start)}
                                        onChange={(value)=>{this.getValues(value,'start');this.defineEndOnModal(value);console.log('on change', value)}}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="Hora"
                                        minTime={new Date(new Date(((new Date().setHours(7)))).setMinutes(0))}
                                        maxTime={new Date(new Date(((new Date().setHours(22)))).setMinutes(0))}
                                        // excludeTimes={[new Date(new Date(((new Date().setHours(10)))).setMinutes(0))]}
                                        excludeTimes={this.props.modalValues.slotsExclude}
                                    />
                                    </Form.Group>
    
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Fim</Form.Label>
                                        <DatePicker
                                        className='picker form-control'
                                        readOnly={false}
                                        selected={new Date(this.props.modalValues.end)}
                                        onChange={(value)=>{this.getValues(value,'end')}}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="Hora"
                                        minTime={new Date(new Date(((new Date().setHours(7)))).setMinutes(0))}
                                        maxTime={new Date(new Date(((new Date().setHours(22)))).setMinutes(0))}
                                        excludeTimes={this.props.modalValues.slotsExcludeEnd}
                                    />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={()=>this.deleteEvent()} >Deletar Evento</Button>
                            <Button onClick={()=>this.insertEvent(this.props.modalValues)} >Save</Button>
                        </Modal.Footer>
                    </Modal> 
            </React.Fragment>
        )
    }
}


  const mapStateToProps = store => ({
    modalShow: store.agendaReduce.modalShow,
    modalValues : store.agendaReduce.modalValues,
    modalType : store.agendaReduce.modalType,
    organizeEvents: store.agendaReduce.organizeEvents,
  });

const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal()),
    _setValuesModal : (values) => dispatch(setValuesModal(values)),
    _updateEvents: (events) => dispatch(updateEvents(events)),
    _setModalType: (value) => dispatch(setModalType(value)),
});


// export default ModalEvent;
export default connect(mapStateToProps,mapDispatchToProps)(ModalEdit);