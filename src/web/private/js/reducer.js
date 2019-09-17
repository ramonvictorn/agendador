import { combineReducers } from 'redux';
import agendaReduce from './reducers/agendaReduce.js'
import appReduce from './reducers/appReduce.js'
import usersReduce from './reducers/usersReduce.js'

const reducer = combineReducers({
    agendaReduce: agendaReduce,
    appReduce: appReduce,
    usersReduce: usersReduce,
 
});


export default reducer;