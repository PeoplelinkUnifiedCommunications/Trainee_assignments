import "./body.css"


function Body() {
    return (
        <div className="body flexCol">

            <div className="info flexCol">
                <span className="redText"> INTRODUCING ENABLEX</span><br />
                <h1>Build Powerful Apps With EnableX</h1><br />
                <h1>The Engagement Platform For</h1>
                <h1>Live Video, Voice and Messaging</h1><br /><br />
                <span className="smallText"> Carrier-grade, customiseable and AI-enabled solutions for secure business<br />
                    communication without any extra infrastructure</span>
                <div className="imageHolder flexCol">

                    <img src="banner1.png" alt="banner1" height="450px" />
                </div>
                <div className="pairButton flexRow">
                    <button className="p1Button">Try For Free</button>
                    <button className="p2Button">Contact Sales</button>

                </div>



            </div>
            <div className="scrollCards flexRow">
                <img src="bfc-logo.png" alt="1" height="50px" />
                <img src="digital-agent.png" alt="1" height="50px" />
                <img src="lifecell.png" alt="1" height="50px" />
                <img src="gslab.png" alt="1" height="50px" />
                <img src="qsesl.png" alt="1" height="50px" />
                <img src="softtech-img.png" alt="1" height="50px" />
            </div>
            <div className="viewButton flexCol">

                <button className="p1Button"> View Custom Stories</button>
            </div>
            <div className="section1 flexCol">
                <div className="sub1 flexRow">
                    <div className="lCard flexCol">
                        <h1>Build In-app Omnichannel conversation.</h1><br />
                        <span>it's that easy with</span><br />
                        <span className="redText">EnableX Communication APIs</span><br />
                        <div >

                            <img src="images/build-app1.png" alt="left card" width="100" /><br />
                        </div>
                        <span>Use the programming language of your choice to quickly and easily build production-ready Live Video,Voice, and Message applications on the Developer-trusted,API-powered platform</span><br />
                        <div className="lastButton flexCol">
                            <button className="p1Button">Programmable APIs and SDKs</button>

                        </div>
                        <br />
                    </div>
                    <div className="rCard flexCol">
                        <h1>Build In-app Omnichannel conversation.</h1><br />
                        <span>it's that easy with</span><br />
                        <span className="redText">EnableX Communication APIs</span><br />
                        <div>

                            <img src="images/pink-visual.png" alt="right card" width="100%" /><br />
                        </div>
                        <span>Use the programming language of your choice to quickly and easily build production-ready Live Video,Voice, and Message applications on the Developer-trusted,API-powered platform</span><br />
                        <div className="lastButton flexCol">
                            <button className="p1Button">Programmable APIs and SDKs</button>

                        </div>
                        <br />
                    </div>

                </div>

            </div>


        </div>

    );

}

export default Body;