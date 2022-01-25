import NavBar from "./Components/NavBar";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignUp";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home";
function App() {
	return (
		<div className="bg_container">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route exact path="/signup" element={<SignupPage />} />
				<Route exact path="/Home" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
