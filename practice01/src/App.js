import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./Component/Login"
import Listitems from './Component/List'
import Dashboard from './Component/Dashboard'
import {} from 'react-bootstrap'


const App = () => (
  

        <BrowserRouter>
        <Switch>  
            
            <Route path="/" component={Login} />        
            <Route path="/create" component={Listitems} />  
            <Route path="/dashboard" component={Dashboard} />         
        </Switch>
        </BrowserRouter>
)
    
                                                     

export default App;