import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import BorrowedBooks from "../index"
import '../saidNav/saidNav.css'

const Saidnav = () => {
    const [saidNavopen, setSaidNavOpen] = useState(false)
    const handleClick = () => {
        setSaidNavOpen(true)
    }
    return (
        <div className='sideNav '>
            <div className='flexCol pdngSM fullHeight'>
                <div className='flexMinWidthCol'>
                    <ul>

                        {/* {saidNavopen && */}

                        <li className='pdngMD' onClick={handleClick}>
                            Dashboard
                        </li>

                        {/* // } */}
                        <Link to="/borrowedBooks">
                            <li className='pdngMD'>Borrowed Books

                            </li>
                        </Link>
                        <li className='pdngMD'>Reserved Books</li>
                        <li className='pdngMD'>Returned Books</li>
                        <li className='pdngMD'>Lost Books</li>
                        <li className='pdngMD'>Fine amount</li>
                    </ul>
                    {/* <ul className="navListGroup">
                        <li className="navListItem">
                            <NavLink
                                to=""
                                activeClassName="activeNav"
                                className="anchorBox"
                                onClick={() => this.props.handleCloseSideNav()}
                            >
                                <div className="sideNavIcon">
                                    <img
                                        src="/images/icons48/commissions_1_.png"
                                        alt="dashboard"
                                    />
                                </div>
                                <div className="navLinkTxtBox">
                                    <span className="linkTxt">
                                    </span>
                                </div>
                            </NavLink>
                        </li>




                    </ul> */}
                </div>
                <div className='flexAutoCol '>
                    <ul className='flexRow alignCntr justifyCntr'>
                        <Link to="/">
                            <li className='txtCntr pdngSM'>LogOut</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Saidnav