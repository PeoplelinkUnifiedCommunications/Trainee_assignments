import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import FormContainer from './FormContainer/index';
import ListView from './ListView';

import './App.css';

const App=()=>
<BrowserRouter>
<Switch>

<Route path="/Create" component={FormContainer} />

<Route path="/" component={ListView}/>

</Switch>


</BrowserRouter>




export default App;