import React from "react";
import "./index.css";
function Mathematics() {
  return (
    <div className="mainContainer">
        <div className="bgImage">
            <div className="flexCol sub">
              <h1>Description of Course (Maths)</h1>
      <p>
        Mathematics is the science that deals with the logic of shape, quantity
        and arrangement. Math is all around us, in everything we do. It is the
        building block for everything in our daily lives, including mobile
        devices, computers, software, architecture (ancient and modern), art,
        money, engineering and even sports.
      </p>
      <h1>Teachers related to course</h1>
      <ul>
        <li>Tara</li>
        <li>Aaryan</li>
        <li>Vinod</li>
      </ul>
      <table border="1px" solid black width="20%">
        <h1>TimeTable</h1>
        <tr>
          <th>Day</th>
          <th>Period</th>
          <th>Subject</th>
        </tr>
        <tr>
          <td>Mon</td>
          <td>2</td>
          <td>Maths</td>
        </tr>
        <tr>
          <td>Thu</td>
          <td>4</td>
          <td>Maths</td>
        </tr>
      </table>
    </div>
    </div>
    </div>
  );
}
export default Mathematics;
