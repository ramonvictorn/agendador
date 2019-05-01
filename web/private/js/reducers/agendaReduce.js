import {
  TOGGLE_MODAL,
  UPDATE_EVENTS, 
  SET_VALUES_MODAL,
  SET_MODAL_TYPE,
  UPDATE_ORGANIZE_EVENTS,
  ADD_SCHEDULE,
  SET_CURRENT_SCHEDULE,
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
    slotsExcludeStart :null,
    slotsExcludeEnd: null,
    idEvent:null
  },
  currentSchedule: {},
  events : {},
  organizeEvents : {},
  schedules : [],
}

let newValue;
const agendaReduce = (state = initialState, action)=>{
  switch(action.type){
    case TOGGLE_MODAL:
      state.modalShow == false ?  newValue = true : newValue = false
      return {...state, modalShow: newValue };
    
    case UPDATE_EVENTS:
      return {...state, events : {...state.events,
        [action.payload.agenda]:action.payload.events}
      }
      return {...state}

    case UPDATE_ORGANIZE_EVENTS:
      return{...state, organizeEvents: {...state.organizeEvents,
          [action.payload.agenda]: action.payload.events
        }
      } 
      
    case SET_VALUES_MODAL:
      return {...state, 
        modalValues :{
          start: action.payload.values.start != undefined ? action.payload.values.start : state.modalValues.start,
          end:  action.payload.values.end != undefined ? action.payload.values.end : state.modalValues.end,
          title:  action.payload.values.title != undefined ? action.payload.values.title : state.modalValues.title,
          agenda:  action.payload.values.agenda != undefined ? action.payload.values.agenda : state.modalValues.agenda,
          idUser:  action.payload.values.idUser != undefined ? action.payload.values.idUser : state.modalValues.idUser,
          slotsExcludeStart : action.payload.values.slotsExcludeStart != undefined ? action.payload.values.slotsExcludeStart : state.modalValues.slotsExcludeStart,
          slotsExcludeEnd : action.payload.values.slotsExcludeEnd != undefined ? action.payload.values.slotsExcludeEnd : state.modalValues.slotsExcludeEnd,
          idEvent:  action.payload.values.idEvent != undefined ? action.payload.values.idEvent : state.modalValues.idEvent,
        }
      }
    case SET_MODAL_TYPE:
      return{...state,
        modalType:action.payload.value
      }    
    case ADD_SCHEDULE:
      var oldShedules = state.schedules;
      var newSchedule =[... oldShedules, ...action.payload.value]
      return{...state,
        schedules : newSchedule
      } 
    case SET_CURRENT_SCHEDULE:
      return{...state,
      currentSchedule: {
        id: action.payload.value._id,
        name: action.payload.value.name,
      }
    }
    default:
      return state;
  }
  
}
export default agendaReduce;