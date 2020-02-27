import request from 'superagent';

export async function getTodos(token) {
    return request.get(`http://fathomless-stream-03122.herokuapp.com/api/todos`).set('Authorization', token);
}

export async function addTodo(todo, token) {
    return request.post(`http://fathomless-stream-03122.herokuapp.com/api/todos`, todo).set('Authorization', token);
}

export async function updateTodo(todoId, todo, token) {
    return request.put(`http://fathomless-stream-03122.herokuapp.com/api/todos/${todoId}`, todo).set('Authorization', token);
}

export async function deleteTodo(todoId, token) {
    return request.delete(`http://fathomless-stream-03122.herokuapp.com/api/todos/${todoId}`).set('Authorization', token);
}

export async function onSignup(user) {
    return request.post(`http://fathomless-stream-03122.herokuapp.com/api/auth/signup`, user);
}

export async function onSignin(user) {
    return request.post(`http://fathomless-stream-03122.herokuapp.com/api/auth/signin`, user);
}