import React from "react";
import "./index.css";
function Business() {
  return (
    <div className="mainContainer">
      <div className="bgImage">
        <div className="flexCol sub">
          <h1>Description of Course (Business Studies)</h1>
          <p>
            Courses in business studies cover a wide array of specialisations
            but start out broad and allow students to focus on a specific area
            later on. Students can expect to look at areas like technology,
            marketing, economics, statistics, accounting and ethics. Degree
            programs also look at how and why organisations work, as well as the
            global business environment. Students can expect to gain knowledge
            of the different areas of a business and how they function together
            as well as strategy and management skills.
          </p>
          <h1>Teachers related to course</h1>
          <ul>
            <li>Neel</li>
            <li>Anne</li>
            <li>Karun</li>
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
              <td>BS</td>
            </tr>
            <tr>
              <td>Thu</td>
              <td>4</td>
              <td>BS</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Business;
