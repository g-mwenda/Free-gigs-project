import React, { useContext } from "react";
import NavbarComponent from "./NavbarComponent";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { current_user } = useContext(AuthContext);
    console.log(current_user)
  // Check if user is null or undefined
  if (!current_user || !current_user.username) {
    // Redirect the user to the login page or display a message
    return (
      <div>
        {/* <h1>Please log in to access the Home page.</h1> */}
        {/* You can add a redirect logic here or show a link to the login page */}
      </div>
    );
  }

  // Render the Home component content if the user is not null and has a valid username
  return (
    <div>
    <div className="text-center h-100 my-auto text-middle">
      <NavbarComponent />
      <h1 className="page-header mb-0">Welcome, {current_user.username}</h1>
      <h3>to the Free Gigs Freelancing Platform</h3>
      <h4 className="m-5 fst-normal">
        You can utilize this space as a platform to sell your skills, look for
        outside talent(s) to complete your projects, and explore the
        possibilities of the gig economy.
      </h4>
      <h4 className="fst-normal">Head over to the Postings page to get started!</h4>
      {/* <h5>Your Future Is In Your Hands</h5> */}
    </div>
    </div>
  );
}
