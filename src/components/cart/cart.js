import React from 'react';
import Product from '../product'



const Cart = ({ products, removeProduct, history }) => {
    console.log('history cart');
    console.log(history);

    const goToMarcet = () => {
        history.push('/');
    }

    const showProducts = products.filter(product => product.onCart === true).map((product, i) => {
        console.log('product');
        return (
            <Product onClick={() => removeProduct(product.id)} product={product} key={i} textButton='remove from cart' />
        )
    })


    return (
        <React.Fragment>
            <div className={'pageTitle'}><h3>Cart</h3></div>
            <button onClick={() => goToMarcet()}>market</button>
            {showProducts}
        </React.Fragment>
    )
}

export default Cart;
