import React from 'react';
import MyCalendar from '../components/Mycalendar.jsx';
import ModalEvent from '../components/ModalEvent.jsx';

class AgendaView extends React.Component {
    constructor(props){
        super(props);     
        this.state = {
            modalEvent : false, //hidded
            events:[],
        };
        this.toogleModalEvent = this.toogleModalEvent.bind(this);
        this.getEvents = this.getEvents.bind(this);
        this.   addEventsCb = this.addEventsCb.bind(this);

        this.getEvents(this.addEventsCb);
    }
    toogleModalEvent(){
        this.setState({modalEvent: !this.state.modalEvent})
    }
    addEventsCb(newEvents){
        this.setState({events:newEvents})
    }
    getEvents(cb){
        console.log('getEvents')
        $.ajax({
            url: "/events/getEvents",
            type:'POST',
            context: 'document',
          }).done(function(result) {
            console.log('done ajax get events', result)
           cb(result.data)
          });
    }

    render(){
        return (
            <div>
                <h1>Página da agenda mano</h1>
                <ModalEvent show={this.state.modalEvent}></ModalEvent>
                <h1>AGR É O BIG</h1>
                <MyCalendar click={this.toogleModalEvent} events={this.state.events}/>
            </div>
        )
    }
}
export default AgendaView;