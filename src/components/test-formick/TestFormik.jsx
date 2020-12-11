import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

    const initialValues = {
                lastName : "",
                firstName : "",
                }

    const validationSchema = Yup.object().shape({
        lastName : Yup.string().required("Required imput"),
        firstName : Yup.string().required("Required imput"),
        })             

class TestFormik extends React.Component{
        submit = (values) => {
            console.log(values);
        }

    render(){
        

        return(
            <Formik
                initialValues={initialValues}
                onSubmit={ this.submit }
                validationSchema={ validationSchema }
            >
                {({ errors, touched})=> (
                
                    <Form className="container m-5"> 
                        <div className = "m5">
                            
                            <label htmlFor = "lastName" className="mb-3">Last Name</label>
                            <Field 
                                type="text" 
                                name="lastName" 
                                placeholder='Lastname' 
                                className= {`form-control form-control-lg ${ errors.lastName && touched.lastName  }`}/>                        
                            <ErrorMessage component="small" name="lastName" className="text-danger float-right" />
                            {/* errors.lastName && touched.lastName && <small  role="alert">{ errors.lastName}</small>*/}
                            <br/>

                            <label htmlFor = "firstName" className="mb-3">First Name</label>
                            <Field type='text' name = "firstName" placeholder='firstName' className= "form-control form-control-lg"/>
                            <ErrorMessage component="small" name="firstName" className="text-danger float-right"/>
                            
                            <br/>
                        </div>
                        
                        <button type='submit' className= "btn btn-success mt-3">Submit</button>

                    </Form> 
                )}     

            </Formik>
        )
    }

}

export default TestFormik;