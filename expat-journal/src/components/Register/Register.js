import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import styled from 'styled-components';
import background from '../../imgs/background.png'
import logo from '../../imgs/logo.png'


const BackgroundImage = styled.div`
    width:100%;
    height:100vh;
    background-image: url(${background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5%;
    box-sizing: border-box;
    `;

const CaptureLogo = styled.div`
    text-align: center;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    width:15%;
    height: 10vh;
    margin-bottom: 2%;
    `;


const FormContainer = styled.div`
    background: #F4F5F7;
    display: flex;
    justify-content: center;
    `;

const TextContainer = styled.div`
    background: #FFFFFF;
    border: 0.3px solid #959595;
    border-radius: 5px;
    padding-top: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    `;

const BioContainer = styled.div`
    background: #FFFFFF;
    border: 0.3px solid #959595;
    border-radius: 5px;
    padding-top: 5%;
    display: flex;
    justify-content: flex-start;
    height: 10vh;
    flex-direction: column;
    margin: 0 auto;
    width: 60%;
    `;


const Button = styled.button`
    width: 300px;
    height: 35px;
    background: #38A1DE;
    border-radius: 5px;
    color: white;
    margin-top: 10%;
    margin-bottom: 15%;
    `;

const P = styled.p`
    font-size: 0.6rem;
    `;

function RegisterForm({ status, values, errors, touched }) {
    console.log('Values:', values)
    return (
        <BackgroundImage id='BackgroundImage'>
            <CaptureLogo></CaptureLogo>
            
                <FormContainer>
                    <Form>
                        <TextContainer>
                            <Field type='name' name='name' placeholder='Name'/>
                            {touched.name && errors.name && <P>{errors.name}</P>}
                        </TextContainer>
                        <TextContainer>
                            <Field type='email' name='email' placeholder='Email' />
                            {touched.email && errors.email && <P>{errors.email}</P>}
                        </TextContainer>
                        <TextContainer>
                            <Field type='password' name='password' placeholder='Password' />
                            {touched.password && errors.password && <P>{errors.password}</P>}
                        </TextContainer>
                        <TextContainer>
                            <Field type='text' name='username' placeholder='Username' />
                            {touched.username && errors.username && <P>{errors.username}</P>}
                        </TextContainer>
                        <BioContainer>
                            <Field type='text' name='bio' placeholder='Bio' />
                            {touched.bio && errors.bio && <P>{errors.bio}</P>}
                        </BioContainer>
                        <Button type='submit'>Register!</Button>
                    </Form>
                </FormContainer>
           
        </BackgroundImage>
    );
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({ name, email, username, password, bio }) {
        return {
            name: name || '',
            email: email || '',
            username: username || '',
            password: password || '',
            bio: bio || ''
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please enter name'),
        email: Yup.string().required('Email is required'),
        username: Yup.string().required('Please enter username'),
        password: Yup.string().min(6, 'Password must be 6 characters').required('Please enter password'),
        bio: Yup.string().required('Please enter a bio')
    }),

    handleSubmit(values, { setStatus }) {
        console.log('values object:', values);
        axios
            .post('https://expatjournalbackend.herokuapp.com/api/auth/register', values)
            .then(res => {
                console.log('values object:', values);
                console.log('info from api', res);

            })
            .catch(err => {
                console.log('values object:', values)
                console.log(err.response)
            }
            );
    }
})(RegisterForm);

export default FormikRegisterForm;