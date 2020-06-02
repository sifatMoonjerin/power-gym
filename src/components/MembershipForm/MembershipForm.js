import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as Yup from 'yup';



const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    birthDay: '',
    mobile: '',
    gender: '',
    address: '',
    country: '',
    city: '',
    postcode: ''
}



const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    birthDay: Yup.string().required('Required'),
    mobile: Yup.string()
        .matches(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,'Wrong Number')
        .required('Required'),
    address: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    postcode: Yup.string().matches(/^[0-9]*$/gm,'Invalid Post Code').required('Required'),
})



const MembershipForm = ({formComplete}) => {


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => formComplete(values)}
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='firstName'>First Name: </label>
                    <Field type='text' name='firstName' id='firstName'/>
                    <ErrorMessage name='firstName'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>
                
                <div className='form-control'>
                    <label htmlFor='lastName'>Last Name: </label>
                    <Field type='text' name='lastName' id='lastName'/>
                    <ErrorMessage name='lastName'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>
                
                <div className='form-control'>
                    <label htmlFor='email'>Email: </label>
                    <Field type='email' name='email' id='email'/>
                    <ErrorMessage name='email'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='mobile'>Mobile: </label>
                    <Field type='text' name='mobile' id='mobile'/>
                    <ErrorMessage name='mobile'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='birthDay'>Date of Birth: </label>
                    <Field type='date' name='birthDay' id='birthDay'/>
                    <ErrorMessage name='birthDay'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='gender'>Gender: </label>
                    <Field as='select' name='gender' id='gender'>
                        <option>Male</option>
                        <option>Female</option>
                    </Field>
                    <ErrorMessage name='gender'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='address'>Address: </label>
                    <Field type='text' name='address' id='address'/>
                    <ErrorMessage name='address'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='country'>Country: </label>
                    <Field type='text' name='country' id='country'/>
                    <ErrorMessage name='country'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='city'>City: </label>
                    <Field type='text' name='city' id='city'/>
                    <ErrorMessage name='city'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='postcode'>Postcode: </label>
                    <Field type='text' name='postcode' id='postcode'/>
                    <ErrorMessage name='postcode'>
                        {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>
                
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default MembershipForm;