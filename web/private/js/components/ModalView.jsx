import React, {Component} from 'react';
import {Modal, Button, Form, Row,Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import { 
    toggleModal,
} from '../actions/agendaAction.js'

import {
    saveUser,
} from '../actions/usersActions.js'

class ModalView extends Component {
    constructor(){
        super();
        this.getUser = this.getUser.bind(this);
    }
    getUser(id){
        let response;
        let context = {
            idUser :  id,
        }
        $.ajax({
                url: '/user/getUser',
                dataType: 'json',
                data: JSON.stringify(context),
                type: 'post',
                contentType: 'application/json',
                success: (ans) => { response = ans; },
                error: (err) => { response = {error : err.responseJSON.error} },
                complete: () => {
                    console.log('response do getUSer!',response.data)
                    this.props._saveUser(response.data)
                }
            });

    }
    render(){
        let start = (this.props.modalValues.start).toString()
        let end = (this.props.modalValues.end).toString()
        let title = this.props.modalValues.title;
        let agenda = this.props.modalValues.agenda;
        let user = this.props.modalValues.idUser;
        let usuario = this.props.users;
        console.log('start aqui ', new Date(start).getTime())
        if(this.props.users[this.props.modalValues.idUser] == undefined){
            console.log('Nao tem esse user na store')
            this.getUser(this.props.modalValues.idUser)
        }else{
            console.log('ja tem esse user na store ', this.props.users[this.props.modalValues.idUser])
            user = this.props.users[this.props.modalValues.idUser].name;
        }
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
                            <h5>Nome: </h5>{title}
                        </Row>
                        <Row>
                            {/* Sala:{agenda} */}
                        </Row>
                        <Row>
                            <h5>Inicio: </h5>{start}
                        </Row>
                        <Row>
                            <h5>Fim: </h5>{end}
                        </Row>
                        <Row>
                            <h5>Usuário:</h5> {user}
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
    users : store.usersReduce.users,
  });

  const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal()),
    _saveUser:(user) => dispatch(saveUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(ModalView);