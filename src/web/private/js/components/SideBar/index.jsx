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
                <button className={'bt-side'}>Agendar</button>
                <h3>Selecionar sala</h3>
                <Carosel/>
            </div>
            </>
        )
    }
}
export default SideBar;