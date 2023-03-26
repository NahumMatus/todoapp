import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};


export const todoReducer = createSlice({
	name: "todos",
	initialState,
	reducers: {
		fillTodos: (state, action) =>{
			state.todos = action.payload
		},
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => 
				todo.id === action.payload.id
					? { ...todo, description: action.payload.description }
					: todo
    	);
    },
		toggleTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload
					? { ...todo, active: !todo.active }
					: todo
			);
		},
	},
});

export const { fillTodos, addTodo, deleteTodo, updateTodo, toggleTodo } = todoReducer.actions;
export default todoReducer.reducer;
