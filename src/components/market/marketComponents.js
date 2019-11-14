import { connect } from 'react-redux';
import market from './market';
import { pickUpProduct } from '../../store/marketCart/actions';

const mapStateProps = (state) => (
    {
        products: state.marketCart,
    }
)



const mapDispatchToProps = (dispatch) => (
    {
        pickUpProduct: id => dispatch(pickUpProduct(id)),
    }
)


export default connect(mapStateProps, mapDispatchToProps)(market);

