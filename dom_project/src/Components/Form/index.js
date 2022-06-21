import React from "react";
import Button from "@mui/material/Button";
import "./style.css";
function Form() {

    // var form = document.getElementById("addForm");
    // var ul = document.getElementById("list-group"); 

    // form.addEventListener("submit", (e) => {
    //     // e.preventDefault();
    //     // const newElement = document.getElementById("item").value;
    //     // console.log(newElement);

    //     // var li = document.createElement("li");
    //     // li.className = "list-group-item";
    //     // li.innerHTML = newElement;

    //     // var button = document.createElement("button");
    //     // button.className = "xBtn deleteBtn";
    //     // button.innerHTML = ul;

    //     // li.appendChild(button);
    //     // ul.appendChild(li);
    // })

  return (
    <form id="addForm">
      <div className="formCntnr">
        <div className="itemsCntnr">
          <label className="label" htmlFor="Enter Items">
            Enter Items
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter New Items"
            id="item"
          />
        </div>
        <div className="flexCol mrgnVLG btnCntnr">
          <Button id="btn" variant="contained" type="submit">
            ADD
          </Button>
        </div>
        <hr />

        <div className="listCntnr">
          <ul id="list-group">
            <li className="mrgnVSM list-group-item">Apple
              <button className="xBtn deleteBtn">
                X
              </button>
            </li>
            <hr />
            <li className="mrgnVSM list-group-item">Mango
              <button className="xBtn">
                X
              </button>
            </li>
            <hr />

            <li className="mrgnVSM list-group-item">Banana
              <button className="xBtn">
                X
              </button>
            </li>
            <hr />

            <li className="mrgnVSM list-group-item">Orange
              <button className="xBtn">
                X
              </button>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </form>
  );
}
export default Form;
