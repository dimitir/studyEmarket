import singUp from './signUp';
import { connect } from 'react-redux';
import { setUserName, setEmail, setPassword } from '../../store/singUp/actions';


const mapStateProps = (state) => (
    {
        email: state.singUp.email,
        password: state.singUp.password,
        name: state.singUp.name
    }
)

/* const mapDispatchToProps =
{
    setEmail,
    setPassword
} */

const mapDispatchToProps = (dispatch) => (
    {
        setUserName: val => dispatch(setUserName(val)),
        setEmail: val => dispatch(setEmail(val)),
        setPassword: val => dispatch(setPassword(val)),
    }
)





export default connect(mapStateProps, mapDispatchToProps)(singUp);
