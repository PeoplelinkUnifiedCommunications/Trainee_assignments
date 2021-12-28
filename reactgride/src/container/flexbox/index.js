import React from 'react'
import Header from './components/header'
import Maincntr from './components/maincntr'
import Footer from './components/footer'

const Flexbox = () => {
    return (
        <>
            <div className='baseCntnr pdngMD'>
                <Header />
                <div className='pdngVMD'>
                    <Maincntr />
                </div>
                <div className='pdngVXS'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Flexbox;
