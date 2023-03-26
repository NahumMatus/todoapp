import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import classes from './AddTodo.module.css'
import TodoAdd from "./TodoAdd";
import { TodoList } from "./TodoList";
import { getTodos } from "../../services/todos";
import { fillTodos } from "../../redux/reducer"

export const TodoApp = () => {

    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const getAllTodos = async () => {
        const response = await getTodos();
        console.log(response)
        dispatch(fillTodos(response.data)) 
    };
    useEffect(() => {
        getAllTodos();
    }, [])
    
    return (
        <div className="p-5">
            <header className={classes.header}>
                <h1 className={classes.header__title}>Todo App</h1>
            </header>
            <hr />

            <div className="row">

                <div className="col-lg-12  col-xl-5">
                    <h4>Crear Tareas</h4>
                    <hr />
                    <TodoAdd />
                </div>
                <div className="col-lg-12 col-xl-7 mb-4">
                    <h4>Lista de tareas</h4>
                    <hr />
                    <TodoList todos={todos} />
                </div>

            </div>


        
        </div>
    )
}
