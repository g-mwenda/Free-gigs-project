import React, { useState, useContext } from 'react';
import ProposalsForm from './ProposalsForm';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import joblistingcard from '../styles/joblistingcard.css';
import joblistingbtn from '../styles/joblistingbtn.css';

export default function JobListingItem({ job }) {
  const [showProposalsForm, setShowProposalsForm] = useState(false);
  const { current_user } = useContext(AuthContext); // Get the current_user object from AuthContext
  const navigate = useNavigate();

  const handleBidClick = () => {
    setShowProposalsForm(true);
  };

  return (
    <div>
      <div class="jobcard">
        <div class="jobcard-image">
          <p class="jobtext-body">Deadline: {job.deadline}</p>
          <p class="jobtext-body">Description: {job.description}</p>
          <p class="jobtext-body">Budget: {job.budget}</p>
        </div>
        <div class="jobcard-description">
          <h3 class="jobtext-title">{job.title}</h3>
        </div>
      </div>

      {current_user && current_user.role === 'freelancer' && (
        <>
          <div></div>
          <div className="button-container">
            <button onClick={handleBidClick} className="btn btn-job">
              Bid
            </button>
          </div>
        </>
      )}
      {showProposalsForm && <ProposalsForm job={job} onClose={() => setShowProposalsForm(false)} />}
    </div>
  );
}
