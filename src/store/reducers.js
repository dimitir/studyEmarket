import { combineReducers } from 'redux';
import singUpReducer from './singUp/reducers';
import marketReducers from './marketCart/reducers';
// import cartReducers from './cart/reducers';


export default combineReducers({
    singUp: singUpReducer,
    marketCart: marketReducers,
})