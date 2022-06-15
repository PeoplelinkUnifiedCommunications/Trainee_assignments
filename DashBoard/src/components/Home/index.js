import { BsBoxArrowRight, BsArrowUpCircle, BsBoxArrowLeft, BsSearch } from 'react-icons/bs'
import { VscBellDot } from 'react-icons/vsc'
import { FiCheckCircle } from 'react-icons/fi'
import { MdMailOutline } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { useState } from 'react'
import LineChart from '../LineChart'
import PieCharts from '../PieChart'


import './index.css'

function Home() {

    const [menu, setMenu] = useState(false)

    const changeMenu = () => {
        setMenu(!menu)
    }


    return (
        <div className="bg-container-home-page">
            {menu && <div className='menu-toggle-dashboard'>
                <div className='menu-toggle-dashboard-header'>
                    Dashboard
                </div>
                <div className='prifile-pic-navlinks-conatiner'>
                    <div >
                        <img className='profile-image' src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="profile-logo" />
                    </div>
                    <ul className='ul'>
                        <li className='dashboard-list-item'>Home</li>
                        <li className='dashboard-list-item'>About</li>
                        <li className='dashboard-list-item'>Products</li>
                        <li className='dashboard-list-item'>Sales</li>
                        <li className='dashboard-list-item'>Footer</li>
                    </ul>
                </div>
            </div>}
            <div className='home-content-bg-container'>
                <div className='home-dashboard-content-part-header'>
                    <div className='header-first-part-container'>
                        <button onClick={changeMenu} type="button" className="menu-button">{!menu ? <BsBoxArrowRight /> : <BsBoxArrowLeft />}</button>
                        <BsSearch />
                        <input className='search-input-tag' placeholder='Search Here' type="text" />
                    </div>
                    <div className='header-first-part-container'>
                        <VscBellDot className='icon-styling' />
                        <MdMailOutline className='icon-styling' />
                        <AiFillSetting className='icon-styling' />
                    </div>
                </div>
                <div className='content-part-header-below-bg'>
                    <div className='content-part-cards-container'>
                        <div className='card-details-container'>
                            <p>5090 <BsArrowUpCircle /> <br /> Order received </p>
                            <p className='card-icon-right-check-circle'><FiCheckCircle /></p>
                        </div>
                        <div className='card-details-container'>
                            <p>5090 <BsArrowUpCircle /> <br /> Order received </p>
                            <p className='card-icon-right-check-circle'><FiCheckCircle /></p>
                        </div>
                        <div className='card-details-container'>
                            <p>5090 <BsArrowUpCircle /> <br /> Order received </p>
                            <p className='card-icon-right-check-circle'><FiCheckCircle /></p>
                        </div>
                    </div>

                    <div className='charts-bg-container'>
                        <div className='line-chart-bg-container'>
                            <LineChart />
                        </div>
                        <div className='pie-chart-container'>
                            <PieCharts />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Home