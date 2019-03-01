import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MyCalendar from '../components/Mycalendar.jsx';
import ModalEvent from '../components/ModalEvent.jsx';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { toggleModal } from '../actions/agendaAction.js';

class AgendaView extends Component {
    constructor() {
        super();
        this.click = this.click.bind(this);             
    }

    getEvents(){
        $.ajax({
            url: "/events/getEvents",
            type:'POST',
            context: 'document',
        }).done(function(result) {
            console.log('done ajax get events', result)
          });
    }

    click(){
        this.props._toggleModal();
    }
    render(){
        return (
            <div>
                <Link to="/login">Login Page</Link>
                <ModalEvent></ModalEvent>
                <MyCalendar/>
            </div>
        )
    }
        
}

const mapStateToProps = store => ({
    modalShow: store.agendaReduce.modalShow
  });


  const mapDispatchToProps = dispatch => ({
    _toggleModal: () => dispatch(toggleModal),

});
  export default connect(mapStateToProps,mapDispatchToProps)(AgendaView);