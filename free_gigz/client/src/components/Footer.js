import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const footerStyle = {
  background: "#f0f0f0",
  padding: "20px",
  textAlign: "center",
};

const socialMediaStyle = {
  fontSize: "24px",
  margin: "0 10px",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={socialMediaStyle} />
        </a>
        <a href="https://www.tiktok.com/your_tiktok_handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} style={socialMediaStyle} />
        </a>
        <a href="https://www.facebook.com/your_facebook_handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} style={socialMediaStyle} />
        </a>
        <a href="https://www.twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} style={socialMediaStyle} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} FreeGigs. All rights reserved.</p>
      <p>Contact: +254 0012 3654</p>
      <p>Location: Ngong Lane Plaza</p>
    </footer>
  );
};

export default Footer;
