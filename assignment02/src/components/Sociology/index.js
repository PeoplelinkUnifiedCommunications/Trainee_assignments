import React from "react";
import "./index.css";
function Sociology() {
  return (
    <div className="mainContainer">
      <div className="bgImage">
        <div className="flexCol sub">
          <h1>Description of Course (Social)</h1>
          <p>
            social studies is the integrated study of multiple fields of social
            science and the humanities, including history, geography, and
            political science. The term was first coined by American educators
            around the turn of the twentieth century as a catch-all for these
            subjects, as well as others which did not fit into the traditional
            models of lower education in the United States, such as philosophy
            and psychology.
          </p>
          <h1>Teachers related to course</h1>
          <ul>
            <li>Kiran</li>
            <li>Midhun</li>
            <li>Anil</li>
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
              <td>Social</td>
            </tr>
            <tr>
              <td>Thu</td>
              <td>4</td>
              <td>Social</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Sociology;
