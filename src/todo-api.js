import request from 'superagent';

export async function getTodos() {
    return request.get(`http://fathomless-stream-03122.herokuapp.com/api/todos`);
}