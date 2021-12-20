
import { Routes, Route} from "react-router-dom";
import UserDetails from './components/UserDetails'
import Form from './components/Form'
import './App.css';

function App(){
    return (  
     <Routes>
        <Route exact path="/" element={<UserDetails/>}/>
        <Route exact path="/form" element={<Form/>}/>
     </Routes> 
    )
 
}
export default App;
