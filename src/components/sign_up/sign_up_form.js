import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Input from '../general/input'

const SignUpForm = props => {
  const { onSubmit, handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <Field name="email" label="Email" component={Input}/>
        <Field name="password" label="Password" size="m6 s12" type="password" component={Input}/>
        <Field name="confirmPassword" label="Confirm Password" size="m6 s12" type="password" component={Input}/>
      </div>
      <div className="row center">
        <div className="col s6">
          <button className="btn blue darken-3 waves-effect waves-light" type="button">Reset</button>
        </div>
        <div className="col s6">
          <button className="btn blue darken-3 waves-effect waves-light">Sign Up</button>
        </div>  
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'sign-up-form'
})(SignUpForm);
