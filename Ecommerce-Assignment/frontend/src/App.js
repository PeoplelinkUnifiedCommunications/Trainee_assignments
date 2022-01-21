import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LogupPage from "./components/LogupPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="my-app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/Loguppage" element={<LogupPage />} />
            </Routes>
        </div>
    );
}

export default App;
