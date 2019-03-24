import {
  TOGGLE_MODAL,
  UPDATE_EVENTS, 
  SET_VALUES_MODAL,
  SET_MODAL_TYPE,
  UPDATE_ORGANIZE_EVENTS,
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
    idEvent: 'null',
    idUser: 'null',
    slotsExclude :null,
    slotsExcludeEnd: null,
  },
  events : [],
  organizeEvents : {},
}

let newValue;
const agendaReduce = (state = initialState, action)=>{
  switch(action.type){
    case TOGGLE_MODAL:
      console.log('agendaReduce toggle aqui antes ', state.modalShow)
      state.modalShow == false ?  newValue = true : newValue = false
      return {...state, modalShow: newValue };
    
    case UPDATE_EVENTS:
      console.log('update aqui',action.payload)
      return {...state, events : action.payload.events}
    
    case UPDATE_ORGANIZE_EVENTS:
      console.log('update organize events',action.payload)
      return{...state, organizeEvents: action.payload.events} 
      
    case SET_VALUES_MODAL:
      console.log('reduce values modal', action.payload.values)
      return {...state, 
        modalValues :{
          start: action.payload.values.start != undefined ? action.payload.values.start : state.modalValues.start,
          end:  action.payload.values.end != undefined ? action.payload.values.end : state.modalValues.end,
          title:  action.payload.values.title != undefined ? action.payload.values.title : state.modalValues.title,
          agenda:  action.payload.values.agenda != undefined ? action.payload.values.agenda : state.modalValues.agenda,
          idUser:  action.payload.values.idUser != undefined ? action.payload.values.idUser : state.modalValues.idUser,
          slotsExclude : action.payload.values.slotsExclude != undefined ? action.payload.values.slotsExclude : state.modalValues.slotsExclude,
          slotsExcludeEnd : action.payload.values.slotsExcludeEnd != undefined ? action.payload.values.slotsExcludeEnd : state.modalValues.slotsExcludeEnd,
        }
      }
    case SET_MODAL_TYPE:
      console.log('agenda Reduce -> set modal type',action.payload)
      return{...state,
        modalType:action.payload.value
      }    
    default:
      return state;
  }
  
}
export default agendaReduce;