import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-bold text-white mb-4">Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-3 shadow-md"
          >
            <span
              className={`text-lg ${
                todo.completed ? 'line-through text-gray-400' : 'text-white'
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleRemove(todo.id)}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded transition duration-200"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
