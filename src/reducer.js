import { combineReducers } from 'redux'
import { GET_USER } from './type';

const user = (
    state = {
        name: "ahmad",
        alamat: "solo"
    },
    action
) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default combineReducers({
    user: user
})