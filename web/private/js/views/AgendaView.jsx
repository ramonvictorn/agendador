import React, { Component } from 'react';
import MyCalendar from '../components/Mycalendar.jsx';
import ModalEvent from '../components/ModalEvent.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from '../actions/agendaAction.js';

class AgendaView extends Component {
    // toogleModalEvent(){
    //     this.setState({modalEvent: !this.state.modalEvent})
    // }
    // addEventsCb(newEvents){
    //     this.setState({events:newEvents})
    // }
    // getEvents(cb){
    //     console.log('getEvents')
    //     $.ajax({
    //         url: "/events/getEvents",
    //         type:'POST',
    //         context: 'document',
    //       }).done(function(result) {
    //         console.log('done ajax get events', result)
    //        cb(result.data)
    //       });
    // }
    
    // show={this.state.modalEvent
    // click={this.toogleModalEvent}
    // events={this.state.events}
    constructor() {
        super();
        this.click = this.click.bind(this);
        this.modalChange = this.modalChange.bind(this);
        this.state = {
            modalShow: ''
          }
          
    }
    modalChange (event) {
        // this.setState({
        //     modalShow: 'state local agenda trocado'
        // })
        console.log('modal change ')
    }
    click(){
        console.log('oi click', this.props, 'state ', this.state)
        this.modalChange('e');
        this.props._toggleModal();
    }
    render(){
        const { modalShow } = this.state;
        console.log('oi store', this.props, 'state ', this.state)
        return (
            <div>
                <h2>teste</h2>
                <h1>Página da agenda mano</h1>
                <h1>{modalShow}</h1>
                <ModalEvent></ModalEvent>
                <h1>AGR É O BIG</h1>
                <MyCalendar events={[]} click={this.click}/>
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