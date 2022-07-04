import React, { useState } from 'react';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import AddBook from './Components/AddBook';
import Users from './Components/Users'
import TotalBooks from './Components/TotalBooks';
import RequestedBooks from './Components/RequestedBooks';
import IssuedBooks from './Components/IssuedBooks';
import UserBooks from './Components/UserBooks';
import UserRequests from './Components/UserRequests';
import UserIssuedBooks from './Components/UserIssuedBooks'



export const store = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));
  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <BrowserRouter forceRefresh={true}>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path = "/users" element={<Users/>}/>
            <Route exact path = "/register" element={<Register/>}/>
            <Route exact path="/addBook" element={<AddBook/>}/>
            <Route exact path="/totalBooks" element={<TotalBooks/>}/>
            <Route exact path = "/requetedBooks" element={<RequestedBooks/>}/>
            <Route exact path = "/issuedBooks" element={<IssuedBooks/>}/>
            <Route exact path="/userTotalBooks" element={<UserBooks/>}/>
            <Route exact path = "/myRequetedBooks" element={<UserRequests/>}/>
            <Route exact path = "/myIssuedBooks" element={<UserIssuedBooks/>}/>
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;

