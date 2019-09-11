import {
    SAVE_USER,
} from '../actions/usersActions.js';


const initialState = {
    users : {}
}

const usersReduce = (state = initialState, action)=>{
    switch(action.type){
        case SAVE_USER:
        return{
            ...state,
            users:{
                ...state.users,
                [action.payload.value._id] : {
                        name:action.payload.value.name,
                        img: action.payload.value.details.urlUser,
                 }
            }
        }
        default:
            return state;
        }
}


export default usersReduce;