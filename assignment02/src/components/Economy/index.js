import React from "react";
import "./index.css";
function Economy() {
  return (
    <div className="mainContainer">
      <div className="bgImage">
        <div className="flexCol com">
          <h1>Description of Course (Economics)</h1>
          <p>
            economics, social science that seeks to analyze and describe the
            production, distribution, and consumption of wealth. In the 19th
            century economics was the hobby of gentlemen of leisure and the
            vocation of a few academics; economists wrote about economic policy
            but were rarely consulted by legislators before decisions were made.
          </p>

          <h1>Teachers related to course</h1>
          <ul>
            <li>Mina</li>
            <li>Ankush</li>
            <li>Dhruva</li>
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
              <td>Economics</td>
            </tr>
            <tr>
              <td>Thu</td>
              <td>4</td>
              <td>Economics</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Economy;
