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
    agenda:'',
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
      console.log('reduce values ', action.payload)
      return {...state, 
        modalValues :{
          start: action.payload.values.start,
          end: action.payload.values.end,
          title: action.payload.values.title,
          agenda: action.payload.values.agenda,
        }
      }
      
    default:
      return state;
  }
  
}
export default agendaReduce;