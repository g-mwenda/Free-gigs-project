import React, { useState, useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function ClientForm() {
  const [company_name, setCompanyName] = useState("");
  const [company_info, setCompanyInfo] = useState("");
  const [profile_picture, setProfilePicture] = useState(""); // Changed to an empty string for URL input
  const { current_user } = useContext(AuthContext);
  // Access the user context using the useUser hook
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user object is available and has the 'id' property
    if (current_user && current_user.role == "client") {
      // Create a FormData object to send the form data
      const formData = new FormData();
      formData.append("user_id", current_user.id);
      formData.append("company_name", company_name);
      formData.append("company_info", company_info);
      formData.append("profile_picture", profile_picture);

      // Make the POST request to your backend endpoint
      fetch("/clients", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server, e.g., show a success message
          console.log("Profile created successfully:", data);

          // Reset the form fields after successful submission
          setCompanyName("");
          setCompanyInfo("");
          setProfilePicture("");

          // Redirect to the completed form page after successful submission
          navigate("/completed-form");
        })
        .catch((error) => {
          // Handle error, e.g., show an error message to the user
          console.error("Error creating profile:", error);
        });
    } else {
      // Handle the case when the user object is null or doesn't have the 'id' property
      console.error("User is not a client. Cannot submit profile.");
    }
  };

  return (
    <div>
      <h2>Create Client</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company_name">Company Name:</label>
          <input
            type="text"
            id="company_name"
            value={company_name}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="company_info">Company Info:</label>
          <textarea
            id="company_info"
            value={company_info}
            onChange={(e) => setCompanyInfo(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="profile_picture">Profile Picture URL:</label>
          <input
            type="text" // Changed input type to "text"
            id="profile_picture"
            value={profile_picture}
            onChange={(e) => setProfilePicture(e.target.value)} // Updated to set URL as a string
            required
          />
        </div>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
