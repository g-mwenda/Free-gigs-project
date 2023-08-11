
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ProposalsForm from "./ProposalsForm";
import NavbarComponent from "./NavbarComponent";
import JobListingItem from "./JobListingItem"; // Import the JobListingItem component
import { AuthContext } from "../context/AuthContext";
import joblistingcard from "../styles/joblistingcard.css";
import { Link } from "react-router-dom";

export default function JobListing() {
  const [jobListings, setJobListings] = useState([]);
  const [proposalData, setProposalData] = useState({});
  const { current_user } = useContext(AuthContext);

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
      <div className="row">
        {jobListings.map((job) => (
          <div key={job.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <JobListingItem job={job} /> {/* Pass the 'job' prop here */}
          </div>
        ))}
      </div>
    </div>
  );
}
