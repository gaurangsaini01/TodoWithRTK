import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "./redux/slices/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p className={todo.completed ? "line-through" : ""}>{todo.text}</p>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
            <button onClick={() => dispatch(completeTodo(todo.id))}>
              {todo.completed ? "Redo" : "Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
