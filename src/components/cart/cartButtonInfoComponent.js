import React from 'react';

import { connect } from 'react-redux';
import cartButtonInfo from './cartButtonInfo'

const mapStateProps = (state) => ({
    productsNum: state.marketCart,
    userInfo: state.singUp
})



export default connect(mapStateProps)(cartButtonInfo);