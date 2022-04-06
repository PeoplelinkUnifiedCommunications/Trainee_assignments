import "./header.css"


function Header() {
    return (
        <div className="header flexRow">
            <div className="joinDiv">
                <button className="joinButton reFlex"> <img src="discordd.svg" alt="discord" /></button>
            </div>
            <div className="logoDiv">
                <img src="enableX_logo.png" alt="enable logo" width="140px" />
            </div>
            <div className="talkDiv">
                <button className="talkButton reFlex"> talk</button>
            </div>

        </div>

    );

}

export default Header;