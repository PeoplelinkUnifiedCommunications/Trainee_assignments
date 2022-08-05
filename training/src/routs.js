import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/header/header';
const Signup = lazy(() => import('../src/container/signup/index'));
const Login = lazy(() => import('../src/container/login/index'));
const Layout = lazy(() => import('./container/layout/index'));
const BorrowedBooks = lazy(() => import('./container/BorrowedBooks/index'));
const Dashboard = lazy(() => import('./container/dashboard/index'));
const ReservedBooks = lazy(() => import('./ReservedBooks/index'))
const UserefCntr =lazy(() => import('./container/useRef/index'))
const RoutesPage = () => (
    <>

        <div className='flexCol headerHeight'>
            <Header />
            <Router>
                <Suspense fallback={<div className='flexRow alignCntr justifyCntr fullHeight'>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path='/layout' element={<Layout />} >
                            <Route path='borrowedBooks' element={<BorrowedBooks />} />
                            <Route path='dashboard' element={<Dashboard />} />
                            <Route path="reservedbooks" element={<ReservedBooks />} />
                            <Route path="useRef" element={<UserefCntr />} />
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </div>
    </>
);
export default RoutesPage