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
      console.log('is_logged reduce app')
      return {...state};
    case SET_LOGGED:
      console.log('INITIAL ', initialState ,'state ', state, 'action ', action)
      return {...state, isLogged: action.payload.value}
    case SAVE_USER:
      console.log('foi save user',action.payload)
      return {...state, user: action.payload.value}
    default:
      return state;
  }
  
}
  export default appReduce;