import React from "react";
import "./home2.css";
function Home2() {
    return (
        <div className="flexRow section1">
            <div className="inner-sect1">
                <span className="main">Design</span> <br />
                <div className="design">
                 <span className="s1">I am an UI/UX Designer based in New Delhi passionate</span> <br />
                 <span className="s2">about creating result oriented user experience,My</span><br />
                 <span className="s3">primary goal is to provide a rich engaging and</span><br />
                 <span className="s4">innovative user experience to the user.</span><br />
                 <span className="s5">I enjoy the most while using the Sketch App,Photoshop CC</span>
                </div> 
                <div className="inner-sect2">
                    <span className="main1">Engineering</span> <br />
                    <div className="engineer">
                        <span className="s6">A user experience (UX) engineer builds and designs</span><br />
                        <span className="s7">digital products like websites and apps while using UX principles.</span><br />
                        <span className="s8">UX engineers generally deal with the front end of layouts.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home2