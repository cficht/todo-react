import React, { Component } from 'react'
import Add from './Add.js';
import List from './List.js';
import { getTodos, addTodo } from './todo-api.js';

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

    render() {
        return (
            <div>
                <Add handleAddInput={this.handleAddInput} handleAddSubmit={this.handleAddSubmit} addTodo={this.state.addTodo}/>
                <List todos={this.state.todos} />
            </div>
        )
    }
}
