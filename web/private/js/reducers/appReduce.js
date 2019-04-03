import {
    IS_LOGGED,
    SET_LOGGED,
    SAVE_USER,
  } from '../actions/appActions.js';
  
const initialState = {
    isLogged: null,
    user: null,
}
  
const appReduce = (state = initialState, action)=>{
  switch(action.type){
    case IS_LOGGED:
      return {...state};
    case SET_LOGGED:
      return {...state, isLogged: action.payload.value}
    case SAVE_USER:
      return {...state, user: action.payload.value}
    default:
      return state;
  }
  
}
  export default appReduce;