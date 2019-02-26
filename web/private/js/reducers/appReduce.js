import {
    IS_LOGGED,
    SET_LOGGED
  } from '../actions/appActions.js';
  
const initialState = {
    isLogged: null
}
  
const appReduce = (state = initialState, action)=>{
  switch(action.type){
    case IS_LOGGED:
      return {...state};
    case SET_LOGGED:
      console.log('INITIAL ', initialState ,'state ', state)
      return {...state, isLogged: !state.isLogged}
    default:
      return state;
  }
  
}
  export default appReduce;