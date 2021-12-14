import {BrowserRouter, Route, Switch} from 'react-router-dom'
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
    <Switch>              
        <Route path="/Create" component={Login} />        
        <Route path="/" component={List} />          
    </Switch>
    </BrowserRouter>
    </ListContext.Provider>
}
    
                                                    
export default App;