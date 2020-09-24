import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    componentDidMount() {
        console.log('componentDidMount');
        let username = AuthenticationService.getUsername();
        TodoDataService.retrieveAllTodos(username).then((response) => {
            this.setState({ todos: response.data });
        });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>{todo.done.toString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;
