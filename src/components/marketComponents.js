import { connect } from 'react-redux';
import market from './market';
import {pickUpProduct} from '../store/market/actions';
// import market from '../store/reducers';

const mapStateProps = (state) => (
    {
        products: state.market,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        pickUpProduct: i => dispatch(pickUpProduct(i)),
    }
)



const marketComponents = connect(mapStateProps, mapDispatchToProps)(market);
export default marketComponents;
