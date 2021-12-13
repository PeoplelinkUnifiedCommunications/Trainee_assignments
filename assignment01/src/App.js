
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
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
    <Switch>
        <Route exact path="/" component={UserDetails} />
        <Route exact path="/login" component={CreateUser} />
    </Switch>
  </BrowserRouter>
</DataContext.Provider>
}






export default App;