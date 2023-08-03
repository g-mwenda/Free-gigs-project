import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ProposalsForm from "./ProposalsForm";
import NavbarComponent from "./NavbarComponent";
import JobListingItem from "./JobListingItem"; // Import the JobListingItem component
import { AuthContext } from "../context/AuthContext";
import joblistingcard from "../styles/joblistingcard.css"

export default function JobListing() {
  const [jobListings, setJobListings] = useState([]);
  const [proposalData, setProposalData] = useState({}); // Add proposalData state
  const { current_user } = useContext(AuthContext); // Access the user context using the useUser hook

  
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
            <div className="card mb-4">
              {/* Card image */}
              <div className="card-info">
                <div className="card-avatar"></div>
                <div className="card-title">{job.title}</div>
                <div className="card-subtitle">{job.description}</div>
                <div className="card-subtitle">Client: {job.client.name}</div>
              </div>
  
              {/* Card content */}
              <ul className="card-social">
                <li className="card-social__item">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* ... Facebook SVG Path ... */}
                  </svg>
                </li>
                <li className="card-social__item">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* ... Twitter SVG Path ... */}
                  </svg>
                </li>
                <li className="card-social__item">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* ... Google+ SVG Path ... */}
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
       }  