const { fetchOne, fetch } = require('../utils/pg');

const addToDoSQL = 'INSERT INTO todos (todo_title, todo_desc, todo_status) VALUES ($1, $2, $3) RETURNING *';
const addTodo = 
(todo_title, todo_desc, todo_status) => 
fetchOne(addToDoSQL, todo_title, todo_desc, todo_status);

const getTodosSQL = 'SELECT * FROM todos';
const getTodos = () => fetch(getTodosSQL);

const updateTodoSQL = 'UPDATE todos SET todo_title = $1, todo_desc = $2, todo_status = $3 WHERE todo_id = $4 RETURNING *';
const updateTodo = 

(todo_title, todo_desc, todo_status, todo_id) => 
fetchOne(updateTodoSQL, todo_title, todo_desc, todo_status, todo_id);

const updateTodoStatusSQL = 'UPDATE todos SET todo_status = $1 WHERE todo_id = $2 RETURNING *';
const updateTodoStatus = 
(todo_status, todo_id) => 
fetchOne(updateTodoStatusSQL, todo_status, todo_id);

const deleteTodoSQL = 'UPDATE todos SET todo_is_active = false WHERE todo_id = $1 RETURNING *';
const deleteTodo = 
(todo_id) => fetchOne(deleteTodoSQL, todo_id);

module.exports = { addTodo,
  getTodos, 
  updateTodo, 
  updateTodoStatus, 
  deleteTodo 
}