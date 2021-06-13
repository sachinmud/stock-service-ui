import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Multiselect from 'react-widgets/Multiselect'

import 'react-widgets/styles.css'

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

const renderMultiselect = ({ input, data, valuefield, textfield }) =>
  <Multiselect {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valuefield}
    textField={textfield}
  />

const RegisterForm = props => {
  const rolesList = [ { rolename: 'ROLE_ADMIN', id: '60b385c2d20ed936c005d27a' },
  { rolename: 'ROLE_CLIENT', id: '60b385c2d20ed936c005d27b' } ]
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
          <div className="form-group row">
            <label className="col-md-5 text-right">Roles</label>
            <div className="input-group col-md-7">
              <Field name="roles" component={renderMultiselect}
                data={rolesList} valuefield="id" textfield="rolename" />
            </div>
          </div>


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
  form: 'registerForm' // a unique identifier for this form
  ,  validate
})(RegisterForm)