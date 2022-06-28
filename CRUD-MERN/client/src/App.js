import React, { useState} from 'react';
import Home2 from './components/Home2';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import { createContext } from 'react';
import MyProfile from './components/MyProfile';
import MyBooks from './components/MyBooks';
import AddBook from './components/AddBook';
import TotalBooks from './components/TotalBooks';
import BookRequests from './components/BookRequests';
import UserTotalBooks from './components/UserTotalBooks';
import IssuedBooks from './components/IssuedBooks';
import UserRequestedBooks from './components/UserRequestedBooks';
import TotalIssuedBooks from './components/TotalIssuedBooks';
import Users from './components/Users';



export const store = createContext();

function App() {
  const [token, setToken] = useState(null);
  console.log("tokentokentokentoken", token)
  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <BrowserRouter forceRefresh={true}>
          <Routes>
            <Route exact path="/" element={<Home2 />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/myprofile" element={<MyProfile/>}/>
            <Route exact path="/myBooks" element={<MyBooks/>}/>
            <Route exact path="/addBook" element={<AddBook/>}/>
            <Route exact path="/getTotalBooks" element={<TotalBooks/>}/>
            <Route exact path="/usersList" element={<Users/>}/>
            <Route exact path="/UserTotalBooks" element={<UserTotalBooks/>}/>
            <Route exact path="/myIssuedBooks" element={<IssuedBooks/>}/>
            <Route exact path="/totalIssuedBooks" element={<TotalIssuedBooks/>}/>
            <Route exact path="/myRequestedBooks" element={<UserRequestedBooks/>}/>
            <Route exact path="/requestedBooks" element={<BookRequests/>}/>
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;