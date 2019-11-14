export const PICK_UP_PRODUCT_ON_PAGE_PRODUCTS = 'PICK_UP_PRODUCT_ON_PAGE_PRODUCTS';

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';



/* export const removeFromCart = id =>
    ({
        type: REMOVE_FROM_CART,
        id
    }) */


export const removeFromCart = id => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: REMOVE_FROM_CART,
                id
            })
        },
            1000)
    }
}


export const pickUpProduct = id => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: PICK_UP_PRODUCT_ON_PAGE_PRODUCTS,
                id
            })
        }, 1000)
    }
};




/* export const pickUpProduct = id => ({
    type: PICK_UP_PRODUCT_ON_PAGE_PRODUCTS,
    id
}); */