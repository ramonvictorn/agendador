import React,{Component} from 'react';
import './style.css';
class ModalSchedule extends Component{
    render(){
        return(
            <>             
            <div className={'modal-schedule'}>
                <input type='text' placeholder='Titulo da reserva'></input> 
                <button className={'send-schedule'}>Enviar Agendamento</button>
            </div>
            </>
        )
    }
}
export default ModalSchedule;