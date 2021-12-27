import React from "react";
import "./todo.css";

const todolist = ({ todolist, deleteHandler, editItem }) => {
  return (
    <center>
      <div class="output">
        {todolist.map((todo, index) => (
          <div key={index}>
            <h3>
              {todo}&nbsp;
              <button onClick={() => deleteHandler(index)}>Delete</button>
              <button onclick={() => editItem(index)}>Edit</button>
            </h3>
          </div>
        ))}
      </div>
    </center>
  );
};

export default todolist;
