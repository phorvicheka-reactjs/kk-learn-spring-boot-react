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
        this.refreshTodos();
        console.log(this.state);
    }

    refreshTodos = () => {
        let username = AuthenticationService.getUsername();
        TodoDataService.retrieveAllTodos(username).then((response) => {
            this.setState({ todos: response.data });
        });
    };

    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getUsername();
        TodoDataService.deleteTodo(username, id).then((response) => {
            this.setState({ message: `Delete of todo ${id} Successful` });
            this.refreshTodos();
        });
    };

    updateTodoClicked = (id) => {
        console.log('update ' + id);
        this.props.history.push(`/todos/${id}`);
    };

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
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>
                                        <button
                                            className='btn btn-success'
                                            onClick={() =>
                                                this.updateTodoClicked(todo.id)
                                            }
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-warning'
                                            onClick={() =>
                                                this.deleteTodoClicked(todo.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
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
