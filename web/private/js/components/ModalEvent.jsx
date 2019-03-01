import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
    toggleModal,
    setValuesModal,
 } from '../actions/agendaAction.js'

 //import ptBR from 'date-fns/locale/pt-BR';
// registerLocale ('pt-BR', ptBR);
// import { connect } from "react-redux";
// import {
//     TOOTLE_MODAL,
// } from '../actions/agendaAction';

// console.log('store.getState()')
//console.log(store)


// const ModalEvent = ({modalShow})=>{
//     let eventObj = {
        
//     }
        
//     const toggleShow = ()=> {
//         if(modalShow == true) return 'active'
//         else {return 'disabled'} 
//     } 
    
//     function getValues(){
//         eventObj.title = $('.titleEvent').val()
//         eventObj.start = $('.startEvent').val()
//         eventObj.end = $('.endEvent').val()
//         eventObj.agenda = $('.agendaEvent').val()
//         insertEvent(eventObj);
//     }

//     function insertEvent(evento){
//         let serverAns;
//         $.ajax({
//             url: '/events/insertEvent',
//             dataType: 'json',
//             type: 'POST',
//             contentType: 'application/json',
//             data: JSON.stringify(evento),
//             success: (ans) => { serverAns = ans; },
//             error: (err) => { serverAns = {err : err.responseJSON} },
//             complete: () => {
//                 if(!serverAns.err){
//                     const post = serverAns.data ? serverAns.data : {};
//                     this.props._updatePost(post);  
//                 } 
//             }
//         });
//     }
    
//     return (
        
//         <div className={'modalEvent'}>
            // <form>
            //     <label>
            //         Titulo:
            //         <input type="text" name="title" className="titleEvent" />
            //     </label>
            //     <label>
            //         Inicio:
            //         <input type="datetime-local" name="start" className="startEvent"/>
            //     </label>
            //     <label>
            //         Fim:
            //         <input type="datetime-local" name="end" className="endEvent"/>
            //     </label>
            //     <label>
            //         Agenda:
            //     <select className="agendaEvent">
            //         <option value="501">Sala de Reunião</option>
            //         <option value="201">Estúdio</option>
            //         </select>
            //     </label>
            // </form>
//             <button onClick={getValues}>Reservar</button>
//         </div>
//     )

// }

import {Modal, Button, Form, Row,Col} from 'react-bootstrap';
import DatePicker from "react-datepicker";

 
import "react-datepicker/dist/react-datepicker.css";
class ModalEvent extends Component {
    constructor({modalShow}){
        super();
        this.showModal = this.showModal.bind(this);
        this.getValues = this.getValues.bind(this);
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

    render(){
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
                                    <Form.Control as="select" onChange={(e)=>this.getValues(e.target.value,'agenda')}>
                                        <option>Escolher...</option>
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
                        <Button onClick={()=>this.props._toggleModal()} >Save</Button>
                    </Modal.Footer>
                </Modal> 
        
        )
    }
}

const mapStateToProps = store => ({
    modalShow: store.agendaReduce.modalShow,
    modalValues : store.agendaReduce.modalValues,
  });

const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal),
    _setValuesModal : (values) => dispatch(setValuesModal(values))
});


// export default ModalEvent;
export default connect(mapStateToProps,mapDispatchToProps)(ModalEvent);