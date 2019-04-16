import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MyCalendar from '../components/Mycalendar.jsx';
import ModalEvent from '../components/ModalEvent.jsx';
import HeaderMenu from '../components/HeaderMenu.jsx';
import { connect } from 'react-redux';


class AgendaView extends Component {
    constructor({match,history}) {
        super(); 
        this.history = history;
        this.verifySchedule = this.verifySchedule.bind(this);
        
    }

    getEvents(){
        $.ajax({
            url: "/events/getEvents",
            type:'POST',
            context: 'document',
        }).done(function(result) {
            // console.log('AGENDA VIEW - getEvents Done result ->', result)
          });
    }
    verifySchedule(){
        $.ajax({
            url: "/schedule/getSchedule",
            type:'POST',
            context: 'document',
        }).done(function(result) {
            // console.log('AGENDA VIEW - verifySchedulet ->', result)
          });
    }

    render(){
        this.verifySchedule()
        return (
            <React.Fragment>
                <HeaderMenu></HeaderMenu>
                <ModalEvent></ModalEvent>
                <MyCalendar/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({
    modalShow: store.agendaReduce.modalShow
  });


  export default connect(mapStateToProps,)(AgendaView);