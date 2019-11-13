import { connect } from 'react-redux';
import market from './market';
import { pickUpProduct } from '../../store/market/actions';

const mapStateProps = (state) => (
    {
        products: state.market,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        pickUpProduct: id => dispatch(pickUpProduct(id)),
    }
)


export default connect(mapStateProps, mapDispatchToProps)(market);

