import React, { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    // Fixed form submission logic
    const handleAddTask = (e) => {
        e.preventDefault();
        const trimmed = taskInput.trim();
        if (!trimmed) return;

        setTodos((prev) => [...prev, { id: Date.now(), text: trimmed, completed: false }]);
        setTaskInput('');
    };

    // State-updater functions to prevent direct mutations or loops
    const toggleTodo = (id) => {
        setTodos((prev) => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter(t => t.id !== id));
    };

    return (
        <div className="container my-5" style={{ maxWidth: '450px' }}>
            <h2 className="fw-bold mb-4 text-center">To-Do List</h2>

            <form onSubmit={handleAddTask} className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="New task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button className="btn btn-dark" type="submit">Add</button>
            </form>

            {todos.length === 0 ? (
                <p className="text-muted text-center my-4">All done!</p>
            ) : (
                <ul className="list-unstyled">
                    {todos.map((todo) => (
                        <li key={todo.id} className="d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div className="form-check m-0">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    id={`todo-${todo.id}`}
                                    style={{ cursor: 'pointer' }}
                                />
                                <label
                                    className={`form-check-label ms-2 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
                                    htmlFor={`todo-${todo.id}`}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {todo.text}
                                </label>
                            </div>
                            <button
                                type="button"
                                className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {todos.length > 0 && (
                <div className="text-muted small text-end mt-2">
                    {todos.filter(t => !t.completed).length} items left
                </div>
            )}
        </div>
    );
}
