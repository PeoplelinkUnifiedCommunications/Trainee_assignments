import { Route, Routes} from 'react-router-dom';
import CreateContact from "./components/CreateContact"
import ContactCard from "./components/ContactCard";
import React ,{createContext, useState} from 'react';
import './App.css';


export const store=createContext();
const App=()=>{
    
  const [list,addData] = useState([])

return (
  <store.Provider  value ={[list, addData ]}>
    <Routes>
        <Route path="/" element={<CreateContact/>} />
        <Route path="/contact" element={<ContactCard/>} />
    </Routes>
  </store.Provider>
  )
}
export default App;