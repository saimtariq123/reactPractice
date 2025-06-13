import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:
    [
        {id:1, text:"toolkit", completed: false},
        
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const newTodo = {
                id: nanoid(),
                text: action.payload.text,
                completed: false
                
            };
            state.todos.push(newTodo);

        },
        removeTodo: (state,action )=> {
            const id = action.payload.id;
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        toggleTodo: (state,action) => {
            const id = action.payload.id;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state,action)=>{
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;