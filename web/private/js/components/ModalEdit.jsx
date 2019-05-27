import React, {Component} from 'react';
import {Modal, Button, Form, Row,Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import { 
    toggleModal,
    setValuesModal,
    updateEvents,
    setModalType,
    updateOrganizeEvents,
} from '../actions/agendaAction.js'

import slotFunctions from '../../../../utils/slotFunctios.js'

class ModalEdit extends Component {
    constructor(){
        super()
        this.slotEventSelec;
        this.getValues = this.getValues.bind(this);
        this.insertEvent = this.insertEvent.bind(this);
        this.getEvents = this.getEvents.bind(this);
        this.onChange =this.onChange.bind(this);
        this.blockSlotsStart = this.blockSlotsStart.bind(this);
        this.onChangePicket = this.onChangePicket.bind(this);
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
        // console.log('insert get url ', this.props.currentSchedule.id)
        eventObj.agenda = this.props.currentSchedule.id;
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
                    this.getEvents();
                    this.props._toggleModal()
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
            data: JSON.stringify({agenda:this.props.currentSchedule.id}),
            success: (ans) => { serverAns = ans; },
            error: (err) => { serverAns = {err : err.responseJSON} },
            complete: () => {
                if(!serverAns.err){
                const events = serverAns.data ? serverAns.data : [];
                const agenda = this.props.currentSchedule.id;
                this.props._updateEvents(events,agenda);  
                this.props._updateOrganizeEvents(arrayFunctions.organizedEvents(events),agenda)
                }else{
                alert('ERROR MY CALENDAR - getEvents')
                } 
            }
        });
    }

    onChange(value){
        this.getValues(value,'start');
    }

    deleteEvent(id){
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
                console.log('delete aqui ', serverAns)
                if(!serverAns.err){
                    this.getEvents()
                    this.props._toggleModal()
                } 
            }
        });

    }
    blockSlotsStart(start){
        console.log('blockSlotsStart')
        // console.log('blockSlotsStart modal Edit -> ', this.props.modalValues)
        let slotsArray = []
        let selected = this.props.modalValues.start;
         let day = selected.getDate();
        let year = selected.getFullYear()
        let month = selected.getMonth() + 1
        let dayEvents = (((this.props.organizedEvents[year] || {})[month]|| {})[day] ||{});
        for(var a = 0; a<=48; a++){
            if(dayEvents[a] != undefined && dayEvents[a] != null ){
                //console.log('llop ', dayEvents[a])
                slotsArray.push(a)
            }
        }
        //console.log('slots ocupados : ',slotsArray)
        //console.log('horas -> ', slotFunctions.getTimeSlot(slotsArray))
       this.props._setValuesModal({slotsExcludeStart:slotFunctions.getTimeSlot(slotsArray)})
    }
    componentDidUpdate(){
        // console.log('componentDidUpdate')
    //    this.blockSlotsStart()
    }
    onChangePicket(value,type){
        console.log('onChangePicket', this.props.currentSchedule.id)
        this.props._setValuesModal({[type]:value})
        let startBlock = arrayFunctions.blockSlotsStart(value,this.props.organizedEvents[this.props.currentSchedule.id])
        let endBLock = arrayFunctions.blockSlotsEnd(value, this.props.modalValues.end,this.props.organizedEvents)
        this.props._setValuesModal({slotsExcludeStart:startBlock})
        this.props._setValuesModal({slotsExcludeEnd:endBLock})
    }
    render(){
        let buttonPrimary;
        let buttonSecundary;
        let title;
        if(this.props.modalType == 'edit'){
            title = 'Editar'
            buttonSecundary =  <Button onClick={()=>this.deleteEvent()} >Deletar Evento</Button>
            buttonPrimary =   <Button disabled={true} onClick={()=>this.insertEvent(this.props.modalValues)} >Salvar</Button>

        }else{
            title = "Cadastrar"
            buttonPrimary =   <Button onClick={()=>this.insertEvent(this.props.modalValues)} >Salvar</Button>
            buttonSecundary =  <Button onClick={()=>{this.props._toggleModal()}} >Cancelar</Button>
        }
        return(
            <React.Fragment>
                 <Modal
                        show={this.props.modalShow}
                        onHide={()=>{if(this.props.modalShow == true){this.props._toggleModal()}}}
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
    
                                    {/* <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Sala</Form.Label>
                                        <Form.Control as="select" title=" Escolha uma agenda:" value={this.props.modalValues.agenda} onChange={(e)=>this.getValues(e.target.value,'agenda')}>
                                            <option value={501}>501 - Reunião.</option>
                                            <option  disabled value={500}>500 - Estudio</option>
                                        </Form.Control>
                                    </Form.Group> */}
                                </Form.Row>
    
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Inicio </Form.Label>
                                        <DatePicker
                                        disabled={true}
                                        readOnly={false}
                                        className='picker form-control'
                                        selected={new Date(this.props.modalValues.start)}
                                        onChange={(value)=>{this.onChangePicket(value,'start')}}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="Hora"
                                        minTime={new Date(new Date(((new Date().setHours(7)))).setMinutes(0))}
                                        maxTime={new Date(new Date(((new Date().setHours(21)))).setMinutes(30))}
                                        // excludeTimes={[new Date(new Date(((new Date().setHours(10)))).setMinutes(0))]}
                                        excludeTimes={this.props.modalValues.slotsExcludeStart}
                                    />
                                    </Form.Group>
    
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Fim</Form.Label>
                                        <DatePicker
                                        className='picker form-control'
                                        readOnly={false}
                                        disabled={true} 
                                        selected={new Date(this.props.modalValues.end)}
                                        onChange={(value)=>{this.getValues(value,'end')}}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="Hora"
                                        minTime={new Date(new Date(((new Date().setHours(7)))).setMinutes(30))}
                                        maxTime={new Date(new Date(((new Date().setHours(22)))).setMinutes(0))}
                                        excludeTimes={this.props.modalValues.slotsExcludeEnd}
                                    />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            {buttonPrimary}
                            {buttonSecundary}
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
    organizedEvents: store.agendaReduce.organizedEvents,
    currentSchedule:store.agendaReduce.currentSchedule,
  });

const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal()),
    _setValuesModal : (values) => dispatch(setValuesModal(values)),
    _updateEvents: (events,agenda) => dispatch(updateEvents(events,agenda)),
    _setModalType: (value) => dispatch(setModalType(value)),
    _updateOrganizeEvents:(events,agenda) =>dispatch(updateOrganizeEvents(events,agenda))
});


// export default ModalEvent;
export default connect(mapStateToProps,mapDispatchToProps)(ModalEdit);