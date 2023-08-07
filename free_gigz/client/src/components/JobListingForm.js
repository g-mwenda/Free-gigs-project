import React, { useState } from "react";
import "./jobListingForm.css"; // Import the CSS file
import NavbarComponent from "./NavbarComponent";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import swal from "sweetalert2"; // Import SweetAlert

export default function JobListingForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const { current_user } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    // Check if the user object is available and has the 'id' property
    if (current_user && current_user.role === 'client') {
      const newJobListing = {
        // client_id: current_user.id,
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
<<<<<<< HEAD
          // Handle successful submission, e.g., show a success message or redirect to another page
=======
          // Handle successful submission
          setTitle("");
          setDescription("");
          setBudget("");
          setDeadline("");

          // Show success message using SweetAlert
          swal("Success!", "Job listing posted successfully", "success");
>>>>>>> a40f0269260182a3c9c923afe43f7dc6159fa28a
          console.log("Job listing posted successfully:", data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error posting job listing:", error);

          // Show error message using SweetAlert
          swal("Error!", "Failed to post job listing", "error");
        });
    }
  }

  return (
    <div>
      {current_user && current_user.role === "client" ? (
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

              <button type="submit" className="btn btn-primary">
                Create Job Listing
              </button>
            </form>
          </div>
        </div>
      ) : (
        <p>Not allowed to perform this operation</p>
      )}
    </div>
  );
}
