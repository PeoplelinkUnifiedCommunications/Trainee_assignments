import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import ListContext from './Context/ListContext';
import Login from "./Component/Login"
import List from './Component/List'

const App = () => {
    const  [list, setlist]=useState([])
    const addList = (data)=>{
    if(list.length === 0){
        setlist([data])
    }else{
        setlist(prevState=>[...prevState, data])
    }
}

return <ListContext.Provider value={{list, addList:addList}}>
    <BrowserRouter>
    <Routes>              
        <Route path="/Create" element={<Login/>} />        
        <Route path="/" element={<List/>}  />          
    </Routes>
    </BrowserRouter>
    </ListContext.Provider>
}    
                                                    
export default App;