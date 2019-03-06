import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
    toggleModal,
    setValuesModal,
    updateEvents,
} from '../actions/agendaAction.js'
import {Modal, Button, Form, Row,Col} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ModalEvent extends Component {
    constructor({modalShow}){
        super();
        this.showModal = this.showModal.bind(this);
        this.getValues = this.getValues.bind(this);
        this.insertEvent = this.insertEvent.bind(this);
        this.getEvents = this.getEvents.bind(this);
    }
    showModal(){
        if(this.props.modalShow == 'show') return ' active'
        else return ' disabled'
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

    render(){
        if(this.props.modalType === 'view'){
            return (
                    <Modal
                        show={this.props.modalShow}
                        onHide={()=>this.props._toggleModal()}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton >
                            <Modal.Title id="contained-modal-title-vcenter">
                                Criar reserva
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
                                        <Form.Control as="select" value={this.props.modalValues.agenda} onChange={(e)=>this.getValues(e.target.value,'agenda')}>
                                            <option value={'null'}>Escolher...</option>
                                            <option value={501}>501 - Reunião.</option>
                                            <option value={500}>500 - Estudio</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
    
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Inicio </Form.Label>
                                        <DatePicker
                                        className='picker form-control'
                                        selected={this.props.modalValues.start}
                                        onChange={(value)=>{this.getValues(value,'start')}}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="Hora"
                                    />
                                    </Form.Group>
    
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Fim</Form.Label>
                                        <DatePicker
                                        className='picker form-control'
                                        
                                        selected={this.props.modalValues.end}
                                        onChange={(value)=>{this.getValues(value,'end')}}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={30}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="Hora"
                                    />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={()=>this.props._toggleModal()} >Cancel</Button>
                            <Button onClick={()=>this.insertEvent(this.props.modalValues)} >Save</Button>
                        </Modal.Footer>
                    </Modal> 
            )
        }else{
            return <div>MODO EDI</div>
        }
    }
}

const mapStateToProps = store => ({
    modalShow: store.agendaReduce.modalShow,
    modalValues : store.agendaReduce.modalValues,
    modalType : store.agendaReduce.modalType,
  });

const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal),
    _setValuesModal : (values) => dispatch(setValuesModal(values)),
    _updateEvents: (events) => dispatch(updateEvents(events)),
});


// export default ModalEvent;
export default connect(mapStateToProps,mapDispatchToProps)(ModalEvent);