import {
    IS_LOGGED,
    SET_LOGGED,
    SAVE_MY_ID,
    // SAVE_USER,
  } from '../actions/appActions.js';
  
const initialState = {
    isLogged: null,
    myUser: null,
}
  
const appReduce = (state = initialState, action)=>{
  switch(action.type){
    case IS_LOGGED:
      return {...state};
    case SET_LOGGED:
      return {...state, isLogged: action.payload.value}
    // case SAVE_USER:
    //   return {...state, user: action.payload.value}
    case SAVE_MY_ID:
      return{...state, myUser:action.payload.id}
    default:
      return state;
  }
  
}
  export default appReduce;