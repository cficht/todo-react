import request from 'superagent';

export async function getTodos() {
    return request.get(`http://fathomless-stream-03122.herokuapp.com/api/todos`);
}

export async function addTodo(todo) {
    return request.post(`http://fathomless-stream-03122.herokuapp.com/api/todos`, todo);
}

export async function updateTodo(todoId, todo) {
    return request.put(`http://fathomless-stream-03122.herokuapp.com/api/todos/${todoId}`, todo);
}

export async function deleteTodo(todoId) {
    return request.delete(`http://fathomless-stream-03122.herokuapp.com/api/todos/${todoId}`);
}