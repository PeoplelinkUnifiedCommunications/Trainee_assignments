import React from "react";
import "./index.css";
function Computers() {
  return (
    <div className="mainContainer">
      <div className="bgImage">
        <div className="flexCol sub">
          <h1>Description of Course (Computers)</h1>
          <p>
            Computer is an electronic device that is designed to work with
            Information. The term computer is derived from the Latin term
            ‘computare’, this means to calculate or programmable machine.
            Computer can not do anything without a Program. It represents the
            decimal numbers through a string of binary digits. The Word
            ‘Computer’ usually refers to the Center Processor Unit plus Internal
            memory.
          </p>
          <h1>Teachers related to course</h1>
          <ul>
            <li>Kamal</li>
            <li>Manoj</li>
            <li>Kavitha</li>
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
              <td>Computer</td>
            </tr>
            <tr>
              <td>Thu</td>
              <td>4</td>
              <td>Computer</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Computers;
