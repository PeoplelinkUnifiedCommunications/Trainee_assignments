import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css'

const styleForIcons = {
    width: '50%',
    height: '10vh',
    // margin: 20,
    // textAlign: 'center',
    // display: 'inline-block',
  };

function Footer() {
  return (
      <div className="footer-display">
          <h3>Copyright</h3>
          <ul className="footer-unordered-list">
              <li><a href="#"><FacebookIcon style={styleForIcons}/></a></li>
              <li><a href="#"><LinkedInIcon style={styleForIcons}/></a></li>
              <li><a href="#"><InstagramIcon style={styleForIcons}/></a></li>
              <li><a href="#"><TwitterIcon style={styleForIcons}/></a></li>
          </ul>
      </div>
  )
}

export default Footer;
