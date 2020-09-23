import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class AuthenticatedRoute extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const username = AuthenticationService.getUsername();

        if (isUserLoggedIn) {
            if (this.props.path === '/') {
                return <Redirect to={`/welcome/${username}`} />;
            } else {
                return <Route {...this.props} />;
            }
        } else {
            return <Redirect to='/login' />;
        }
    }
}

export default AuthenticatedRoute;
