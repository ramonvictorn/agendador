import {
  TOGGLE_MODAL,
  UPDATE_EVENTS, 
  SET_VALUES_MODAL,
} from '../actions/agendaAction.js';

let dateNow = new Date();

const initialState = {
  modalShow:'hide',
  modalType: 'view',
  modalValues: {
    titleEvent:'O nome da reserva',
    startEvent : dateNow.toISOString(),
  },
  events : [],
}

let newValue;
const agendaReduce = (state = initialState, action)=>{
  switch(action.type){
    case TOGGLE_MODAL:
      newValue = state.modalShow == 'hide' ? 'show' : 'hide'
      return {...state, modalShow: newValue };
    
    case UPDATE_EVENTS:
      return {...state, events : action.payload.events}
    
    case SET_VALUES_MODAL:
      return {...state, 
        modalValues :{
          start: action.payload.start,
          end: action.payload.end,
        }
      }
      
    default:
      return state;
  }
  
}
export default agendaReduce;