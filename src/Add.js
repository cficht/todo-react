import React, { Component } from 'react';

export default class Add extends Component {
    render() {
        return (
            <div id="add-div">
                <form onSubmit={this.props.handleAddSubmit}>
                    <label> Add Todo: <input onChange={this.props.handleAddInput} value={this.props.addTodo}></input></label>
                    <button>Submit</button>
                </form>         
            </div>
        )
    }
}
