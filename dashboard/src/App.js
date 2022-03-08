import { useState } from "react";
import Body from "./containers/content";
import Header from "./containers/header";
import SideNav from "./containers/sideNav";
import context from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Views from "./containers/views";
import Products from "./containers/products";
import Sales from "./containers/sales";
import Users from "./containers/users";
import Cart from "./containers/cart";
import Settings from "./containers/settings";
import Files from "./containers/files";
import NotFound from "./containers/uiElements/notFound";
// import UserSignUp from "./containers/userSignUp";
// import Error from "./containers/uiElements/error";
// import UserSignIn from "./containers/userSignIn";
// import NoData from "./containers/uiElements/noData";

function App() {
	const [contextData] = useState([]);

	return (
		<BrowserRouter>
			<context.Provider
				value={{
					dataList: contextData,
				}}>
				<div className='baseCntr'>
					<Header />
					<div className='mainCntr'>
						<SideNav />
						<Routes>
							<Route path='/' element={<Body />} />
							<Route exact path='/views' element={<Views />} />
							<Route exact path='/sales' element={<Sales />} />
							<Route exact path='/users' element={<Users />} />
							<Route exact path='/products' element={<Products />} />
							<Route exact path='/cart' element={<Cart />} />
							<Route exact path='/settings' element={<Settings />} />
							<Route exact path='/files' element={<Files />} />
							<Route exact path='/products/:id' element={<Files />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</context.Provider>
		</BrowserRouter>
	);
}

export default App;
