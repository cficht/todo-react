import React, { Component } from 'react'
import Add from './Add.js';
import List from './List.js';
import { getTodos, addTodo, updateTodo, deleteTodo } from './todo-api.js';

export default class TodoApp extends Component {
    state = { 
        todos: [],
        addTodo: '',
        userName: '',
        user: {}
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const userName = user.email.split('@')[0];
        this.setState({ userName: userName });
        this.setState({ user: user });

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
        const fakeNewTodo = {           
            "id": Math.random(),
            "task": this.state.addTodo,
            "user_id": this.state.user.id,
            "complete": false
        }
        await addTodo(newTodo, user.token);
        this.setState({ todos: [...this.state.todos, fakeNewTodo] })
    }

    handleUpdate = async (todoId) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const newTodos = this.state.todos.slice();
        const indexOfTodo = this.state.todos.findIndex(todo => todo.id === todoId);

        let todoComplete;
        this.state.todos[indexOfTodo].complete === true ? todoComplete = false : todoComplete = true; 
        const todoToUpdate = {
            "complete": todoComplete
        }
        if (todoId % 1 === 0) {
            await updateTodo(todoId, todoToUpdate, user.token);
        }
        newTodos[indexOfTodo].complete = todoComplete;
        this.setState({ todos: newTodos });
    }

    handleDelete = async (todoId) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const newTodos = this.state.todos.slice();
        const indexOfTodo = this.state.todos.findIndex(todo => todo.id === todoId);

        if (todoId % 1 === 0) {
            await deleteTodo(todoId, user.token);
        }
        newTodos.splice(indexOfTodo, 1);
        this.setState({ todos: newTodos });
    }

    handleLogout = () => {
        localStorage.clear();
        window.location = ('/');
    }

    render() {
        return (
            <div id="main-div">
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