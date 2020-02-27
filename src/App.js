import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route, 
  Redirect,
  BrowserRouter as Router, 
} from 'react-router-dom';
import TodoApp from './TodoApp.js';
import Login from './Login.js';
import './App.css';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-div">
          <h1>TODO LIST</h1>
          <BrowserRouter>
          <Route exact path='/' render={() => 
                isLoggedIn() 
                    ? <TodoApp />
                    : <Redirect to='/login' />
                }/>
            <Route exact path="/login" component={Login} />
          </BrowserRouter>
        </div>
      </Router>
    )
  }
}
