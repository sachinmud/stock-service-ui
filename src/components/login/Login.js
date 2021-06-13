import React from 'react';
import LoginForm from '../../forms/LoginForm';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {Redirect} from 'react-router-dom';
import Header from '../common/Header';

class Login extends React.Component {

constructor() {
  super();
  this.loginUser = this.loginUser.bind(this);
}

  loginUser(userData) {
    this.props.dispatch(actions.login(userData));
  }
  
  render() {

    const { isAuth, errors } = this.props.auth;
    const { successRegister } = this.props.location.state || false;
    if (isAuth) {
      return <Redirect to={{pathname: '/home'}} />
    }
    
    return (
      <div className='form-group'>
        <h1>Login</h1>
        <Header/>
        <LoginForm submitCb={this.loginUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(Login);