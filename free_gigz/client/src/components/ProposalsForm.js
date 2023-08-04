import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProposalsForm({ job }) {
  const [projectDetails, setProjectDetails] = useState("");
  const [costEstimate, setCostEstimate] = useState("");
  const [timeline, setTimeline] = useState("");
  const { current_user } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (current_user && current_user.role === "freelancer") {
      const proposal = {
        // freelancer_id: current_user.id,
        job_listing_id: job ? job.id : null, // Set job_listing_id to null if job prop is not provided
        project_details: projectDetails, // Updated to use underscore instead of camelCase
        cost_estimate: costEstimate, // Updated to use underscore instead of camelCase
        timeline,
      };

      fetch("proposals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proposal),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Proposal created successfully:", data);
        })
        .catch((error) => {
          console.log("Error creating proposal");
        });
    }
  }

  return (
    <div>
      {current_user && current_user.role === "freelancer" ? (
        <div>
          <h3>Submit Proposal for {job && job.title}</h3>
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
                type="number"
                value={costEstimate}
                onChange={(e) => setCostEstimate(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Timeline:</label>
              <input
                type="number"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit Proposal</button>
            <button type="button">Cancel</button>
          </form>
        </div>
      ) : (
        <p>Not allowed to perform this operation</p>
      )}
    </div>
  );
}
