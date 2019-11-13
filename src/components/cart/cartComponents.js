import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/market/actions';
import cart from './cart'


const mapStateProps = (state) => (
    {
        products: state.market,
    }
)


const mapDispatchToProps = (dispatch) => (
    {
        removeProduct: i => dispatch(removeFromCart(i)),
    }
)

export default connect(mapStateProps, mapDispatchToProps)(cart);


// export default cartComponents;
