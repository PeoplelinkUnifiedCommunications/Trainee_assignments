import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home4.css";
function Home4() {

  const [values, setValues] = useState({name:'', email:'', msg:''})

  const saveFormData = async () => {
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(values)
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData();
      alert('Your registration was successfully submitted!');
      setValues({
        name: '', email: '', msg: ''
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");


  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handleMsgChange = event => {
    setMsg(event.target.value)
  }


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
          <Link to={"/work"}>
          <div className="rectangle">
            <button className="btn">SEE MY WORK &nbsp; &nbsp; &#10230;</button>
          </div>
          </Link>

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

          <Link to ={"/shelf"}>
          <div className="rectangle">
            <button className="btn">READ MY ARTICLES &nbsp; &nbsp; &#10230;</button>
          </div>
          </Link>
        </div>

        <div className="message">
          <h2>Send me a message!</h2>

          <div className="msg">
            <span>Got a question or proposal, or just want to say hello?</span>
            <br />
            <span>Go ahead.</span>
          </div>

          <form onSubmit={handleSubmit}>
          <div className="fields">
            <label htmlFor="name">Your Name</label>
            <br />
            <input type="text" name="name" onChange={handleNameChange} value={name} placeholder="Enter your name" /> <br />
            <br />
            <label htmlFor="email">Email Address</label>
            <br />
            <input type="text" name="email" onChange={handleEmailChange} value={email} placeholder="Enter your email address" /> <br />
            <br />
            <label htmlFor="msg">Your Message</label>
            <br />
            <input
              type="text" name="msg" onChange={handleMsgChange} value={msg}
              placeholder="Hi, I think we need a design system for our products at Company"
            />
          </div>
          </form>

         
            <button onClick={onSubmit} className="btn">SHOOT &nbsp; &nbsp; &#10230;</button>
        </div>
      </div>
    </div>
  );
}
export default Home4;
