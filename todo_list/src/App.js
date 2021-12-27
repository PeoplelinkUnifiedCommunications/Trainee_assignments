import React, { useState } from "react";
import Todolist from "./components/todolist";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
    console.log(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("field is empty");
    } else {
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask("");
    }
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <h1> To do List Example </h1>
        <input
          type="text"
          name="task"
          value={task}
          onChange={changeHandler}
        />{" "}
        &nbsp;
        <input type="submit" value="Add" name="Add"/>
      </form>
      <Todolist todolist={todos} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
