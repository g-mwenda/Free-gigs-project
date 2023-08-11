
import React, { useState, useEffect } from 'react';
import NavbarComponent from "./NavbarComponent";
import { useLocation } from 'react-router-dom'; // Added import for useLocation

function UpdateProposalForm({ onClose }) {
  const location = useLocation(); // Get the current location
  const proposal = location.state.proposal; // Access proposal data from location state

  const [updatedProposal, setUpdatedProposal] = useState({
    project_details: proposal.project_details,
    cost_estimate: proposal.cost_estimate,
    timeline: proposal.timeline,
    // Add other fields here
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProposal((prevProposal) => ({
      ...prevProposal,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your logic to update the proposal on submission
    // Rest of the handleSubmit function remains unchanged
  };

  return (
    <div>
      <NavbarComponent />
      <div className="update-proposal-form">
        <h3>Edit Proposal </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Details</label>
            <textarea
              name="project_details"
              value={updatedProposal.project_details || ''} // Handle possible null value
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Cost Estimate</label>
            <input
              type="number"
              name="cost_estimate"
              value={updatedProposal.cost_estimate || ''} // Handle possible null value
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Timeline</label>
            <input
              type="date"
              name="timeline"
              value={updatedProposal.timeline || ''} // Handle possible null value
              onChange={handleInputChange}
            />
          </div>
          {/* Add other form fields here */}
          <button type="submit" className="btn btn-primary">Update Proposal</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProposalForm;
