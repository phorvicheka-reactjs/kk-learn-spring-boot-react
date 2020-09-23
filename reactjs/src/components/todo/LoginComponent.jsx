import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
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
            this.setState({ showSuccessMessage: true, hasLoginFailed: false });
        } else {
            this.setState({ showSuccessMessage: false, hasLoginFailed: true });
        }
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div >
                    {this.state.hasLoginFailed && (
                        <div>
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
