
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import CreateUser from "./components/CreateUser"
import UserDetails from "./components/UserDetails"
import DataContext from './components/Context';
import {useState} from "react"

import './App.css';

const App=()=>{
    const  [list,setlist]=useState([])
    const addList=(data)=>{
    if(list.length===0){
        setlist([data])
    }else{

        setlist(prevState=>[...prevState, data])
    }

}
return <DataContext.Provider value={{list,addList:addList}}>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<UserDetails/>} />
        <Route path="/login" element={<CreateUser/>} />
    </Routes>
  </BrowserRouter>
</DataContext.Provider>
}
export default App;