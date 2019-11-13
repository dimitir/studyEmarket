import singUp from './signUp';
// import React from 'react';
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../../store/singUp/actions';


const mapStateProps = (state) => (
    {
        email: state.singUp.email,
        password: state.singUp.password
    }
)

/* const mapDispatchToProps =
{
    setEmail,
    setPassword
} */

const mapDispatchToProps = (dispatch) => (
    {
        setEmail: val => dispatch(setEmail(val)),
        setPassword: val => dispatch(setPassword(val)),
    }
)





const singUpContainers = connect(mapStateProps, mapDispatchToProps)(singUp);
export default singUpContainers;