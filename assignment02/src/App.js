
import { Switch, Route} from "react-router-dom";
import UserDetails from './components/UserDetails'
import Form from './components/Form'
import './App.css';

function App(){
    return (
     <Switch>
        <Route exact path="/" component={UserDetails}/>
        <Route exact path="/form" component={Form}/>
     </Switch>  
    )
 
}

export default App;
