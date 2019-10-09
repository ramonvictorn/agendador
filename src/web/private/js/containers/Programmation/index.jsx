import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyCalendar from '../../components/MyCalendar/index.jsx';
import SideBar from '../../components/SideBar/index.jsx';
import './style.css';
class Programmation extends Component {
    constructor() {
        super(); 
        this.calendarRef = React.createRef();
        // this.verifySchedule = this.verifySchedule.bind(this);
        // this.Calendar = {}
    }
    componentDidMount(){
        // this.verifySchedule();
        // console.log('calendarRef ',  this.calendarRef.current.getInstance());
        // this.Calendar = this.calendarRef.current.getInstance();
        // this.Calendar.setOptions({month: {visibleWeeksCount: 6}}, true); // or null
        // this.Calendar.changeView('month', true);
        // this.calendarRef.current.getInstance();
    }
    render(){
        let today = new Date();
        console.log('AgendaView Render')
        let calendar = <div>Você não possui permissão nessa agenda</div>
        return (
            <React.Fragment>
                <div className={'programation-container'}>
                    <SideBar/>
                    <MyCalendar/>
                </div>
            </React.Fragment>
        )
    }
}


export default Programmation;