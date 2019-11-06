// add opportunity give count for product ? 
import React from 'react';
import Product from './product';
import styles from './marketComponents.module.scss';



let Products = ({ products }) => {
    let ShowProducts = products.map((product, i) => {
        return (
            <Product product={product} key={i} />
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