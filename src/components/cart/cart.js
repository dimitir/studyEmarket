import React from 'react';
import Product from '../_product/product';
import styleButtonInfo from './cartButtonInfo.module.scss';
import style from './cart.module.scss';




const Cart = ({ products, removeProduct, history }) => {
    let productsBlock;
    const goToMarcet = () => {
        history.push('/market');
    }
    let showProducts = products.filter(product => product.onCart === true).map((product, i) => {
        console.log('product');
        return (
            <Product onClick={() => removeProduct(product.id)} product={product} key={i} textButton='remove from cart' />
        )
    })

    if (showProducts.length == 0) {
        productsBlock = <h2 className={styleButtonInfo.titleNothing}>Nothing added to cart</h2>;
    }
    else {
        productsBlock = showProducts;
    }


    return (
        <React.Fragment>
            <div className={'pageTitle'}><h3>Cart</h3></div>
            
            <div className={style.productBlock}>
                {productsBlock}
            </div>

        </React.Fragment>
    )
}

export default Cart;
