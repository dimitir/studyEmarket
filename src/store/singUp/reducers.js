import { SIGN_UP_SET_EMAIL, SIGN_UP_SET_PASSWORD } from './actions';


const defaultState = {
    email: '',
    password: ''
}

export const singUpReducer = (state = defaultState, action) => {
    console.log(state);
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

        default: return state
    }
}