import React, { useState, useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import clientform from "../styles/clientform.css";
import NavbarComponent from "./NavbarComponent";
import Swal from "sweetalert2";


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
    if (current_user && current_user.role === "client") {
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
          Swal.fire("Success", "Profile created successfully", "success");

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
          Swal.fire("Success", "Error creating profile", "success");
        });
    } else {
      // Handle the case when the user object is null or doesn't have the 'id' property
      console.error("User is not a client. Cannot submit profile.");
      Swal.fire("Error", "User is not a client. Cannot submit profile.", "error");
    }
  };

  return (
    <div>
      <NavbarComponent />
      <form className="form_main" onSubmit={handleSubmit}>
      <p class="heading">Client registration</p>
      <div class="inputContainer">
        <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="inputIcon">
          <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
        </svg>
        <input
          placeholder="Company Name"
          id="company_name"
          class="inputField"
          type="text"
          value={company_name}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>
  
      <div class="inputContainer">
        <textarea
          placeholder="Company Info"
          id="company_info"
          class="inputField"
          value={company_info}
          onChange={(e) => setCompanyInfo(e.target.value)}
          required
        />
      </div>
  
      <div class="inputContainer">
        <label for="profile_picture" class="inputIcon">Profile Picture URL:</label>
        <input
          type="text" // Changed input type to "text"
          id="profile_picture"
          value={profile_picture}
          class="inputField"
          onChange={(e) => setProfilePicture(e.target.value)} // Updated to set URL as a string
          required
        />
      </div>
  
      <button id="button" type="submit">Save Profile</button>
    </form>
    </div>
  );
}
