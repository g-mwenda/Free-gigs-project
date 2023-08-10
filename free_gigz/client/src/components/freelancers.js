import React, { useState, useEffect } from 'react';
import '../styles/Freelancers.css'; // Import the CSS file for Freelancers component
import NavbarComponent from './NavbarComponent';
import { Link } from 'react-router-dom';

const Freelancers = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    fetchFreelancers();
  }, []);

  const fetchFreelancers = () => {
    fetch('/freelancers')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.error('Failed to fetch freelancers');
          throw new Error('Failed to fetch freelancers');
        }
      })
      .then(data => {
        setFreelancers(data);
      })
      .catch(error => {
        console.error('Error fetching freelancers:', error);
      });
  };
  return (
    <div className="freelancers-container">
      <NavbarComponent />
      <h1>Freelancers</h1>
      <div className="freelancers-grid">
        {freelancers.map((freelancer) => (
          <div className="freelancer-item card" key={freelancer.id}>
            <div className="card-details">
              <div
                className="freelancer-profile-picture"
                style={{
                  backgroundImage: `url(${freelancer.profile_picture})`, // Use the freelancer's profile picture URL as the background image
                }}
              ></div>
              <h2>{freelancer.name}</h2>
              <p>Portfolio: {freelancer.portfolio}</p>
              <p>Skills: {freelancer.skills}</p>
              <Link to={`/conversations`} class="chatBtn">
 <svg height="1.6em" fill="white" viewBox="0 0 1000 1000" y="0px" x="0px" version="1.1">
<path d="M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z"></path>
</svg>
<span class="tooltip">Chat</span>
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
  }  

export default Freelancers;
