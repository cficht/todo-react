import React, { Component } from 'react';
import Item from './Item.js';

export default class List extends Component {    
    render() {
        const ListItem = this.props.todos.map(todo => <Item todo={todo} handleUpdate={this.props.handleUpdate} handleDelete={this.props.handleDelete} key={todo.id}></Item>)
        return (
            <div id="list-div">
                <ul>
                    {ListItem}
                </ul>
            </div>
        )
    }
}
