
import { withFormik, Form, Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';


const SingUp = ({
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting = false
}) => (
        <Form onSubmit={handleSubmit}>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type='email' name='email' value={values.email} onChange={handleChange} />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='password' name='password' onChange={handleChange} />
            </div>

            <button type="submit" disabled={isSubmitting}>Send</button>
        </Form>
    );


const formikApp = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || '',
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().min(2).required(),
    }),

    handleSubmit(values, { setErrors, resetForm, setSubmitting, props }) {
        console.log(arguments);
        setTimeout(() => {
            if (values.email === 'my@mail.com') {
                setErrors({ email: 'This email is already taken' })
            }
            else {
                resetForm();
            }
            setSubmitting(false);
            console.log();
            resetForm();
        }, 2000);
        props.setEmail(values.email);
        props.setPassword(values.password);
        props.history.push('/market');
    }

})(SingUp);

export default formikApp;