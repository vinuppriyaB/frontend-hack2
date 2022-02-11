import React from 'react';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
export const Footer = () => {
    return (
        <div className="footer">
            
            <div className="aboutus">
            <h3>About us</h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus vivamus class dolor pellentesque dignissim habitasse duis ac.

            Phasellus vivamus class dolor pellentesque dignissim habitasse duis ac.</p>
          
              </div>
            <div className="contact">
            <h3>Contact</h3>
            <div className="contact_icon">
            <LinkedInIcon/>
            <EmailIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            </div>
            
            
            </div>
        </div>
    )
}


