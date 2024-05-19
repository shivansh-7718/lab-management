import React from 'react';
import './footer.css';
import imgLogo from '../../assets/logog.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={imgLogo} alt="Pathology Management System Logo" />
        {/* <p>Pathology Management System</p> */}
      </div>
      <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div class="footer-bottom">
            <p>&copy; 2024 PathoGenius Diagnostics. All rights reserved.</p>
        </div>
      
    </div>
  );
};

export default Footer;
