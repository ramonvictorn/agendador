import {
    SAVE_USER,
} from '../actions/usersActions.js';


const initialState = {
    users : {}
}

const usersReduce = (state = initialState, action)=>{
    switch(action.type){
        case SAVE_USER:
        // state.users['ramon'] = 'ssds090909090dsds';
        var a = Object.assign({}, state.uses);
        a[action.payload.value._id] = {
            name:action.payload.value.name,
            img: action.payload.value.details.urlUser,
        };
        console.log(' a é esse ', a);
        console.log('state é ', state.users)
            return {...state, users: a};
        default:
            return state;
        }
}


export default usersReduce;