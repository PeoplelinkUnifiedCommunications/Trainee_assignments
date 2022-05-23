import React from "react"



// import { Link } from "react-router-dom"

// import Header from '../Header'

import Descrption from '../Descrption'
import Experience from '../Experience'
import About from '../About'
import Contact from '../Contact'
import FooterPart from '../FooterPart'
import Navbar from '../Navbar'



import './index.css'

function Home() {
    return (
        <div className="bg-container">
           <div className="header-bg-container">
           <Navbar />
            <div className="header-content-container">
                <div className="header-frist-part" >
                    <h1><span className="card-1-heading">Frontend <br /> Developer.</span></h1>
                    <p className="card-1-paragraph">I like to craft solid and scalable frontend <br className="headingbreak1" /> products <br className="headingbreak2" /> with great user experiences.</p>
                    <div className="card-1-inside-text-part-container">
                        <div className="card-1-text-part-bottom-text-box">
                            <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
                        </div>
                        <div className="card-1-text-part-bottom-text-box">
                            <p>Over a decade of experience building products for clients across several countries.</p>
                        </div>
                    </div>
                </div>

                <div className="header-image-container">
                    <img className="profile-pic-logo-style" src="https://olaolu.dev/img/handsome.png" alt="profile-logo" />
                </div>
            </div>
           </div>
           
            <Descrption />
            <Experience />
            <About />
            <Contact />
            <FooterPart />
        </div>

    )
}
export default Home

/* <div className="header-bg-container">

<Navbar/>

   <div className="header-content-container">
       <div className="header-frist-part" >
       <h1><span className="card-1-heading">Frontend <br/> Developer.</span></h1>
       <p className="card-1-paragraph">I like to craft solid and scalable frontend <br className="headingbreak1"/> products <br className="headingbreak2"/> with great user experiences.</p>
       <div className="card-1-inside-text-part-container">
           <div className="card-1-text-part-bottom-text-box">
               <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
           </div>
           <div className="card-1-text-part-bottom-text-box">
               <p>Over a decade of experience building products for clients across several countries.</p>
           </div>
       </div>
       </div>
     
       <div className="header-image-container">
           <img  className="profile-pic-logo-style" src="https://olaolu.dev/img/handsome.png" alt="profile-logo"/>
       </div>
   </div>
</div> */