import {
    IS_LOGGED,
    SET_LOGGED,
    SAVE_MY_ID,
    TOGGLE_LOADING,
  } from '../actions/appActions.js';
  
const initialState = {
    isLogged: null,
    myUser: null,
    loading:false,
}
  
const appReduce = (state = initialState, action)=>{
  switch(action.type){
    case IS_LOGGED:
      return {...state};
    case SET_LOGGED:
      return {...state, isLogged: action.payload.value}
    case SAVE_MY_ID:
      return{...state, myUser:action.payload.value};
      case TOGGLE_LOADING:
      return{...state,loading: !state.loading};
    default:
      return state;
  }
  
}
  export default appReduce;