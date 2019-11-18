import { SIGN_UP_SET_EMAIL, SIGN_UP_SET_PASSWORD, SIGN_UP_SET_USER_NAME } from './actions';


const singUpReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_UP_SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };

        case SIGN_UP_SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };

        case SIGN_UP_SET_USER_NAME:
            return {
                ...state,
                name: action.payload
            };

        default: return state
    }
}


export default singUpReducer;