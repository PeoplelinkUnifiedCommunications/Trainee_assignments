import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StudentDetails = () => {
  const tabledata = [
    {
      student_name: "kavya",
      id: "1021",
      className: "4th class",
      borrow_date: "12-05-2022",
      return_date: "12-06-2022",
      age:15
    },
    {
      student_name: "koushik",
      id: "1025",
      className: "10th class",
      borrow_date: "12-06-2022",
      return_date: "12-07-2022",
      age:18
    },
    {
      student_name: "santhoshi",
      id: "1027",
      className: "7th class",
      borrow_date: "25-05-2022",
      return_date: "25-06-2022",
      age:17
    },
    {
      student_name: "deepika",
      id: "1031",
      className: "6th class",
      borrow_date: "30-05-2022",
      return_date: "29-06-2022",
      age:15
    },
    {
      student_name: "sujitha",
      id: "1026",
      className: "9th class",
      borrow_date: "12-07-2022",
      return_date: "12-08-2022",
      age:18
    },
  ];
  return (
    <>
      <div className="flexCol respdngSM">
        <div className="flexRow pdngBMD">
          <span className="subHdngTxt">Student Details</span>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="secondaryBG">
                <TableCell>Student name</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>ClassName</TableCell>
                <TableCell>Borrow Date</TableCell>
                <TableCell>Return date</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {tabledata.filter(agedata => agedata.student_name.length > 7 ).map((item) => (
                <TableRow >
                  <TableCell>{item.student_name}</TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.className}</TableCell>
                  <TableCell>{item.borrow_date}</TableCell>
                  <TableCell>{item.return_date}</TableCell>
                  <TableCell>{item.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default StudentDetails;
