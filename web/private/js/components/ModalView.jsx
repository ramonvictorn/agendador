import React, {Component} from 'react';
import {Modal, Button, Form, Row,Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import { 
    toggleModal,
} from '../actions/agendaAction.js'

class ModalView extends Component {
    constructor(){
        super()
    }
    render(){
        let start = (this.props.modalValues.start).toString()
        let end = (this.props.modalValues.end).toString()
        let title = this.props.modalValues.title;
        let agenda = this.props.modalValues.agenda;
        let user = this.props.modalValues.idUser;
        return(
            <React.Fragment>
                <Modal
                        show={this.props.modalShow}
                        onHide={()=>{console.log('hide da modal view'); if(this.props.modalShow == true){this.props._toggleModal()}}}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                >
                    <Modal.Header closeButton >
                        <Modal.Title id="contained-modal-title-vcenter">
                            Visualizar reserva:
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            Nome:{title}
                        </Row>
                        <Row>
                            Agenda:{agenda}
                        </Row>
                        <Row>
                            Inicio:{start}
                        </Row>
                        <Row>
                            Final:{end}
                        </Row>
                        <Row>
                            UserId:{user}
                        </Row>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
const mapStateToProps = store => ({
    modalValues : store.agendaReduce.modalValues,
    modalShow : store.agendaReduce.modalShow,
  });

  const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal()),
});
export default connect(mapStateToProps,mapDispatchToProps)(ModalView);