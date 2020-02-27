import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" onChange={e => this.props.handleUpdate(this.props.todo.id)} checked={ this.props.todo.complete ? true : false }></input>
                <span style={{ textDecoration: this.props.todo.complete ? 'line-through' : 'none' }}>{this.props.todo.task}</span>
                <button onClick={e => this.props.handleDelete(this.props.todo.id)}>Delete</button>
            </li>
        )
    }
}