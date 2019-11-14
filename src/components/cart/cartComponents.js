import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/marketCart/actions';
import cart from './cart'


const mapStateProps = (state) => (
    {
        products: state.marketCart,
    }
)


const mapDispatchToProps = (dispatch) => (
    {
        removeProduct: i => dispatch(removeFromCart(i)),
    }
)

export default connect(mapStateProps, mapDispatchToProps)(cart);


// export default cartComponents;
