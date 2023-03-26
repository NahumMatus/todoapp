import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, toggleTodo, updateTodo } from "../../redux/reducer";
import { delTodo, putTodo } from "../../services/todos";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [isActive, setIsActive] = useState(todo.active);
  const [description, setDescription] = useState(todo.description);

  const showEditTodo = () => {
    if (showEdit) {
      if (!description.trim()) {
        alert("Porfavor ingresar una descripción");
        return;
      }
      const newTodo = { ...todo, description };
      putTodo(newTodo)
        .then(() => dispatch(updateTodo({ id: todo.id, description })))
        .catch((err) => {
          console.log("Err", err);
        });
    }
    setShowEdit((current) => !current);
  };

  const onDelete = () => {
    delTodo(todo.id)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => {
        console.log("Err", err);
      });
  };
  const onToggle = async () => {
    console.log("llegue aca")
    const newTodo = { ...todo, active: !isActive };
    await putTodo(newTodo);
    dispatch(toggleTodo({ id: todo.id }));
    setIsActive((current) => !current);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      {showEdit ? (
        <div className="d-inline-flex">
          <strong className="align-self-center" style={{ marginRight: "10px" }}>
            Editar descripción:
          </strong>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      ) : (
        <div className="d-inline-flex">
          <span
            aria-label="span"
            className={`align-self-center ${
              !isActive ? "text-decoration-line-through" : ""
            }`}
          >
            <strong>Descripción:</strong> {todo.description},{" "}
            <strong>Creada:</strong> {todo.createdAt}
          </span>
        </div>
      )}

      <div className="d-flex">
        <button
          className={`btn mr-1 ${!isActive ? "btn-danger" : "btn-success"}`}
          onClick={() => onToggle()}
          aria-label="marcar"
        >
          <i
            className={`${isActive ? "bi bi-check2-circle" : "bi bi-x-circle"}`}
            style={{ marginRight: "10px" }}
          ></i>
          {`${isActive ? "Marcar realizada" : "Marcar no realizada"}`}
        </button>
        <button
          className="btn btn-outline-info"
          style={{ marginLeft: "10px" }}
          onClick={() => showEditTodo()}
        >
          <i
            className={`${showEdit ? "bi bi-save" : "bi bi-pencil"}`} 
            style={{ marginRight: "10px" }}>
          </i>
          {showEdit ? "Guardar" : "Editar"}
        </button>
        <button
          aria-label="borrar"
          className="btn btn-outline-danger"
          style={{ marginLeft: "10px" }}
          onClick={() => onDelete()}
        >
          <i
            className="bi bi-trash3"
            style={{ marginRight: "10px" }}>
          </i>
          Borrar
        </button>
      </div>
    </li>
  );
};
