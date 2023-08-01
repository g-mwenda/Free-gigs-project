import React, { useState, useEffect } from "react";
import ProposalsForm from "./ProposalsForm";

export default function JobListing() {
  const [jobListings, setJobListings] = useState([]);
  const [showProposalsForm, setShowProposalsForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch("/job_listings")
      .then((response) => response.json())
      .then((data) => setJobListings(data))
      .catch((error) => console.error("Error fetching job listings:", error));
  }, []);

  const handleProposalSubmit = (proposalData) => {
    // Here you can submit the proposalData to the server
    console.log("Proposal Data:", proposalData);

    // Close the proposal form after submitting
    setShowProposalsForm(false);
    setSelectedJob(null);
  };

  const handleBidClick = (job) => {
    setShowProposalsForm(true);
    setSelectedJob(job);
  };

  return (
    <div>
      <h2>Job Listings</h2>
      {jobListings.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>Description: {job.description}</p>
          <p>Budget: {job.budget}</p>
          <p>Deadline: {job.deadline}</p>
          <button onClick={() => handleBidClick(job)}>Bid</button>
        </div>
      ))}

      {showProposalsForm && (
        <ProposalsForm
          job={selectedJob}
          onClose={() => setShowProposalsForm(false)}
          onProposalSubmit={handleProposalSubmit}
        />
      )}
    </div>
  );
}
