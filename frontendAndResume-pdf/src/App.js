import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import ReactForm from "./components/ReactForm"
import Home from "./components/Home";
// import Carousel from "./components/Carousel";

// function App(){
//   return(
//     <div className="baseContainer">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<ReactForm/>}/>
//         </Routes>
//       </Router>
//     </div>
//   )
//   }
//   export default App;

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
  }
  export default App;