import React from "react";
import Button from "@mui/material/Button";
import "./style.css";
function Form() {

    
       //  GETELEMENTBYID //
    // var headerTitle = document.getElementById("headerTitle")
    // console.log(headerTitle);

    // console.log(headerTitle.textContent)
    // console.log(headerTitle.innerText)
    // headerTitle.innerHTML = "<h1>hello</h1>"
    // headerTitle.style.borderBottom = "1px solid #000000";

    // GETELEMENTSBYCLASSNAME //

    // var items = document.getElementsByClassName("list-group-item");
    // console.log(items);
    // console.log(items[0]);
    // console.log(items[2]);

    // items[0].textContent = "Text 3";
    // items[0].style.color = "blue";
    // items[1].style.backgroundColor= "green";

   // Gives the error //
    // items.style.backgroundColor = "black";

    // for (var i=0; i<items.length; i++) {
    //   items[i].style.color="green";
    // }

    // GETELEMENTSBYTAGNAME //

    // var li = document.getElementsByTagName("li");
    // console.log(li);
    // console.log(li[1]);
    // li[1].style.fontWeight = "bold";

    // QUERY SELECTOR //

    // var id = document.querySelectorAll("li");
    // console.log(id);

    // var input = document.querySelector("input");
    // input.value = "Fruits";

    // var submit = document.querySelector('input[type="submit"]');
    // submit.value = "SEND";

    return (
    <form id="addForm">
      <div className="formCntnr">
      <h1 id ="headerTitle">Item Lister</h1>
        <div className="itemsCntnr">
          <label className="label" htmlFor="Enter Items">
            Add Items
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
        

        <div className="flexCol listCntnr">
          <ul id="list-group">
            <div className="jsCenter">
            <li className="list-group-item">Item 1
              
            </li>
          
            </div>
            <hr />
            
            <div className="jsCenter">
            <li className="list-group-item">Item 2
              
            </li>
            
              </div>
            <hr />
            
            <div className="jsCenter">
            <li className="list-group-item">Item 3
              
            </li>
            
            </div>
            <hr />
            
            <div className="jsCenter">
            <li className="list-group-item">Item 4
              
            </li>
            
            </div>
            <hr />
          </ul>
        </div>
      </div>
    </form>
  );
}
export default Form;
