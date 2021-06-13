import React from 'react';
import PermissionForm from '../../forms/PermissionForm';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {Redirect} from 'react-router-dom';
import Header from '../common/Header';

class Permission extends React.Component {

constructor() {
  super();
  this.savePermission = this.savePermission.bind(this);
}

  savePermission(userData) {
    //this.props.dispatch(actions.login(userData));
  }
  
  render() {

    return (
        <div>
        <div className="container">
            <Header />
        </div>
        <div className="starter-template">
            <PermissionForm submitCb={this.savePermission} />
        </div>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(Permission);