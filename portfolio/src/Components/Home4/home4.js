import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./home4.css";
function Home4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [formSubmit, setFormSubmit ] = useState("")
  
  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeMsg = (e) => {
    setMsg(e.target.value);
  };

  const onFormSubmission = (e) => {
    e.preventDefault()
    if(name.length <= 2) {
      setIsNotValidName(true)
    }
    else {
      setIsNotValidName(false)
    }

    if(email.endsWith("@gmail.com")) {
      setIsNotValidEmail(false)
    }
    else {
      setIsNotValidEmail(true)
    }

    if(msg.length <= 30) {
      setIsNotValidMsg(true)
    }
    else {
      setIsNotValidMsg(false)
    }

    if((isNotValidName || isNotValidEmail || isNotValidMsg) === false) {
      setFormSubmit(true)
    }
    else {
      setFormSubmit(false)
    }

  }

  const  [ isNotValidName, setIsNotValidName ] = useState(false)
  const  [ isNotValidEmail, setIsNotValidEmail ] = useState(false)
  const  [ isNotValidMsg, setIsNotValidMsg ] = useState(false)

  return (
    <div className="flexCol section3">
      <div className="home4-card-1-bg-container">
        <div className="home-4-card1-inner">
          <h2>I build &</h2>
          <h2>design stuff</h2>

          <div className="essential">
            <span>Open source</span> <br />
            <span>projects, web apps</span> <br />
            <span>and experimentals.</span>
          </div>
          <Link to={"/work"}>
            <div className="rectangle">
              <button className="btn">
                SEE MY WORK &nbsp; &nbsp; &#10230;
              </button>
            </div>
          </Link>
        </div>

        <hr />
        <div className="home-4-card1-inner">
          <div>
            <h2>I write,</h2>
            <h2>sometimes</h2>
          </div>
          <div className="essential1">
            <span>About design,</span> <br />
            <span>frontend dev,</span> <br />
            <span>learning and life.</span>
          </div>

          <Link to={"/shelf"}>
            <div className="rectangle">
              <button className="btn">
                READ MY ARTICLES &nbsp; &nbsp; &#10230;
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="home4-card-2-bg-container">
        <div className="message">
          <h2 className="text-headpara">Send me a message!</h2>

          <div className="text-headparamsg">
            <span className="text-headpara1">
              Got a question or proposal, or just want to say hello?
            </span>
            <br />
            <span className="text-headpara2">Go ahead.</span>
          </div>

          {formSubmit ? <Navigate to="/Afterform"/> : <form onSubmit={onFormSubmission} className="fields">
            <div className="namemailCntnr">
              <div className="nameCntnr">
                <label htmlFor="name">Your Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={changeName}
                  placeholder="Enter your name" required
                />
                {isNotValidName && <p className="errMsg">*Enter valid name</p>}

                <br />
                <br />
              </div>
              <div className="mailCntnr">
                <label htmlFor="email">Email Address</label>
                <br />
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={changeEmail}
                  placeholder="Enter your email address" required
                />

                { isNotValidEmail && <p className="errMsg">*Enter valid Email</p> }

                <br />
                <br />
              </div>
            </div>
            <div className="msgCntnr">
              <label htmlFor="msg">Your Message</label>
              <br />
              <textarea
                className="txtarea"
                rows="3"
                cols="30"
                type="text"
                name="msg"
                value={msg}
                onChange={changeMsg}
                placeholder="Hi, I think we need a design system for our products at Company.How soon can you hop on to discuss this?"
               required />
              { isNotValidMsg && <p className="errMsg">*Enter valid Message</p> }
            </div>
            <div className="shoot">
              <a
                href="https://formspree.io/hello@olaolu.devSHOOT"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit" className="btn">SHOOT&nbsp; &nbsp; &#10230;</button>
              </a>
            </div>
          </form> }
            
        </div>
      </div>
    </div>
  );
}
export default Home4;
