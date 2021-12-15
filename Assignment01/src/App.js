import { Routes, Route } from "react-router-dom";

import { useState } from "react";

import EnterUserDetailsForm from "./components/EnterUserDetailsForm"

import ViewUserDetails from "./components/ViewUserDetails";

import UsersDataContext from "./context/usersdatacontext";

import "./App.css"

const MyApp = () => {
  const [usersData, updateUserData] = useState([])

  const updateDataList = (data) => {
    updateUserData(prevState => ([...prevState, data]))
  }

  return(
    <UsersDataContext.Provider value={{usersData, onSubmitForm: updateDataList}} >
      <div className="my-app-container">
        <Routes>
          <Route path="/" element={<ViewUserDetails />} />
          <Route path="form" element={<EnterUserDetailsForm />} />
        </Routes>
      </div>
    </UsersDataContext.Provider>
  )
}

export default MyApp; 