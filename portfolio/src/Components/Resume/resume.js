import React from "react";
import { Link } from "react-router-dom";
import "./resume.css";
function Resume() {
    return(
        <div className="flexCol resume">
            <div className="flexRow headerres"></div>
            <div className="coretechs">
              <span>Core</span><br />
              <span>Technologies:</span>

              <div className="technologies">
                <span className="tech1">HTML5, CSS3,</span><br />
                <span className="tech2">CSS-in-JS</span><br />
                <span className="tech3">ReactJS, NodeJS</span>
              </div>
              <br/>
              <div className="othertechs">
                  <span>Others:</span><br />
                  <span className="tech1">Design Systems, PWAs</span><br />
                  <span className="tech2">Software Testing</span><br />
                  <span className="tech3">Mobile Web Design</span>
              </div>

              <h1 className="expert">Marti</h1>
              <span className="desig">Expert UI Designer</span>
              </div>
              <hr />

              <div className="experience">
                  <h1>Experience</h1>
                  <div className="exp-section">
                  <li>Basic Designing Tools</li><br />
                  <li>UI/UX Visual Design</li>
                  <li>HTML & CSS</li>
                  <li>Search Engine Optimization</li>
                  <li>PWAs</li>
        
              </div>

              <h1>Projects</h1>
              <div className="res-projects">
              <span className="projects-res">Links to some of my work can be found on <br /><Link to={"/work"}>marti.dev/work</Link></span>
              </div>
              <br /><br /><br /><br />
              <h1>Marti</h1>
              </div>

            </div>
    )
}
export default Resume