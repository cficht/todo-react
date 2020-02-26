import React, { Component } from 'react'
import Add from './Add.js';
import List from './List.js';
import { getTodos } from './todo-api.js';

export default class TodoApp extends Component {

    state = { todos: [] }

    async componentDidMount() {
		const todos = await getTodos();
        this.setState({ todos: todos.body })
        console.log(this.state.todos);
}
    render() {
        return (
            <div>
                <Add />
                <List todos={this.state.todos} />
            </div>
        )
    }
}
