import "./header.css"

function Header(){
    return(
        <div className="flexRow header">
            <div className="flexAutoRow profile">
                <div className="FlexAutoRow pic">
                    <img className="img" src="/images/profile0.jpeg" alt="profile"/>

                </div>

            </div>
            <div className="flexAutoCol details">
                <span>Shantanu Biswas</span>
                <span>Associate Software Developer</span>

            </div>

        </div>
    );
}
export default Header;