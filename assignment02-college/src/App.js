import { Route,BrowserRouter as Router,Routes,} from "react-router-dom";
import react from "react";
import reactDom from "react-dom";

import Header from "./Container/Header";
import Home from "./Container/Home";
import Admission from "./Container/Admission";
import Gallery from "./Container/Gallery";
import Academics from "./Container/Academics";
import Masters from "./Container/Academics/Comonents/Masters";
import Pharmacy from "./Container/Academics/Comonents/Pharmacy";
import Bachlors from "./Container/Academics/Comonents/Bachlors";

function App() {
  return (
    <div className="baseContainer">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/bachlors" element={<Bachlors />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/masters" element={<Masters />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App;