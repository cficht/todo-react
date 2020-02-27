import React, { Component } from 'react'
import Add from './Add.js';
import List from './List.js';
import { getTodos, addTodo, updateTodo, deleteTodo } from './todo-api.js';

export default class TodoApp extends Component {
    state = { 
        todos: [],
        addTodo: '',
        userName: ''
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const userName = user.email.split('@')[0];
        this.setState({ userName: userName });

        const todos = await getTodos(user.token);
        this.setState({ todos: todos.body })
    }

    handleAddInput = (e) => {
        this.setState({ addTodo: e.target.value})
    }

    handleAddSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const newTodo = {
            "task": this.state.addTodo
        }
        await addTodo(newTodo, user.token);
        const todos = await getTodos(user.token);
        this.setState({ todos: todos.body })
    }

    handleUpdate = async (todoId) => {
        const user = JSON.parse(localStorage.getItem('user'));
        let todoComplete;
        const indexOfTodo = this.state.todos.findIndex(todo => todo.id === todoId);
        this.state.todos[indexOfTodo].complete === true ? todoComplete = false : todoComplete = true; 
        const todoToUpdate = {
            "complete": todoComplete
        }
        await updateTodo(todoId, todoToUpdate, user.token);
        const todos = await getTodos(user.token);
        this.setState({ todos: todos.body });
    }

    handleDelete = async (todoId) => {
        const user = JSON.parse(localStorage.getItem('user'));
        await deleteTodo(todoId, user.token);
        const todos = await getTodos(user.token);
        this.setState({ todos: todos.body });
    }

    handleLogout = () => {
        localStorage.clear();
        window.location = ('/');
    }

    render() {
        return (
            <div>
                <div id="user-info">
                    <h2><span id="user-name">{this.state.userName}</span>'s List</h2>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
                <Add handleAddInput={this.handleAddInput} handleAddSubmit={this.handleAddSubmit} addTodo={this.state.addTodo}/>
                <List todos={this.state.todos} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}
