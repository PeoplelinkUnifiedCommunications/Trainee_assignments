// import Login from "../src/container/login/index";
// import { Routes, Route } from "react-router-dom";
// export default (
//     <>
//         <Routes>
//             <Route path="/" element={<Login />} />

//             {/* <Route path="about" element={<AboutPage />} /> */}
//         </Routes>
//     </>
// )

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Signup = lazy(() => import('../src/container/signup/index'));
const Login = lazy(() => import('../src/container/login/index'));
// const About = lazy(() => import('./routes/About'));

const RoutesPage = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Suspense>
    </Router>
);
export default RoutesPage