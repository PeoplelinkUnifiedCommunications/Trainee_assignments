import { Link } from "react-router-dom";
import "./home4.css";
function Home4() {

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

          <div className="text-headpara msg">
            <span className="text-headpara">
              Got a question or proposal, or just want to say hello?
            </span>
            <br />
            <span>Go ahead.</span>
          </div>

          <div className="fields">
            <div className="namemailCntnr">
              <div className="nameCntnr">
                <label htmlFor="name">Your Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />{" "}
                <br />
                <br />
              </div>
              <div className="mailCntnr">
                <label htmlFor="email">Email Address</label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                />{" "}
                <br />
                <br />
              </div>
            </div>
            <div className="msgCntnr">
              <label htmlFor="msg">Your Message</label>
              <br />
              <textarea className="txtarea"
              rows="2"
              cols="30"
                type="text"
                name="msg"
                placeholder="Hi, I think we need a design system for our products at Company"
              />
            </div>
            <div className="shoot">
            <button className="btn">SHOOT &nbsp; &nbsp; &#10230;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home4;
