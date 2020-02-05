import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, yupToFormErrors, prepareDataForValidation } from "formik";
import * as Yup from 'yup';
import axios from 'axios'


const Login = ({ status, values, errors, touched }) => {
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     console.log('status has changed', status);
    //     status && setUsers(info => [...users, status]);
    // }, [status]);
    // console.log(values);

    return (
        <div className="FormContainer">
            <Form>
                <div>
                    <label htmlFor='Username'>Username:</label>
                    <Field
                        type='text'
                        name='username'
                        placeholder='Username'
                    />
                    {touched.username && errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <Field
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>
                <button type='submit'>Log In</button>
            </Form>
        </div>
    )
}
const FormikLogin = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: '',
            password: '',
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter username'),
        password: Yup.string().required('Please enter password')
    }),
    handleSubmit(values, { props }) {
        // console.log('values object:', values);
        axios.post('https://expatjournalbackend.herokuapp.com/api/auth/login', values)
            .then(res => {
                window.localStorage.setItem('token', res.data.token)
                // console.log('values object:', values);
                console.log('info from api', res);
                props.history.push('/home')
            })
            .catch(err => {
                // console.log('values object:', values) 
                // console.log(err.response)
            }

            );
    }
})(Login);
export default FormikLogin;