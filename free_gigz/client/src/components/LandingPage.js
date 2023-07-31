import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div>
      {/* Your landing page content */}
      <h1>Welcome to Your App</h1>
      <p>Some brief information about your application...</p>

      {/* Get Started button */}
      <button onClick={handleGetStartedClick}>Get Started</button>
    </div>
  );
}

export default LandingPage;
