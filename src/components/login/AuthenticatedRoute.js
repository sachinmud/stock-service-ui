import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as actions from '../../actions';

class AuthenticatedRoute extends Component {
    render() {
        if (actions.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRoute