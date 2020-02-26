import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import TodoApp from './TodoApp.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>TODO LIST</h1>
          <Switch>
            <Route exact path="/" component={TodoApp} />
          </Switch>
        </div>
      </Router>
    )
  }
}
