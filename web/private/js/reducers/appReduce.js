import {
    IS_LOGGED,
    SET_LOGGED
  } from '../actions/appActions.js';
  
const initialState = {
    isLogged: false
}
  
const appReduce = (state = initialState, action)=>{
  switch(action.type){
    case IS_LOGGED:
      return {...state};
    case SET_LOGGED:
      return {...state, isLogged: !isLogged}
    default:
      return state;
  }
  
}
  export default appReduce;