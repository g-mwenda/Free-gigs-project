
import React from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const companyNameStyle = {
    marginLeft: '8px',
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const dropdownStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const dropdownContentStyle = {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',
  };

  const dropdownButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  };

  const imageStyle = {
    marginTop: '20px',
  };

  return (
    <div className="App">
      <div style={containerStyle}>
        <div style={logoStyle}>
          <img src="logo.png" alt="Freegigs Logo" />
          <div style={companyNameStyle}>Freegigs</div>
        </div>
        <div style={navLinksStyle}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <NavLink type= "button">Get Started</NavLink>

          <div style={dropdownStyle}>
            <button style={dropdownButtonStyle}>Get Started</button>
            <div style={dropdownContentStyle}>
              <NavLink to="/Login">Client</NavLink>
              <a href="#freelancer">Freelancer</a>
              <a href="#admin">Admin</a>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="freelance.png" alt="image" style={imageStyle} />
        <div className="content">
          Free-gigs Application entails choosing a freelancer of choice based on the task you need completed and also applying for tasks from the client based on your skills and expertise. To begin, Sign up/Login into your account.
        </div>
      </div>
    </div>
  );
}

export default App;

