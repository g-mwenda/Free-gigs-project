import React, { useState } from "react";
import ProposalsForm from "./ProposalsForm";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function JobListingItem({ job }) {
  const [showProposalsForm, setShowProposalsForm] = useState(false);
  const [showCompletedForm, setShowCompletedForm] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleBidClick = () => {
    setShowProposalsForm(true);
  };

  const handleCompletedClick = () => {
    // Handle the submission of the completed job listing to the backend here
    // You can make a POST request to add the job listing to the completed projects table
    // For demonstration purposes, let's just log a message to the console
    console.log("Job Listing Completed:", job);

    // Redirect to the completed form page
    navigate("/completedform");

    // Set showCompletedForm to true if you want to show the CompletedForm component here
    setShowCompletedForm(true);
  };

  return (
    <div>
      <h3>{job.title}</h3>
      <p>Description: {job.description}</p>
      <p>Budget: {job.budget}</p>
      <p>Deadline: {job.deadline}</p>
      <button onClick={handleBidClick}>Bid</button>
      <button onClick={handleCompletedClick}>Completed</button>
      {showProposalsForm && <ProposalsForm job={job} onClose={() => setShowProposalsForm(false)} />}
    </div>
  );
}
