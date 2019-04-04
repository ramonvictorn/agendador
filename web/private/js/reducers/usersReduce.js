import {
    SAVE_USER,
} from '../actions/usersActions.js';


const initialState = {
    users:{}
}

const usersReduce = (state = initialState, action)=>{
    switch(action.type){
        case SAVE_USER:
        console.log('case SAVE_USER: ', action.payload)
            state.users[action.payload.value._id] = {
                img: action.payload.value.details.urlUser,
                name:action.payload.value.name,
            }
            return {...state, users: state.users };
        default:
            return state;
        }
}


export default usersReduce;