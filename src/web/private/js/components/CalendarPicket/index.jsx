import React,{Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css'
class CalendarPicket extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
                <div className={'picker-container'}>
                <DatePicker
                    className={'ramon'}
                    selected={new Date()}
                    onChange={date => {console.log('Change ', date)}}
                    inline
                    />
                </div>
            </>
        )
    }
}
export default CalendarPicket;