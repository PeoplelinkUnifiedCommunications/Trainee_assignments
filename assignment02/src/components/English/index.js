import React from "react";
import "./index.css";
function English() {
  return (
    <div className="mainContainer">
      <div className="bgImage">
        <div className="flexCol sub">
          <h1>Description of Course (English)</h1>
          <p>
            1. Nature and Structure of Language 2. Criteria of the system of
            communication in order to be considered a language:  A language
            uses symbols  A language is meaningful and therefore can be
            understood by other users of that language. 3.  A language is
            generative  A language has rules that govern how symbols can be
            arranged. 4. The Building Blocks of Language 1. Phonemes- the
            smallest distinguishable units in a language. 2. Morphemes- the
            smallest meaningful units in a language.
          </p>
          <h1>Teachers related to course</h1>
          <ul>
            <li>Akhil</li>
            <li>Mina</li>
            <li>Vimla</li>
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
              <td>Eng</td>
            </tr>
            <tr>
              <td>Thu</td>
              <td>4</td>
              <td>Eng</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default English;
