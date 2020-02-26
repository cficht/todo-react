import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <li>
                <span style={{ textDecoration: this.props.todo.complete ? 'line-through' : 'none' }}>{this.props.todo.task}</span>
                <input type="checkbox" onChange={e => this.props.handleUpdate(this.props.todo.id)}></input>
                <button>Delete</button>
            </li>
        )
    }
}