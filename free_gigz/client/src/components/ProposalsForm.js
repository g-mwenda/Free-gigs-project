import React, { useState } from "react";

export default function ProposalsForm({ job, onClose }) {
  const [projectDetails, setProjectDetails] = useState("");
  const [costEstimate, setCostEstimate] = useState("");
  const [timeline, setTimeline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the proposal data to the server using fetch or your preferred method
    // Include the job listing ID, freelancer ID (retrieved from the user context or props), projectDetails, costEstimate, and timeline
    console.log({
      jobListingId: job.id,
      freelancerId: 1, // Replace with the freelancer ID from the user context or props
      projectDetails,
      costEstimate,
      timeline,
    });
    onClose(); // Close the proposal form after submitting
  };

  return (
    <div>
      <h3>Submit Proposal for {job.title}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Details:</label>
          <input
            type="text"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cost Estimate:</label>
          <input
            type="text"
            value={costEstimate}
            onChange={(e) => setCostEstimate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Timeline:</label>
          <input type="text" value={timeline} onChange={(e) => setTimeline(e.target.value)} required />
        </div>
        <button type="submit">Submit Proposal</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}
