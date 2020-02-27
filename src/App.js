import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import TodoApp from './TodoApp.js';
import Login from './Login.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-div">
          <h1>TODO LIST</h1>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={TodoApp} />
          </Switch>
        </div>
      </Router>
    )
  }
}
