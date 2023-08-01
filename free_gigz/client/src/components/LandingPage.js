import React from "react";
import { useNavigate } from "react-router-dom";

const landingPageStyle = {
  backgroundImage: "url('https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", // Update the filename accordingly
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // Align text at the top
  alignItems: "center",
};

export default function LandingPage() {
  const navigate = useNavigate();

  function handleGetStartedClick() {
    // Navigate to the login page when "Get Started" is clicked
    navigate("/login");
  }

  return (
    <div style={landingPageStyle}>
      <div className="container text-center pt-5">
        <h1 className="display-4 mt-5">Welcome to the Free Gigs Freelancing Platform</h1>
        <p className="lead">This platform allows you to buy and sell services using the gig economy model.</p>
        <button className="btn btn-primary btn-lg" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}
