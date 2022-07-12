import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';
import Friends from './Components/Friends';
import Home from './Components/Home';
export const store = createContext();

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App appBg">
      <store.Provider value={[token, setToken]}>
        <BrowserRouter forceRefresh={true}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/friends" element={<Friends />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
