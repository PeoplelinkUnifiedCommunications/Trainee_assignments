import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const InputTabaledata = () => {
  const [name, setName] = useState({ firstname: "", email: "" });
  const [tablelist, setTablelist] = useState([]);
  const [errorObj, setErrorObj] = useState("");

  useEffect(() => {
    console.log("tableldata", tablelist);
  }, [tablelist]);
  const handleChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };
  const regex = /\S+@\S+\.\S+/;
  const handleSubmit = (e) => {
    e.preventDefault();
    // let error = {};
    // if (name.email === "") {
    //   // error.email = "Enter email address";
    //   setErrorObj("Enter email address");
    // } else if (name.email !== "" && !regex.test(name.email)) {
    //   // error.email = "Enter valid Email address";
    //   setErrorObj("Enter valid Email address");
    // }
    // else{
    const newItem = {
      firstname: name.firstname,
      email: name.email,
    };
    setName({ firstname: "", email: "" });
    setTablelist([...tablelist, newItem]);
    setErrorObj("");
    // }
    // console.log("newitem===", newItem);
  };

  console.log(name);
  const disablevalue = !(
    name.firstname !== "" &&
    name.email !== "" &&
    regex.test(name.email)
  );
  // console.log("errror===", errorObj);
  // console.log("tablelist===", tablelist);

  return (
    <>
      <div className="flexCol">
        <div className="flexRow">
          <h2>UseState</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flexRow pdngVSM">
            <input
              type="text"
              name="firstname"
              value={name.firstname}
              onChange={handleChange}
              placeholder="enter name"
            />
          </div>
          <div className="flexRow pdngVSM">
            <input
              type="text"
              name="email"
              value={name.email}
              onChange={handleChange}
              placeholder="enter email"
            />
          </div>
          {/* {errorObj.email && <span className="alertTXt">{errorObj.email}</span>} */}
          {errorObj !== "" && <span className="alertTXt">{errorObj}</span>}

          <div className="flexRow pdngVSM">
            <Button
              disabled={disablevalue}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              submit
            </Button>
          </div>
        </form>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="secondaryBG">
                <TableCell>Student name</TableCell>
                <TableCell> Email ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tablelist.map((val, index) => (
                <TableRow key={index}>
                  <TableCell>{val.firstname}</TableCell>
                  <TableCell>{val.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default InputTabaledata;
