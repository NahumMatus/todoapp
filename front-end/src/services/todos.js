import axios from 'axios';

const url='http://localhost:8080/api/v1/todos/'

export const getTodos = () =>{
  return axios.get(url);
}
export const postTodo = (newTodo) =>{
  return axios.post(url, newTodo);
}
export const putTodo = (todo) =>{
  return axios.put(url + todo.id, todo);
}
export const delTodo = (id) =>{
  return axios.delete(url + id);
}