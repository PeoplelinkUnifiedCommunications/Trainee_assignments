import React from "react";
import "./index.css";
function Admission() {
  return (
    <div className="mainContainer">
      <div className="bgImage">
          <div className="flexCol que">
        <form>
          <table align="center">
            <tr>
              <th>
                <h1 className="head">Admission Form</h1>
              </th>
            </tr>
            <tr>
              <td className="s1">Student Name:</td>
              <td>
                <input className="i1" type="text" placeholder="StdName" name="" />
              </td>
            </tr>
            <tr>
              <td className="s2">Father Name:</td>
              <td>
                <input className="i2" type="text" placeholder="FatherName" name="" />
              </td>
            </tr>
            <tr>
              <td className="s3">Age of Student:</td>
              <td>
                <input className="i3" type="number" placeholder="age" name="" />
              </td>
            </tr>
            <tr>
              <td className="s4">Phone Number:</td>
              <td>
                <input className="i4" type="number" placeholder="phno" name="" />
              </td>
            </tr>
            <tr>
              <td className="s5">Gender:</td>
              <td>
                <input className="i5" type="radio" value="male" />
                Male
              </td>
              <td>
                <input className="i6" type="radio" value="female" />
                Female
              </td>
            </tr>
            <tr>
              <td className="s6">Present Address :</td>
              <td>
                <textarea className="i7" rows="4" cols="20"></textarea>
              </td>
            </tr>
            <tr>
              <td className="s7">Qualifications you had:</td>
              <td>
                <textarea className="i8" rows="4" cols="20"></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <input className="i9" type="submit" value="submit" />
              </td>
              <td>
                <input className="i0" type="reset" value="reset" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
    </div>
  );
}
export default Admission;
