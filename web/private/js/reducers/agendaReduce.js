import {
  TOGGLE_MODAL,
  UPDATE_EVENTS, 
  SET_VALUES_MODAL,
} from '../actions/agendaAction.js';

let dateNow = new Date();

const initialState = {
  modalShow: false,
  modalType: 'view',
  modalValues: {
    title:'',
    start : new Date(),
    end: new Date(),
    agenda:'null',
  },
  events : [],
}

let newValue;
const agendaReduce = (state = initialState, action)=>{
  switch(action.type){
    case TOGGLE_MODAL:
      newValue = state.modalShow == false ? true : false
      return {...state, modalShow: newValue };
    
    case UPDATE_EVENTS:
      return {...state, events : action.payload.events}
    
    case SET_VALUES_MODAL:
      console.log('reduce values ', action.payload.values, state.modalValues.start)
      return {...state, 
        modalValues :{
          start: action.payload.values.start != undefined ? action.payload.values.start : state.modalValues.start,
          end:  action.payload.values.end != undefined ? action.payload.values.end : state.modalValues.end,
          title:  action.payload.values.title != undefined ? action.payload.values.title : state.modalValues.title,
          agenda:  action.payload.values.agenda != undefined ? action.payload.values.agenda : state.modalValues.agenda,
        }
      }
      
    default:
      return state;
  }
  
}
export default agendaReduce;