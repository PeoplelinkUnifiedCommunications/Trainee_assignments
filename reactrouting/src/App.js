import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Content from "./components/Content";
import Videos from "./components/Videos";

function App() {
    return (
        <div className="app-div">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="" element={<Home />} />
                    <Route path="content" element={<Content />} />
                    <Route path="videos" element={<Videos />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
