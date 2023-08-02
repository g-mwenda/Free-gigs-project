import React, { useState, useEffect } from 'react';

function Freelancers() {
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
    <div>
      <h1>Freelancers</h1>
      <ul>
        {freelancers.map(freelancer => (
          <li key={freelancer.id}>{freelancer.name}{freelancer.portfolio}{freelancer.skills}</li>
          // Replace "id" and "name" with the actual properties of your freelancer object
        ))}
      </ul>
    </div>
  );
}

export default Freelancers;
