import React from "react";
import "./home4.css";
function Home4() {
  return (
    <div className="flexRow section3">
      <div className="inner-sect4">
        <div className="innerCntnr">
          <h2>I build &</h2>
          <h2>design stuff</h2>

          <div className="essential">
            <span>Open source</span> <br />
            <span>projects, web apps</span> <br />
            <span>and experimentals.</span>
          </div>
          <div className="rectangle">
            <p>SEE MY WORK &nbsp; &nbsp; &#10230;</p>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="content">
            <h2>I write,</h2>
            <h2>sometimes</h2>
          </div>
          <div className="essential1">
            <span>About design,</span> <br />
            <span>frontend dev,</span> <br />
            <span>learning and life.</span>
          </div>

          <div className="rectangle">
            <p>READ MY ARTICLES &nbsp; &nbsp; &#10230;</p>
          </div>
        </div>

        <div className="message">
          <h2>Send me a message!</h2>

          <div className="msg">
            <span>Got a question or proposal, or just want to say hello?</span>
            <br />
            <span>Go ahead.</span>
          </div>

          <div className="fields">
            <label htmlFor="name">Your Name</label>
            <br />
            <input type="text" placeholder="Enter your name" /> <br />
            <br />
            <label htmlFor="email">Email Address</label>
            <br />
            <input type="text" placeholder="Enter your email address" /> <br />
            <br />
            <label htmlFor="msg">Your Message</label>
            <br />
            <input
              type="text"
              placeholder="Hi, I think we need a design system for our products at Company"
            />
          </div>

          <div className="rectangle">
            <p>SHOOT &nbsp; &nbsp; &#10230;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home4;
