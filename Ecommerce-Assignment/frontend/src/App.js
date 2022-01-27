import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LogupPage from "./components/LogupPage";
import Navbar from "./components/Navbar";
import UserAccount from "./components/UserAccount";
import CreateProduct from "./components/CreateProduct";
import ProductList from "./components/ProductList";
import MyCart from "./components/MyCart";
import ProductItem from "./components/ProductItem";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div className="my-app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="Loguppage" element={<LogupPage />} />
                <Route path="useraccount" element={<UserAccount />}>
                    <Route path="" element={<CreateProduct />} />
                    <Route path="productlist" element={<ProductList />} />
                    <Route path="productitem/:id" element={<ProductItem />} />
                    <Route path="mycart" element={<MyCart />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
