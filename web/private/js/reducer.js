import { combineReducers } from 'redux';
import agendaReduce from './reducers/agendaReduce.js'

const reducer = combineReducers({
    agendaReduce: agendaReduce,
 
});


export default reducer;