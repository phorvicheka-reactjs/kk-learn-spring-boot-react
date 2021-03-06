import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './LoginComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';

class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <Router>
                        <HeaderComponent />
                        <Switch>
                            <AuthenticatedRoute path='/' exact component={LoginComponent} />
                            <Route path='/login' component={LoginComponent} />
                            <AuthenticatedRoute
                                path='/welcome/:username'
                                component={WelcomeComponent}
                            />
                            <AuthenticatedRoute
                                path='/todos'
                                component={ListTodosComponent}
                            />
                            <AuthenticatedRoute path='/logout' component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                </Router>
            </div>
        );
    }
}

export default TodoApp;
