import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/reducer";

export const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
});
