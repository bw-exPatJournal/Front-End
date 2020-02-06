import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, yupToFormErrors, prepareDataForValidation } from "formik";
import { connect } from 'react-redux';
import { loginAction } from '../../actions';
import * as Yup from 'yup';
import axios from 'axios'

const Login = (props) => {
    console.log(props)
    //used global state to detect login instead of calling in submithandler
    //reason: gets stuck due to START_LOGIN_SUCCESS refreshing props 
    useEffect(() => {
        if (props.async.isLoggedIn) {
            props.history.push('/home')
        };
    }, [props]);


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
                    {props.touched.username && props.errors.username && <p>{props.errors.username}</p>}
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <Field
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}
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
        // axios.post('https://expatjournalbackend.herokuapp.com/api/auth/login', values)
        //     .then(res => {
        //         window.localStorage.setItem('token', res.data.token)
        //         // console.log('values object:', values);
        //         console.log('info from api', res);
        //         props.history.push('/home')
        //     })
        //     .catch(err => {
        //         // console.log('values object:', values) 
        //         // console.log(err.response)
        //     }

        //     );
        console.log('loggin in...:', values)
        props.loginAction(values);
        console.log('success!!')
    }
})(Login);
const mapStateToProps = state => {
    return {
        async: {
            posts: state.async.posts,
            error: state.async.error,
            isLoading: state.async.isLoading,
            isLoggedIn: state.async.isLoggedIn,
            user: state.async.user
        }
    }
}
export default connect(
    mapStateToProps,
    //place imported actions below
    { loginAction }
)(FormikLogin);