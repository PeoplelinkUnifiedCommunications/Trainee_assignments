import React from 'react'
import Header from './components/header'
import Sidenav from './components/sidenav'
import ContentCntr from './components/contentCntr'
import Footer from './components/footer'
const Responsive = () => {
    return (
        <>
            <div className='pdngMD'>
                <Header />
                <div className='pdngVMD '>
                    <Sidenav />
                    <ContentCntr />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Responsive;

