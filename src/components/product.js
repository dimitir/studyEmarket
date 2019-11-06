import React from 'react';
import styles from './marketComponents.module.scss';


const product = ({ product }) => {
    console.log('product');
    console.log(process.env.NODE_ENV === 'development');
    console.group("process.env.NODE_ENV");
    console.groupEnd();

    return (
        <div className={styles.product}>
            <p>test</p>
            <img className={styles.product_img} src={`img/products/${product.imgName}`} alt="" />
            <h4 className={styles.product_name}>{product.name}</h4>
            <h5 className="product_price"></h5>
            <button>Add to cart</button>
        </div>
    )
};

export default product;