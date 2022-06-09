import React from "react";
import "./style.css";
function GenerateForm(props) {
  const { details, educationalDetails} = props;
  // console.log(educationalDetails);
  const {
    name,
    mobno,
    email,
    gender,
    image,
    signature,
    city,
    state,
    country,
    code,
    project,
    duration,
    description,
  } = details;

  return (
    <div className="main">
      <h2>Personal Details</h2>
      <br />

      <div className="fileCntnr">
        <div>
        <img className="profile" src= {URL.createObjectURL(image)} alt="profile" width="100px" height="100px"/>
        </div>

        <div>
        <img className="signature" src= {URL.createObjectURL(signature)} alt="signature" width="120px" height="40px"/>
        </div>
      </div>

      <div className="personalDetails">
        <p>
          Name: <span className="nameSpan">{name}</span>
        </p>

        <p>
          Mobile Number: <span className="nameSpan">{mobno}</span>
        </p>

        <p>
          E-mail: <span className="nameSpan">{email}</span>
        </p>

        <p>
          Gender: <span className="nameSpan">{gender}</span>
        </p>

        <p>
          City: <span className="nameSpan">{city}</span>
        </p>

        <p>
          State: <span className="nameSpan">{state}</span>
        </p>

        <p>
          Country: <span className="nameSpan">{country}</span>
        </p>

        <p>
          ZIP: <span className="nameSpan">{code}</span>
        </p>
      </div>
      
      <br />
      <br />

      <div className="educationDetails">
        <h2>Education Details</h2>
        <br />

        <table>
          <thead>
            <th>Education Type</th>
            <th>Name of College</th>
            <th>Year of Passing</th>
            <th>% in CGPA</th>
          </thead>
          <tbody>
            {educationalDetails.map((each) => {
              return (
                <tr>
                  <td>{each[0]}</td>
                  <td>{each[1]}</td>
                  <td>{each[2]}</td>
                  <td>{each[3]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <br/>
      <br />
      <div className="experience">
        <h2>Experience</h2>
        <br />
        <p>
          Project: <span className="nameSpan">{project}</span>
        </p>
        <p>
          Duration of project: <span className="nameSpan">{duration}</span>
        </p>
        <p>
          Project Description: <span className="nameSpan">{description}</span>
        </p>
      </div>
    </div>
  );
}
export default GenerateForm;
