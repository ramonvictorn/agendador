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
    constructor(){
        super();
    }
    render(){
        console.log('ModalEvent -> render - props ', this.props);
        let modal;
        if(this.props.modalShow ==true){
            let modalType = this.props.modalType;
            if(modalType == 'view'){
                modal = <ModalView></ModalView>
            }else{
                modal = <ModalEdit></ModalEdit>
            }
        }else{
            modal = <div></div>
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
    // modalValues : store.agendaReduce.modalValues,
    modalType : store.agendaReduce.modalType,
  });

const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal),
    // _setValuesModal : (values) => dispatch(setValuesModal(values)),
    // _updateEvents: (events) => dispatch(updateEvents(events)),
    // _setModalType: (value) => dispatch(setModalType(value)),
});


// export default ModalEvent;
export default connect(mapStateToProps,mapDispatchToProps)(ModalEvent);
