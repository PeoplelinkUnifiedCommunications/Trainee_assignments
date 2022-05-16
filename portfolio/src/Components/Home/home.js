import React from "react";
import "./home.css";
function Home() {
    return (
        <div className="flexRow heading">
            <div className="role">
               <span className="ui">UI/UX</span><br />
               <span className="devloper">Developer.</span>
               <br/>
               <div className="about">
                <span className="abt1">UX designers spend much of their time in</span> <br />
                <span className="abt2">creating the best possible experience.</span>
               </div>
               <div className="grid-cntnr">
                <div className="sec1">
                   <span className="exp1">UX designers use a combo</span> <br />
                   <span className="exp2">of technical and workplace </span> <br />
                   <span className="exp3">skills in their design work.</span>
                </div>
               <div className="sec2">
                   <span className="exp4">Prototypes,wireframes,userflows,</span> <br />
                   <span className="exp5">mockups,visual design and design</span> <br />
                   <span className="exp6">software,user research.</span> <br />
               </div>
            </div>
        </div>
        </div>
    )    
}
export default Home