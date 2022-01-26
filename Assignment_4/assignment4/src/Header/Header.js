import React from 'react';
import './Header.css'

function Header() {
    return (
    <div>
        <div className='header flex_row header_container'>
            <div>
                <img className='icon' alt="" src="https://thumbs.dreamstime.com/b/businessman-vector-icon-avatar-sign-man-business-suit-male-face-flat-design-man-avatars-profile-concept-concept-boss-85517342.jpg" />
            </div>
            <div>
                <p className='titles'><b>Name: </b> Pavan Rayala</p>
                <p className='titles'><b>Designation: </b> Associate Software Developer</p>
            </div>
        </div>
    </div>
    )
}

export default Header;

