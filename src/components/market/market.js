// add opportunity give count for product ? 
import React from 'react';
import Product from '../product';
import styles from './marketComponents.module.scss';



let Products = ({ products, pickUpProduct, history }) => {
    const goToCart = () => {
        history.push('/cart');
    }

    let ShowProducts = products.map((product, i) => {
        let textButton;
        let onClick;
        if (product.onCart == true) {
            textButton = 'Go to cart';
            onClick = goToCart;
        }
        else {
            textButton = 'Add to cart';
            onClick = () => pickUpProduct(product.id);
        }
        return (
            <Product onClick={onClick} product={product} key={i} textButton={textButton} />
        )

    })
    return (
        <React.Fragment>
            <div className={'pageTitle'}><h3 >Market</h3></div>
            <div className={styles.productBlock}>
                {ShowProducts}
            </div>
        </React.Fragment>
    )
}

export default Products;