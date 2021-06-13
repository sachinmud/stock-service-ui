import React from 'react';
import RegisterForm from '../../forms/RegisterForm';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {Redirect} from 'react-router-dom';
import Header from '../common/Header';

class Register extends React.Component {

  constructor() {
    super();
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(userData) {
    this.props.dispatch(actions.register(userData));    
  }
  
  render() {
    const { registered, errors } = this.props;
    
    if (registered) {
      return <Redirect to={{pathname: '/login', state: { successRegister: true }}} />
    }
    return (
      <div className='form-group'>
          <Header/>
          <h1>Register User</h1>
          <RegisterForm submitCb={this.registerUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
    registered: state.register.registered,
    errors: state.register.errors
  }
}

export default connect(mapStateToProps)(Register)