import React, { Component } from 'react'
import { onSignin, onSignup } from './todo-api.js';

export default class Login extends Component {
    state = {
        usernameSignIn: '',
        passwordSignIn: '',
        usernameSignUp: '',
        passwordSignUp: ''
    }

    handleUsernameSignIn(e) {
        this.setState({usernameSignIn: e.target.value})
    }

    handlePasswordSignIn(e) {
        this.setState({passwordSignIn: e.target.value})
    }

    handleUsernameSignUp(e) {
        this.setState({usernameSignUp: e.target.value})
    }

    handlePasswordSignUp(e) {
        this.setState({passwordSignUp: e.target.value})
    }

    handleSignIn = async () => {
        const user = {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn
        }
        const signIn = await onSignin(user);
        localStorage.setItem('user', JSON.stringify(signIn.body));
        this.props.history.push('/');
    }

    handleSignUp = async () => {
        if(!this.state.usernameSignUp || !this.state.passwordSignUp) {
            alert('Please enter a valid Username and Password');
            return;
        }
        const user = {
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp
        }
        const signUp = await onSignup(user);
        localStorage.setItem('user', JSON.stringify(signUp.body));
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="login-div">
                    <h2>Sign-in</h2>
                    <label>Name: <input onChange={e => this.handleUsernameSignIn(e)} value={this.state.usernameSignIn}></input></label>
                    <label>Password: <input type="password" onChange={e => this.handlePasswordSignIn(e)} value={this.state.passwordSignIn}></input></label>
                    <button onClick={this.handleSignIn}>Submit</button>
                </div>
                <div className="login-div">
                    <h2>Sign-up</h2>
                    <label>Name: <input onChange={e => this.handleUsernameSignUp(e)} value={this.state.usernameSignUp}></input></label>
                    <label>Password: <input type="password" onChange={e => this.handlePasswordSignUp(e)} value={this.state.passwordSignUp}></input></label>
                    <button onClick={this.handleSignUp}>Submit</button>
                </div>
            </div>
        )
    }
}
