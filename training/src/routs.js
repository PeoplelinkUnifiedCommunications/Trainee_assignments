import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/header/header';
const Signup = lazy(() => import('../src/container/signup/index'));
const Login = lazy(() => import('../src/container/login/index'));
const Dashboard = lazy(() => import('./container/dashboard/index'));
const BorrowedBooks = lazy(() => import('./container/BorrowedBooks/index'));

const RoutesPage = () => (
    <>

        <div className='flexCol headerHeight'>
            <Header />
            <Router>
                <Suspense fallback={<div className='flexRow alignCntr justifyCntr fullHeight'>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/borrowedBooks' element={<BorrowedBooks />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    </>
);
export default RoutesPage