
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Swal from "sweetalert2";
// import freelancerform from "../styles/freelancerform.css";

export default function FreelancerForm() {
  const [name, setName] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [skills, setSkills] = useState("");
  const [profile_picture, setProfilePicture] = useState("");
  const { current_user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (current_user && current_user.role === "freelancer") {
      const formData = new FormData();
      formData.append("user_id", current_user.id);
      formData.append("name", name);
      formData.append("portfolio", portfolio);
      formData.append("skills", skills);
      formData.append("profile_picture", profile_picture);

      fetch("/freelancers", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Profile created successfully:", data);
          setName("");
          setPortfolio("");
          setSkills("");
          setProfilePicture("");
          navigate("/joblisting");
          Swal.fire("Success", "Profile created successfully", "success");
        })
        .catch((error) => {
          console.error("Error creating profile:", error);
        });
    } else {
      console.error("User is not a freelancer. Cannot submit profile.");
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div>
        <>
        <form className="form_main" onSubmit={handleSubmit}>
          <p className="heading">Freelancer registration</p>
          <div className="inputContainer">
            <svg
              viewBox="0 0 16 16"
              fill="#2e2e2e"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="inputIcon"
            >
              <path d="..."></path>
            </svg>
            <input
              placeholder="Name"
              id="name"
              className="inputField"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="inputContainer">
            <textarea
              placeholder="Portfolio"
              id="portfolio"
              className="inputField"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              required
            />
          </div>

          <div className="inputContainer">
            <textarea
              placeholder="Skills"
              id="skills"
              className="inputField"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="profile_picture" className="inputIcon">
              Profile Picture URL:
            </label>
            <input
              type="text"
              id="profile_picture"
              value={profile_picture}
              className="inputField"
              onChange={(e) => setProfilePicture(e.target.value)}
              required
            />
          </div>

          <button id="button" type="submit">
            Save Profile
          </button>
        </form>
        </>
      </div>
    </div>
  );
}
