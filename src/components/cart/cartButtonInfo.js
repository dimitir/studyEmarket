import React from 'react';
import imgCart from '../../img/icon/shopping-cart.svg';
import style from './cartButtonInfo.module.scss';
import { Link } from 'react-router-dom'

export default ({ productsNum }) => {
    console.log('productsNum');
    console.log(productsNum);
    let productsItem = productsNum.filter(item => item.onCart === true);
    let productsNumSum = productsItem.length;
    console.log('productsNumSum');
    console.log(productsItem);
    return (
        <React.Fragment >
            <div className={style.icons}>
                <Link to="/cart">
                    <img src={imgCart} alt="" className={style.iconCartImg} />
                    <span className={style.iconCartNum}>{productsNumSum}</span>
                </Link>
            </div>

        </React.Fragment>
    )
}


