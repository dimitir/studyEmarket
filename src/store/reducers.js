import { combineReducers } from 'redux';
import { singUpReducer } from './singUp/reducers';
import { marketReducers } from './market/reducers';

export default combineReducers({
    singUp: singUpReducer,
    market: marketReducers,
})