
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CreateUser from "./components/CreateUser"
import UserDetails from "./components/UserDetails"
import './App.css'
const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={CreateUser} />
        <Route exact path="/userdetails" component={UserDetails} />
      </Switch>
 </BrowserRouter>
)

export default App