import React from 'react';
import './Style/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <p>ABOUT</p>
          <ul>
            <li>Contact us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>   
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div className="footer-section">
          <p>GROUP COMPANIES</p>
          <ul>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>

        <div className="footer-section">   
          <p>HELP</p>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
            <li>Report Infringement</li>
          </ul>
        </div>

        <div className="footer-section">
          <p>CONSUMER POLICY</p>
          <ul>
            <li>Cancellation & Returns</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>ERP Compliance</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-mail">
          <h5>Mail Us</h5>
          <p>
            Flipkart Internet Private Limited, <br />
            Buildings Alyess, Begonia <br />
            Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabisanahalli Village, <br />
            Bengaluru, 560103 <br />
            Karnataka, India
          </p>
          <h4 className="social-heading">Social:</h4>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div className="footer-address">
          <h5>Registered Office Address:</h5>
          <p>
            Flipkart Internet Private Limited, <br />
            Buildings Alyess, Begonia <br />
            Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabisanahalli Village, <br />
            Bengaluru, 560103 <br />
            Karnataka, India <br />
            CIN: U51109KA2021PTC066107
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
