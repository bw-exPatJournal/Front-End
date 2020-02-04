import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function RegisterForm({ status, values, errors, touched }) {
    console.log('Values:',values)
  return (
    <Form>
        <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='name' name='name' placeholder='Name' />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Email' />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      <div>
        {touched.username && errors.username&& <p>{errors.username}</p>}
        <Field type='text' name='username' placeholder='Username' />
      </div>
      <div>
      {touched.bio && errors.bio && <p>{errors.bio}</p>}
      <Field type='text' name='bio' placeholder='Bio' />
    </div>
      <button type='submit'>Register!</button>
    </Form>
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

    handleSubmit(values, {setStatus}){
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