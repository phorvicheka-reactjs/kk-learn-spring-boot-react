import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'username',
            password: 'password',
            hasLoginFailed: false,
            showSuccessMessage: false,
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    loginClicked = () => {
        if (
            this.state.username === 'username' &&
            this.state.password === 'password'
        ) {
            AuthenticationService.registerSuccessfulLogin(
                this.state.username,
                this.state.password
            );
            this.props.history.push(`/welcome/${this.state.username}`);
        } else {
            this.setState({ showSuccessMessage: false, hasLoginFailed: true });
        }
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='container'>
                    {this.state.hasLoginFailed && (
                        <div className='alert alert-warning'>
                            Invalid Credentials
                        </div>
                    )}
                    {this.state.showSuccessMessage && (
                        <div>Login Sucessful</div>
                    )}
                    User Name:{' '}
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    Password:{' '}
                    <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button
                        className='btn btn-success'
                        onClick={this.loginClicked}
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;
