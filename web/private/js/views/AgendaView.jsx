import React, { Component } from 'react';
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
        console.log('AgendaView -> getEvents')
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
        console.log('foo agenda view render ')
        return (
            <div>
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