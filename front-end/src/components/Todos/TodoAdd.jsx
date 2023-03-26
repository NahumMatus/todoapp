import { useState } from "react";
import classes from "./AddTodo.module.css";
import { addTodo } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import { postTodo } from "../../services/todos";

const TodoAdd = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();

    // Check if the input is empty - a simple valodation to make sure the user input a todo
    if (!todoDescription.trim()) {
      alert("Porfavor ingresar una descripción");
      return;
    }

    // Create a new todo
    const newTodo = {
      description: todoDescription
    };

    // Dispatch the new todo to the store
    postTodo(newTodo)
      .then((res) => {
        console.log(res.data);
        dispatch(addTodo(res.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });

    // Clear the input and reminder after submission
    setTodoDescription("");
  };

  const onInputChange = ({ target }) => {
    const { value } = target;
    setTodoDescription(value);
  };

  return (
    <section className={classes.section}>
      <form onSubmit={submitTodo}>
        <div className="row align-items-center">
          <div className="col-9">
            <input
              type="text"
              placeholder="Ingrese una descripción"
              className="form-control"
              name="description"
              value={todoDescription}
              onChange={onInputChange}
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-outline-primary mt-1">
            <i
              className="bi bi-plus-circle"
              style={{ marginRight: "10px" }}>
            </i>
              Añadir tarea
            </button>
          </div>
        </div>
        <div className="d-flex .flex-row"></div>
      </form>
    </section>
  );
};

export default TodoAdd;
