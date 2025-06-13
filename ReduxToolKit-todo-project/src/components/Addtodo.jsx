import React, { useState } from 'react';
import { useDispatch } from 'react-redux';  
import { addTodo } from '../features/todos/todoSlice';


function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      return; // Prevent adding empty todos

    }
    dispatch(addTodo({text:input}));
    setInput(''); // Clear input field after adding todo

    
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
