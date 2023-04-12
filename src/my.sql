CREATE DATABASE todo;

\c todo;

CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    todo_title VARCHAR(255) NOT NULL,
    todo_desc TEXT NOT NULL,
    todo_status VARCHAR(10) NOT NULL,
    todo_is_active BOOLEAN DEFAULT TRUE,
    todo_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/* CREATE TABLE //
