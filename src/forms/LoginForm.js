import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group row">
    <label className="col-md-5 text-right">{label}</label>
    <div className="input-group col-md-7">
      <input {...input} type={type} />
    </div>
      {touched &&
        ((error && <div className="alert alert-danger row">{error}</div>))}
  </div>
)

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitCb } = props
  return (
    <form className="form-horizontal" onSubmit={handleSubmit(submitCb)}>
          <Field
            name="username"
            component="input"
            type="text"
            label="User Name"
            className="form-control"
            component={renderField}
          />
          <Field
            name="password"
            component="input"
            type="password"
            label="Password"
            className="form-control"
            component={renderField}
          />
        <button className="btn btn-success" type="submit" disabled={pristine || submitting}>
          Submit
        </button>
    </form>
  )
}

const validate = values => {
  const errors = {};

  if (values.username && values.username.length < 4) {
    errors.username = 'Username min length is 4 characters!';
  }

  if (!values.password) {
    errors.password = 'Please enter Password!';
  }

  return errors;
}

export default reduxForm({
  form: 'loginForm' // a unique identifier for this form
  ,  validate
})(LoginForm)