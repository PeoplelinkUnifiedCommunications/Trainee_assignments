import "./index.css"
function Header(){
    return(
        <div className="header">
            <div className="logo">
                <div className="img">
                <img src= "https://icon-library.com/images/university-icon/university-icon-10.jpg" alt ="logo" width = "auto" height = "100%"/>
                </div>
                <div className="clgName">
                <h1>ORUGALLU COLLEGE</h1>
                </div>
            </div>
            <div className="nav">
                <span>home</span>
                <span>/admission</span>
                <span>/galary</span>
                
                

            </div>

        </div>
    );
}

export default Header;