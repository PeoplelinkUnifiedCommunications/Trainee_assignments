import React from "react";
import "./todo.css";

const todolist = ({ todolist,deleteHandler }) => {
  return (
    <center>
      <div class="output">
        {todolist.map((todo, index) => (
          <div key={index}>
            <h3>{todo}&nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h3>
          </div>
        ))}
      </div>
    </center>
  );
};

export default todolist;
