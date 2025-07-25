import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TodoProvider } from './context/TodoContext';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {

  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo }]);
  };

  const editTodo = (id, updatedTodo) => {
  setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    )
  );
};


  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

const [isFirstLoad, setIsFirstLoad] = useState(true);

useEffect(() => {
  const stored = localStorage.getItem('todos');
  if (stored) {
    setTodos(JSON.parse(stored));
  }
  setIsFirstLoad(false);
}, []);

useEffect(() => {
  if (!isFirstLoad) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}, [todos, isFirstLoad]);



  return (
    <TodoProvider value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
