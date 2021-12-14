import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./Component/Login"
import List from './Component/List'


const App = () => (
  

        <BrowserRouter>
        <Switch>              
            <Route path="/Create" component={Login} />        
            <Route path="/" component={List} />          
        </Switch>
        </BrowserRouter>
)
    
                                                    
export default App;