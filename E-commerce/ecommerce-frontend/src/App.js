import { Routes, Route} from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import ProductsList from "./components/ProductsList";
import CartList from "./components/CartList";
import CreateProduct from "./components/CreateProductItem";
import ProductItemDetails from './components/ProductItemDetails'

import './App.css';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/createProduct" element={<CreateProduct/>}/>
        <Route exact path="/productsList" element={<ProductsList/>}/>
        <Route exact path="/products/:id" element={<ProductItemDetails/>}/>
        <Route exact path="/cartList" element={<CartList/>}/>
     </Routes> 
  );
}

export default App;
