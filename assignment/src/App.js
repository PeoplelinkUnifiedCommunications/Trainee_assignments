import {Switch,Route,BrowserRouter} from 'react-router-dom'
import FormData from './components/FormData'
import Form from './components/Form'

import './App.css';

const App = () => (
  <>
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FormData}/>
        <Route exact path="/form" component={Form}/>
      </Switch>
    </BrowserRouter>
  </>
    
)
export default App;
