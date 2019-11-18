import React from 'react';
import imgCart from '../../img/icon/shopping-cart.svg';
import style from './cartButtonInfo.module.scss';
import { Link } from 'react-router-dom'





export default ({ productsNum, userInfo }) => {
    let sumMesage = '';
    let productsItem = productsNum.filter(item => item.onCart === true);
    let productsNumSum = productsItem.length;
    if (productsNumSum > 0) {
        sumMesage = productsNumSum;
    }


    const SingUpLink = () => {


        console.log(userInfo);
        if (Object.keys(userInfo).length > 0) {
            return (
                <div>
                    <Link to='/' className={style.linkMarket}>{userInfo.name} </Link>
                </div>
            )
        }
        else {
            return (
                <Link to='/'>Sing up</Link>
            )
        }
    }




    return (
        <React.Fragment >
            <div className={style.icons}>
                <Link to="/market" className={style.linkMarket}>Market</Link>
                <SingUpLink />
                <Link to="/cart">
                    <img src={imgCart} alt="" className={style.iconCartImg} />
                    <span className={style.iconCartNum}>{sumMesage}</span>
                </Link>
            </div>

        </React.Fragment>
    )
}


