import "./body.css"


function Body() {
    return (
        <div className="main flexCol">

            <div className="sub1 reFlex" >
                <div className="intro flexCol">
                    <span className="h1"> INTRODUCING ENABLEX</span><br />
                    <span className="h2">Build Powerful Apps With EnableX .The Engagement Platform For Live Video, Voice and Messaging
                    </span>
                    <small className="h2">Carrier-grade, customiseable and AI-enabled solutions for secure business communication without any extra infrastructure</small>
                </div>
                <div className="banner flexCol">
                    <img src="banner1.png" alt="banner1" width="100%" />
                </div>
            </div>
            <div className="pairButton flexRow">
                <button className="pButton">Try For Free</button>
                <button className="pButton">Contact Sales</button>
            </div>
            <div className="scrollDiv flexRow">
                <div className="scroll flexRow">
                    <img className="img1" src="bfc-logo.png" alt="1" />
                    <img className="img1" src="digital-agent.png" alt="1" />
                    <img className="img1" src="lifecell.png" alt="1" />
                    <img className="img1" src="gslab.png" alt="1" />
                    <img className="img1" src="qsesl.png" alt="1" />
                    <img className="img1" src="softtech-img.png" alt="1" />
                    <img className="img1" src="planet-nextgen.png" alt="1" />
                    <img className="img1" src="bfc-logo.png" alt="1" />

                </div>

            </div>
            <div className="sub2 reFlex" >
                <div className="card flexCol">
                    <span className="h1">Build In-app Omnichannel conversation.</span><br />
                    <span className="h2">it's that easy with EnableX Communication APIs</span><br />
                    <div >

                        <img src="images/build-app1.png" alt="left card" width="100%" /><br />
                    </div>
                    <span className="h2">Use the programming language of your choice to quickly and easily build production-ready Live Video,Voice, and Message applications on the Developer-trusted,API-powered platform</span><br />
                    <div className="lastButton flexCol">
                        <button className="p1Button">Programmable APIs and SDKs</button>

                    </div>

                </div>
                <div className="card flexCol">
                    <span className="h1">Build In-app Omnichannel conversation.</span><br />
                    <span className="h2">it's that easy with EnableX Communication APIs</span><br />
                    <div>

                        <img src="images/pink-visual.png" alt="right card" width="100%" /><br />
                    </div>
                    <span className="h2">Use the programming language of your choice to quickly and easily build production-ready Live Video,Voice, and Message applications on the Developer-trusted,API-powered platform</span><br />
                    <div className="lastButton flexCol">
                        <button className="p1Button">Programmable APIs and SDKs</button>

                    </div>
                    <br />
                </div>
            </div>



        </div>

    );

}

export default Body;