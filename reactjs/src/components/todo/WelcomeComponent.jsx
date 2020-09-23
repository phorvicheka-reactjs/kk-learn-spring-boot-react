import React, { Component } from 'react';


class WelcomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            welcomeMessage: '',
        };
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div>
                    Welcome "{this.props.match.params.username}". 
                </div>
            </>
        );
    }
}

export default WelcomeComponent;
