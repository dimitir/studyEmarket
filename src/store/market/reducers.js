import { PICK_UP_PRODUCT_ON_PAGE_PRODUCTS } from './actions';

const defaultState = [
    {
        name: 'Sony',
        imgName: 'sony.jpg',
        id: 100,
        price: '1000',
        curent: '',
        cart: false
    },
    {
        name: 'Apple',
        imgName: 'apple.jpg',
        id: 101,
        price: '2000',
        curent: '',
        cart: false
    },
    {
        name: 'Yota',
        imgName: 'yota.jpg',
        id: 102,
        curent: '',
        price: '3000',
        cart: false
    }
]

export const marketReducers = (state = defaultState, action) => {
    switch (action.type) {
        case PICK_UP_PRODUCT_ON_PAGE_PRODUCTS:
            let newStateProduct = state[action.id];
            newStateProduct.id = true;
            return [...state, newStateProduct];
        default: return state
    }
}