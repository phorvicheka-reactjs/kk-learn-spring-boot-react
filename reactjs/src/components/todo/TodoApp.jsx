import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './LoginComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';

class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <Router>
                    <Switch>
                        <Route path='/' exact component={LoginComponent} />
                        <Route path='/login' component={LoginComponent} />
                        <Route
                            path='/welcome/:username'
                            component={WelcomeComponent}
                        />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default TodoApp;
