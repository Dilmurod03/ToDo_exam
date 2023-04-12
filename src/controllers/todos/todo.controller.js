const Joi = require('joi');
const Todos = require('../models/model.js');

const getTodos = async(_, res) => {
    try {
        const todos = await Todos.getTodos();
        return res.status(200).json({
            status: 'Succes!',
            data: todos
        });
    } catch {
        return res.status(500).json({
            status: 'error',
            error: 'Internal Error'
        });
    }
};

const addTodos = async(req, res) => {
    try {
        const schema = Joi.object({
            todo_title: Joi.string().required(),
            todo_desc: Joi.string().required(),
            todo_status: Joi.string().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                status: 'error',
                error: error.details[0].message
            });
        }
        const { todo_title, todo_desc, todo_status } = req.body;
        const todo = await Todos.addTodo(todo_title, todo_desc, todo_status);
        return res.status(201).json({
            status: 'Success!',
            data: todo
        });

    } catch {
        return res.status(500).json({
            status: 'error',
            error: 'Internal Server Error'
        });
    }
};

const updateTodo = async(req, res) => {
    try {
        const { todo_id } = req.params;
        const schema = Joi.object({
            todo_title: Joi.string().required(),
            todo_desc: Joi.string().required(),
            todo_status: Joi.string().required()
        });

        const { error } = schema.validate(req.body);
        if (error) { return res.status(400).json({
                status: 'error',
                error: error.details[0].message
            });
        }

        const { todo_title, todo_desc, todo_status } = req.body;
        const todo = await Todos.updateTodo(todo_title, todo_desc, todo_status, todo_id);
        return res.status(200).json({
            status: 'Success!',
            data: todo
        });
    }
    catch {
        return res.status(500).json({
            status: 'error',
            error: 'Internal Server Error'
        });
    }
}

const updateTodoStatus = async(req, res) => {
    try {
        const { todo_id } = req.params;
        const schema = Joi.object({
            todo_status: Joi.string().required()
        });

        const { error } = schema.validate(req.body);
        if (error) {return res.status(400).json({
                status: 'error',
                error: error.details[0].message
            });
        }

        const { todo_status } = req.body;
        const todo = await Todos.updateTodoStatus(todo_status, todo_id);
        return res.status(200).json({
            status: 'Success!',
            data: todo
        });
    }
    catch {
        return res.status(500).json({
            status: 'error',
            error: 'Internal Error'
        });
    }
}

const deleteTodo = async(req, res) => {
    try {
        const { todo_id } = req.params;
        const todo = await Todos.deleteTodo(todo_id);
        return res.status(200).json({
            status: 'Success!',
            data: todo
        });
    }
    catch {
        return res.status(500).json({
            status: 'error',
            error: 'Internal Error'
        });
    }
}

module.exports = { getTodos, addTodos, updateTodo, deleteTodo, updateTodoStatus }