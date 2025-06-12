import React from 'react'
import { todoContext } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = React.useState("");
 const { addTodo } = React.useContext(todoContext);

    const handleSubmit = (e) => {
        e.preventDefault()

        if(todo.trim() === "") {
            return}

        addTodo( {
            todo: todo,
            completed: false
        })
        setTodo("")}

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    </div>
  )
}

export default TodoForm
