import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            welcomeMessage: '',
        };
    }

    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldPathVariableService(
            this.props.match.params.username
        )
            .then((response) => this.handleSuccessfulResponse(response))
            .catch((error) => this.handleError(error));
    };

    handleSuccessfulResponse = (response) => {
        this.setState({ welcomeMessage: response.data.message });
    };

    handleError = (error) => {
        console.log(error)
        this.setState({ welcomeMessage: error.message });
    };

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className='container'>
                    Welcome "{this.props.match.params.username}". You can manage
                    your todos <Link to='/todos'>here</Link>.
                </div>
                <div className='container'>
                    Click here to get a customized welcome message.
                    <button
                        onClick={this.retrieveWelcomeMessage}
                        className='btn btn-success'
                    >
                        Get Welcome Message
                    </button>
                </div>
                <div className='container'>{this.state.welcomeMessage}</div>
            </>
        );
    }
}

export default WelcomeComponent;
