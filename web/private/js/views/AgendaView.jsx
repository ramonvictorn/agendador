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

    getEvents(){
        console.log('verifiando ramon ')
        let context = {
            agenda:this.props.currentSchedule
        }
        // $.ajax({
        //     url: "/events/getEvents",
        //     type:'POST',
        //     data: JSON.stringify(context),
        //     context: 'document',
        // }).done(function(result) {
        //     // console.log('AGENDA VIEW - getEvents Done result ->', result)
        //   });
    }
    verifySchedule(){
        // let schedulePath = (this.props.location.pathname.trim()).split('/')
        let test = {id:this.props.location.pathname.split('/')[2]}
        console.log('verifin url',  test);
        // this.props._setCurrentSchedule(test);
        let response;
        $.ajax({
            url: "/schedule/getSchedule",
            type:'POST',
            context: 'document',
            data:test,
            success: (ans) => { response = ans; },
            error: (err) => { response = {error : err.responseJSON.error} },
            complete:()=>{
                if(response.error){
                    // console.log('essa agenda não existe', this.props.currentSchedule);
                    // this.props.history.push(`/agenda/`)
                }else{
                    // console.log('agenda existe',this.props.currentSchedule)
                    this.props._setCurrentSchedule(test)
                }
            }
        })
    }
    componentDidMount(){
        // console.log('agenda view component did mount');
        this.verifySchedule();
    }
    render(){
        // this.verifySchedule()
        let scheduleVerify = this.props.currentSchedule;
        let calendar;
        // console.log('render agenda view',  this.props.currentSchedule)
        if(scheduleVerify == null){
            calendar = <div>Você não possui permissão nessa agenda</div>
        }else {
            calendar = <MyCalendar/> 
        }
        // calendar = <div>calendar 2</div>
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