import Content from '../../components/Content'
import NavBar from '../../components/Navbar'
import LeftNavigationBar from "../LeftNavigationBar"


import './index.css'

const Home = ()=>{

    return(
        <div className="home-container">
            <NavBar/>
            <div className="home-content">
                <LeftNavigationBar/>
                <Content />
            </div>
        </div>
    )
}

export default Home