
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/proposalform.css"; // Import your CSS file correctly

export default function ProposalsForm({ job }) {
  const [projectDetails, setProjectDetails] = useState("");
  const [costEstimate, setCostEstimate] = useState("");
  const [timeline, setTimeline] = useState("");
  const { current_user } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (current_user && current_user.role === "freelancer") {
      const proposal = {
        freelancer_id: current_user.id,
        job_listing_id: job ? job.id : null,
        project_details: projectDetails,
        cost_estimate: costEstimate,
        timeline,
      };

      fetch("/proposals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proposal),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            Swal.fire("Success", "Bid successful", "success");
            console.log("Proposal created successfully:", data);
            navigate("/jobproposals");
          } else {
            Swal.fire("Error", "Something went wrong", "error");
            console.log("Error creating proposal");
          }
        })
        .catch((error) => {
          Swal.fire("Error", "Something went wrong", "error");
          console.log("Error creating proposal:", error);
        });
    }
  }

  return (
    <div>
      {current_user && current_user.role === "freelancer" ? (
        <div className="form-box proposalcard">
          <h4 className="form__title proposaltitle">
            Submit Proposal for {job && job.title}
          </h4>
          <form className="form proposal-form" onSubmit={handleSubmit}>
            <div className="form__container proposalfield">
              <label className="form__label">Project Details:</label>
              <input
                type="text"
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                required
                placeholder="Project Details"
                className="form__input proposalinput-field"
              />
            </div>
            <div className="form__container proposalfield">
              <label className="form__label">Cost Estimate:</label>
              <input
                type="number"
                value={costEstimate}
                onChange={(e) => setCostEstimate(e.target.value)}
                required
                placeholder="Cost Estimate"
                className="form__input proposalinput-field"
              />
            </div>
            <div className="form__container proposalfield">
              <label className="form__label">Timeline:</label>
              <input
                type="date"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                required
                placeholder="Timeline"
                className="form__input proposalinput-field"
              />
            </div>
            <button type="submit" className="form__button btn1">
              Submit Proposal
            </button>
            <button type="button" className="form__button btn1">
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <p>Not allowed to perform this operation</p>
      )}
    </div>
  );
}
