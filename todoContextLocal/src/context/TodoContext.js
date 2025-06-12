import { createContext, useContext } from "react";

export const todoContext=createContext({
    todos: [{
        id: 1,
        title: "Sample Todo",
        completed: false
    }],
    
    addTodo: (id,todo) => {},
    removeTodo: (id,) => {},
    toggleTodo: (id) => {},
    editTodo: (id, todo) => {}
});

export const useTodo=()=>{
    return useContext(todoContext);
}

export const TodoProvider=todoContext.Provider;