import { Routes, Route } from "react-router-dom";

import EnterUserDetailsForm from "./components/EnterUserDetailsForm"

import ViewUserDetails from "./components/ViewUserDetails";

import "./App.css"



const MyApp = () => {
  return(
    <div className="my-app-container">
      <Routes>
        <Route path="/" element={<ViewUserDetails />} />
        <Route path="form" element={<EnterUserDetailsForm />} />
      </Routes>
    </div>
  )
}

export default MyApp; 