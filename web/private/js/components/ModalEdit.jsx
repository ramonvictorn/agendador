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

class ModalEdit extends Component {
    constructor(){
        super()
        this.getValues = this.getValues.bind(this);
        this.insertEvent = this.insertEvent.bind(this);
        this.getEvents = this.getEvents.bind(this);
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
        console.log('render ModalEdit -> props show', this.props.modalShow)
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
                                        readOnly={true}
                                        className='picker form-control'
                                        selected={new Date(this.props.modalValues.start)}
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
                                        readOnly={true}
                                        selected={new Date(this.props.modalValues.end)}
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
                            {/* <Button onClick={()=>this.props._toggleModal()} >Cancel</Button> */}
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
  });

const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal()),
    _setValuesModal : (values) => dispatch(setValuesModal(values)),
    _updateEvents: (events) => dispatch(updateEvents(events)),
    _setModalType: (value) => dispatch(setModalType(value)),
});


// export default ModalEvent;
export default connect(mapStateToProps,mapDispatchToProps)(ModalEdit);