import { PICK_UP_PRODUCT_ON_PAGE_PRODUCTS } from './actions';
import defaultState from '../defaultProducts';

import { REMOVE_FROM_CART } from './actions';


const cartReducers = (state = defaultState, action) => {
    /*   console.log('action.id');
      console.log(action.i); */
    switch (action.type) {


        default: return state
    }

}


export default (state = defaultState, action) => {
    switch (action.type) {
        case PICK_UP_PRODUCT_ON_PAGE_PRODUCTS:
            let newState = state.map(item => {
                if (item.id === action.id) {
                    item.onCart = true;
                }
                return item;
            });
            return newState;

        case REMOVE_FROM_CART:
            newState = state.map(item => {
                if (item.id === action.id) {
                    item.onCart = false;
                }
                return item;
            })
            return newState

        default: return state
    }
}
