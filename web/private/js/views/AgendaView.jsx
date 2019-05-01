import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MyCalendar from '../components/Mycalendar.jsx';
import ModalEvent from '../components/ModalEvent.jsx';
import HeaderMenu from '../components/HeaderMenu.jsx';
import { connect } from 'react-redux';
import { setCurrentSchedule} from '../actions/agendaAction.js'


class AgendaView extends Component {
    constructor({match,history}) {
        super(); 
        this.history = history;
        this.verifySchedule = this.verifySchedule.bind(this);
    }

    verifySchedule(){
        let schedulePath = {id:this.props.location.pathname.split('/')[2]}
        let response;
        $.ajax({
            url: "/schedule/getSchedule",
            type:'POST',
            context: 'document',
            data:schedulePath,
            success: (ans) => { response = ans; },
            error: (err) => { response = {error : err.responseJSON.error} },
            complete:()=>{
                if(response.error){
                    console.log('ERRO_AGENDA_VIEW');
                }else{
                    this.props._setCurrentSchedule(response.data)
                }
            }
        })
    }
    componentDidMount(){
        this.verifySchedule();
    }
    render(){
        let calendar = <div>Você não possui permissão nessa agenda</div>
        if(this.props.location.pathname.split('/')[2] == this.props.currentSchedule.id){
            calendar = <MyCalendar/>           
        }
        return (
            <React.Fragment>
                <HeaderMenu></HeaderMenu>
                <ModalEvent></ModalEvent>
                {calendar}
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({
    modalShow: store.agendaReduce.modalShow,
    currentSchedule: store.agendaReduce.currentSchedule,
  });

  const mapDispatchToProps = dispatch => ({
    _setCurrentSchedule : (values) => dispatch(setCurrentSchedule(values)),
});

  export default connect(mapStateToProps,mapDispatchToProps)(AgendaView);