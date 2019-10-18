import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import './style.css';
class MyCalendar extends Component {
    constructor() {
        super(); 
        this.triggerClicks = this.triggerClicks.bind(this);
        this.state = {
            schedules: [
                {
                    id: '1',
                    calendarId: '1',
                    title: 'Reunião de supervisão',
                    category: 'time',
                    dueDateClass: '',
                    start: '2019-10-16T22:30:00+09:00',
                    end: '2019-10-17T02:30:00+09:00'
                },
                {
                    id: '2',
                    body:'aaaa',
                    calendarId: '2',
                    title: 'Reunião da coordenação',
                    category: 'time',
                    dueDateClass: '',
                    start: '2019-10-16T12:30:00+09:00',
                    end: '2019-10-16T13:30:00+09:00'
                },
                {
                    id: '3',
                    calendarId: '1',
                    title: 'Reunião da coordenação',
                    category: 'time',
                    dueDateClass: '',
                    start: '2019-10-23T12:30:00+09:00',
                    end: '2019-10-23T13:30:00+09:00'
                },
            ]
        }
        this.calendarRef = React.createRef();
        // this.verifySchedule = this.verifySchedule.bind(this);
        // this.Calendar = {}
    }
    componentDidMount(){
        this.triggerClicks();
        // this.verifySchedule();
        // console.log('calendarRef ',  this.calendarRef.current.getInstance());
        // this.Calendar = this.calendarRef.current.getInstance();
        // this.Calendar.setOptions({month: {visibleWeeksCount: 6}}, true); // or null
        // this.Calendar.changeView('month', true);
        // this.calendarRef.current.getInstance();
    }

    triggerClicks(){
        const calendarInstance = this.calendarRef.current.getInstance();

        // calendarInstance.next();
        // calendarInstance.on('clickSchedule', function(event) {
        //     console.log('clickSchedule',event)
        //     var schedule = event.schedule
        // });

        // calendarInstance.on('clickDayname', function(event) {
        //     console.log('clickDayname ')
        //     // if (calendarInstance.getViewName() === 'week') {
        //     //     calendar.setDate(new Date(event.date));
        //     //     calendar.changeView('day', true);
        //     // }
        // });

        calendarInstance.on('beforeCreateSchedule', function(event) {
            console.log('AGR VAIR beforeCreateSchedule ',event)
            // if (calendarInstance.getViewName() === 'week') {
            //     calendar.setDate(new Date(event.date));
            //     calendar.changeView('day', true);
            // }
        });
    }
    handleClickDayname(ev) {
        // view : week, day
        console.group('onClickDayname');
        console.log(ev.date);
        console.groupEnd();
    };
    render(){
        let today = new Date();
        console.log('AgendaView Render')
        let calendar = <div>Você não possui permissão nessa agenda</div>
        return (
            <React.Fragment>
                <div className={'calendar-container'}>
                    <Calendar
                        ref={this.calendarRef}
                        height="300px"
                        view='month'
                        month={{
                            workweek:true,
                            daynames: ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'],
                            visibleWeeksCount: 4
                        }}
                        scheduleView={['time']}
                        calendars={
                            [
                                {
                                id: '1',
                                name: 'My Calendar',
                                color: '#ffffff',
                                bgColor: '#9e5fff',
                                dragBgColor: '#9e5fff',
                                borderColor: '#9e5fff'
                                },
                                {
                                    id: '2',
                                    name: 'My Calendar',
                                    color: '#ffffff',
                                    bgColor: '#9e5fff',
                                    dragBgColor: '#9e5fff',
                                    borderColor: '#9e5fff'
                                    }
                            ]
                        }
                        schedules={this.state.schedules}
                    />
                </div>
            </React.Fragment>
        )
    }
}
export default MyCalendar;

let templateCalendar = {
    popupDetailRepeat: function(model) {
        return model.recurrenceRule;
    },
    popupDetailBody: function(model) {
        return model.body;
    }
}