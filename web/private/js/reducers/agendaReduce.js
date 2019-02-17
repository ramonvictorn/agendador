import {TOOGLE_MODAL} from '../actions/agendaAction.js';


const initialState = {
  modalShow:'hide',
}

let newValue;
const agendaReduce = (state = initialState, action)=>{
  switch(action.type){
    case 'TOGGLE_MODAL':
      if(state.modalShow == 'hide'){
        newValue = 'show'
      } else {
        newValue = 'hide'
      }
      return {...state, modalShow: newValue };
    default:
      return state;
  }
  
}
export default agendaReduce;