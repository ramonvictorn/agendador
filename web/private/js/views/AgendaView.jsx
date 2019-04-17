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
        // let schedulePath = (this.props.location.pathname.trim()).split('/')
        let test = {id:this.props.location.pathname.split('/')[2]}
        console.log('verifin url',  test);
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
                    console.log('essa agenda não existe');
                    this.props.history.push(`/agenda/`)
                }else{
                    console.log('agenda existe')
                }
            }
        })
    }
    componentDidMount(){
        console.log('agenda view component did mount');
        this.verifySchedule();
    }
    render(){
        // this.verifySchedule()
        console.log('render agenda view')
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