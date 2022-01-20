import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Products from "./components/Products"
import ProductListItem from "./components/ProductListItem"


import './App.css';

const App=()=>{
    
return (
  <div className='App'>
  <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/products/:id" element={<ProductListItem/>} />
    </Routes>
  </BrowserRouter>
  </div>
)
}
export default App;