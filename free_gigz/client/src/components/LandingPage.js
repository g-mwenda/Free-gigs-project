import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";

const landingPageStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "row", // Change to "row" to arrange items side by side
  justifyContent: "flex-start", // Align content at the start (left side)
  alignItems: "center",
  padding: "0 0px", // Add some padding for better spacing
  backgroundColor: "#D2B48C", // Add the background color here


};

const imageContainerStyle = {
  flex: "1", // Take half of the available space
  marginRight: "20px", // Add some spacing between the image and text
};

const imageStyle = {
  width: "100%",
  height: "100vh",
};

const textContainerStyle = {
  flex: "1", // Take half of the available space
};

export default function LandingPage() {
  const navigate = useNavigate();

  function handleGetStartedClick() {
    // Navigate to the login page when "Get Started" is clicked
    navigate("/login");
  }

  return (
    <div>
      <NavbarComponent />
    <div style={landingPageStyle}>
      <div style={imageContainerStyle}>
        <img
          src="https://i.pinimg.com/474x/67/11/1e/67111eb122a036eb3c13b52073508bea.jpg"
          alt="Landing Page"
          style={imageStyle}
        />
      </div>
      <div style={textContainerStyle}>
        <h1 className="display-4 mt-5">Welcome Free-Gigs Platform</h1>
        <p className="lead">This platform allows you to buy and sell services using the gig economy model.</p>
        <ul>
          <li>Graphic Design</li>
          <li>Web Development</li>
          <li>Content Writing</li>
          <li>Video Editing</li>
          <li>Social Media Marketing</li>
        </ul>
        <hr />
        <button className="btn btn-primary btn-lg" onClick={handleGetStartedClick}>
          Get Started
        </button>
              </div>
          </div>
          <Footer/>
          </div>
  );
}
