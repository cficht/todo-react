import request from 'superagent';

export async function getTodos() {
    return request.get(`http://fathomless-stream-03122.herokuapp.com/api/todos`);
}

export async function addTodo(todo) {
    console.log(todo);
    return request.post(`http://fathomless-stream-03122.herokuapp.com/api/todos`, todo);
}