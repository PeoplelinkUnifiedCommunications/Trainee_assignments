import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./Component/Login"
import List from './Component/List'



const App = () => {
return (
    <BrowserRouter>    
    <Routes>              
        <Route path="/Create" element={<Login/>} />        
        <Route path="/" element={<List/>}  />          
    </Routes>
    </BrowserRouter>
    
    );
}   
                                                    
export default App;
