const { Router } = require('express');
const router = Router();

const TodoController = require("../controllers/todos/todo.controller")

router.post('/add/todo', TodoController.addTodos);
router.get('/list/todos', TodoController.getTodos);
router.put('/update/todo-status/:todo_id', TodoController.updateTodoStatus);
router.put('/update/todo/:todo_id', TodoController.updateTodo);
router.delete('/delete/todo/:todo_id', TodoController.deleteTodo);

module.exports = router;
