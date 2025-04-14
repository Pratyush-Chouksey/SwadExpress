import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            velit et nam recusandae esse deleniti alias repellendus! Porro natus
            autem distinctio quidem repellendus, quas quis delectus esse impedit
            totam vitae omnis exercitationem non voluptatum unde.
          </p>
          <div className="footer-content-left-social">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-right">
          <div className="footer-content-center">
            <h3>Quick Links</h3>
            <ul>
              <a href="#navbar">Home</a>
              <a href="#class-menu">Menu</a>
              <a href="#app-download">Mobile App</a>
              <a href='#footer'>Contact Us</a>
            </ul>
          </div>
          <div className="footer-content-right-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91-9359853665</li>
              <li>contact@swadexpress.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © SwadExpress.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
