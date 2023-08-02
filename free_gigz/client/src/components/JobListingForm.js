import React, { useState } from "react";
import "./jobListingForm.css"; // Import the CSS file
import NavbarComponent from "./NavbarComponent";

export default function JobListingForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newJobListing = {
      title,
      description,
      budget,
      deadline,
    };

    fetch("/job_listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJobListing),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful submission, e.g., show a success message or redirect to another page
        console.log("Job listing posted successfully:", data);
      })
      .catch((error) => {
        // Handle error, e.g., show an error message to the user
        console.error("Error posting job listing:", error);
      });
  }

  return (
    <div>
      {/* Render the NavbarComponent */}
      <NavbarComponent />

      <div className="form-container">
        <h2>Create Job Listing</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget:</label>
            <input
              type="text"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">Create Job Listing</button>
        </form>
      </div>
    </div>
  );
}
