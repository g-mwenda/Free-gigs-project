import React, { useState, useEffect } from 'react';
import '../styles/Freelancers.css'; // Import the CSS file for Freelancers component
import NavbarComponent from './NavbarComponent';

const Freelancers = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [showBack, setShowBack] = useState(false);

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
          <div
            className={`freelancer-item card ${showBack ? 'show-back' : ''}`}
            key={freelancer.id}
            onClick={() => setShowBack(!showBack)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h2>{freelancer.name}</h2>
              </div>
              <div className="card-back">
                <p>Portfolio: {freelancer.portfolio}</p>
                <p>Skills: {freelancer.skills}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freelancers;
