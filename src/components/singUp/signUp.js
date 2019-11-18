
import { withFormik, Form, Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import style from './signUp.module.scss';



const SingUp = ({
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting = false
}) => (
        <React.Fragment>
            <h1 className={style.titleSingUp}>Welcome to market</h1>
            <div className={style.singUpBlock}>
                <h4 className={style.formWelcome}>Sing up pleace</h4>
                <Form onSubmit={handleSubmit}>

                    <div>
                        {touched.name && errors.name && <p>{errors.name}</p>}
                        <Field type='text' name='name' placeholder="  Name" value={values.name} onChange={handleChange} />
                    </div>
                    <div>
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        <Field type='email' name='email' placeholder=" Email" value={values.email} onChange={handleChange} />
                    </div>
                    <div>
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <Field type='password' name='password' placeholder="  Password" onChange={handleChange} />
                    </div>
                    <button type="submit" disabled={isSubmitting}>Send</button>
                </Form>
            </div>
        </React.Fragment>


    );


const formikApp = withFormik({
    mapPropsToValues({ email, password, name }) {
        return {
            email: email || '',
            password: password || '',
            name: name || '',
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().min(8).required(),
        name: Yup.string().min(2).required(),
    }),

    handleSubmit(values, { setErrors, resetForm, setSubmitting, props }) {
        setTimeout(() => {
            if (values.email === 'my@mail.com') {
                setErrors({ email: 'This email is already taken' })
            }
            else {
                resetForm();
            }
            setSubmitting(false);
            resetForm();
        }, 2000);
        props.setEmail(values.email);
        props.setPassword(values.password);
        props.setUserName(values.name);
        props.history.push('/market');
    }

})(SingUp);

export default formikApp;