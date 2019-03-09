import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
    toggleModal,
    setValuesModal,
    updateEvents,
    setModalType,
} from '../actions/agendaAction.js'
import {Modal, Button, Form, Row,Col} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { View } from 'fullcalendar';
import ModalView from '../components/ModalView.jsx'
import ModalEdit from '../components/ModalEdit.jsx'

class ModalEvent extends Component {
    constructor({modalShow}){
        super();
        this.getValues = this.getValues.bind(this);
        this.insertEvent = this.insertEvent.bind(this);
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

    render(){
        console.log('foo type ', this.props.modalType);
        let modal;
        let modalType = this.props.modalType;
        if(modalType == 'view'){
            modal = <ModalView></ModalView>
        }else{
            modal = <ModalEdit></ModalEdit>
        }
        return (          
            <React.Fragment>
                {modal}
            </React.Fragment>                                                                                                                                                  
        )
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
    _setModalType: (value) => dispatch(setModalType(value)),
});


// export default ModalEvent;
export default connect(mapStateToProps,mapDispatchToProps)(ModalEvent);


{/* <Modal.Header closeButton >
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
                        </Modal.Footer> */}