import { combineReducers } from 'redux';
import agendaReduce from './reducers/agendaReduce.js'
import appReduce from './reducers/appReduce.js'

const reducer = combineReducers({
    agendaReduce: agendaReduce,
    appReduce: appReduce,
 
});


export default reducer;