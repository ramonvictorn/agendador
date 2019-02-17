import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { connect } from "react-redux";
// import {
//     TOOTLE_MODAL,
// } from '../actions/agendaAction';

// console.log('store.getState()')
//console.log(store)


// const ModalEvent = ({modalShow})=>{
//     let eventObj = {
        
//     }
        
//     const toggleShow = ()=> {
//         if(modalShow == true) return 'active'
//         else {return 'disabled'} 
//     } 
    
//     function getValues(){
//         eventObj.title = $('.titleEvent').val()
//         eventObj.start = $('.startEvent').val()
//         eventObj.end = $('.endEvent').val()
//         eventObj.agenda = $('.agendaEvent').val()
//         insertEvent(eventObj);
//     }

//     function insertEvent(evento){
//         let serverAns;
//         $.ajax({
//             url: '/events/insertEvent',
//             dataType: 'json',
//             type: 'POST',
//             contentType: 'application/json',
//             data: JSON.stringify(evento),
//             success: (ans) => { serverAns = ans; },
//             error: (err) => { serverAns = {err : err.responseJSON} },
//             complete: () => {
//                 if(!serverAns.err){
//                     const post = serverAns.data ? serverAns.data : {};
//                     this.props._updatePost(post);  
//                 } 
//             }
//         });
//     }
    
//     return (
        
//         <div className={'modalEvent'}>
//             <form>
//                 <label>
//                     Titulo:
//                     <input type="text" name="title" className="titleEvent" />
//                 </label>
//                 <label>
//                     Inicio:
//                     <input type="datetime-local" name="start" className="startEvent"/>
//                 </label>
//                 <label>
//                     Fim:
//                     <input type="datetime-local" name="end" className="endEvent"/>
//                 </label>
//                 <label>
//                     Agenda:
//                 <select className="agendaEvent">
//                     <option value="501">Sala de Reunião</option>
//                     <option value="201">Estúdio</option>
//                     </select>
//                 </label>
//             </form>
//             <button onClick={getValues}>Reservar</button>
//         </div>
//     )

// }
class ModalEvent extends Component {
    constructor({modalShow}){
        super();
        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        if(this.props.modalShow == 'show') return ' active'
        else return ' disabled'
    }
    render(){
        console.log('foo modal' , this.showModal(), this.props,'state ', this.state)
        return (
            <div className={'modalEvent' + this.showModal()}>
//             <form>
//                 <label>
//                     Titulo:
//                     <input type="text" name="title" className="titleEvent" />
//                 </label>
//                 <label>
//                     Inicio:
//                     <input type="datetime-local" name="start" className="startEvent"/>
//                 </label>
//                 <label>
//                     Fim:
//                     <input type="datetime-local" name="end" className="endEvent"/>
//                 </label>
//                 <label>
//                     Agenda:
//                 <select className="agendaEvent">
//                     <option value="501">Sala de Reunião</option>
//                     <option value="201">Estúdio</option>
//                     </select>
//                 </label>
//             </form>
//             <button>Reservar</button>
//         </div>
        )
    }
}

const mapStateToProps = store => ({
    modalShow: store.agendaReduce.modalShow
  });

// export default ModalEvent;
export default connect(mapStateToProps)(ModalEvent);