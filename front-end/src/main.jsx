import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./app/store";
import { TodoApp } from './components/Todos/TodoApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
			<TodoApp />
		</Provider>
)
