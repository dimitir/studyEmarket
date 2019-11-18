import React from 'react';
import styles from './product.module.scss';
 

const product = ({ product, onClick, textButton }) => {
    return (
        <div className={styles.product}>
            <img className={styles.product_img} src={`img/products/${product.imgName}`} alt="" />
            <p className={styles.product_name}>{product.name}</p>
            <p className={styles.product_price}>{product.price}</p>
            <button onClick={() => onClick()}>{textButton}</button>
        </div>
    )
};

export default product;