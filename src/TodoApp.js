import React, { Component } from 'react'
import Add from './Add.js';
import List from './List.js';
import { getTodos, addTodo, updateTodo, deleteTodo } from './todo-api.js';

export default class TodoApp extends Component {

    state = { 
        todos: [],
        addTodo: ''
    }

    async componentDidMount() {
        const todos = await getTodos();
        this.setState({ todos: todos.body })
    }

    handleAddInput = (e) => {
        this.setState({ addTodo: e.target.value})
    }

    handleAddSubmit = async (e) => {
        e.preventDefault();
        const newTodo = {
            "task": this.state.addTodo
        }
        await addTodo(newTodo);
        const todos = await getTodos();
        this.setState({ todos: todos.body })
    }

    handleUpdate = async (todoId) => {
        let todoComplete;
        const indexOfTodo = this.state.todos.findIndex(todo => todo.id === todoId);
        this.state.todos[indexOfTodo].complete === true ? todoComplete = false : todoComplete = true; 
        const todoToUpdate = {
            "complete": todoComplete
        }
        await updateTodo(todoId, todoToUpdate);
        const todos = await getTodos();
        this.setState({ todos: todos.body })
    }

    handleDelete = async (todoId) => {
        await deleteTodo(todoId);
        const todos = await getTodos();
        this.setState({ todos: todos.body })
    }

    render() {
        return (
            <div>
                <Add handleAddInput={this.handleAddInput} handleAddSubmit={this.handleAddSubmit} addTodo={this.state.addTodo}/>
                <List todos={this.state.todos} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}
