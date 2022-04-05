import "./header.css"


function Header() {
    return (
        <div className="header flexCol">
            <div className="top flexRow">

                <img src="enableX_logo.png" alt="enable logo" height="25px" />


                <div className="upperHead flexRow">
                    <button className="joinButton flexRow"> <img className="dicon" src="discordd.svg" alt="discord" /><span>join the community</span></button>

                    <div className="sign flexRow">
                        <span>SIGN IN</span>
                        <span>|</span>
                        <span>SIGN UP</span>

                    </div>
                    <button className="talkButton"> Talk To Us</button>

                </div>
            </div>
            <div className="bottom flexRow">

                <div className="lowerHead flexRow">

                    <div className="flexRow">
                        <li>Communication <br /> APIs</li>
                        <li>Communication <br /> Solutions</li>
                        <li>Communication For <br /> Service Providers</li>
                        <li> <br /> Pricing</li>
                        <li><br /> Developer Center</li>
                        <li><br /> Insights</li>
                        <button className="hiringButton"> We Are Hiring</button>
                    </div>


                </div>
            </div>

        </div>

    );

}

export default Header;