import React, { useState, useEffect } from "react";
import ProposalsForm from "./ProposalsForm";
import { useUser } from "./App"; // Update the path accordingly
import NavbarComponent from "./NavbarComponent";
import JobListingItem from "./JobListingItem"; // Import the JobListingItem component

export default function JobListing() {
  const [jobListings, setJobListings] = useState([]);
  const [proposalData, setProposalData] = useState({}); // Add proposalData state
  const user = useUser(); // Access the user context using the useUser hook

  useEffect(() => {
    fetch("/job_listings")
      .then((response) => response.json())
      .then((data) => setJobListings(data))
      .catch((error) => console.error("Error fetching job listings:", error));
  }, []);

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    // Do something with the proposalData, like sending it to the server
    console.log("Proposal Form Data:", proposalData);
  };

  return (
    <div className="container mt-5">
      <NavbarComponent />
      <h2 className="mb-4">Job Listings</h2>
      {jobListings.map((job) => (
        <JobListingItem key={job.id} job={job} />
      ))}
    </div>
  );
}
