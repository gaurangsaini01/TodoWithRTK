import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/slices/todoSlice";
import Todos from "./Todos";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodoHandler(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="border-2 border-black"
        ></input>
        <button type="submit">Add Todo</button>
      </form>
      <Todos></Todos>
    </div>
  );
}

export default App;
