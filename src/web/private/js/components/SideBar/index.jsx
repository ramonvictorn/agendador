import React,{ Component } from "react";
import './style.css'
import CalendarPicket from '../CalendarPicket/index.jsx';
import Carosel from '../Carousel/index.jsx'
class SideBar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
            <div className={'side-bar'}>
                <CalendarPicket/>
                <Carosel/>
            </div>
            </>
        )
    }
}
export default SideBar;