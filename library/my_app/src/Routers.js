import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./Signup";
import Header from "./common/components/header";
import Dashboard from "./dashboard/index";
import StudentDetails from "./dashboard/Components/studentDetails";
import BorrowBooks from "./dashboard/Components/borrowBooks";
import ReturnBooks from "./dashboard/Components/returnBooks";
import InputTabaledata from "./dashboard/Components/inputTabaledata";
import Formdata from "./dashboard/Components/formdata";

const Routers = () => {
  return (
    <>
      <div className="flexCol">
        <Header />
        <div className="mainContentCntnrCol">
          <div className="flexCol fullHeight">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="studentdetails" element={<StudentDetails />} />
                <Route path="borrowBooks" element={<BorrowBooks />} />
                <Route path="returnBooks" element={<ReturnBooks />} />
                <Route path="inputFields" element={<InputTabaledata />} />
                <Route path="formdata" element={<Formdata/>}/>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Routers;
