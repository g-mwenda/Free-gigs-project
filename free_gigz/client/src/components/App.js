import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import SignUpForm from "./SignUpForm";
import Home from "./Home";
import PostingForm from "./PostingForm";
import { SystemModeProvider } from "../SystemModeContext";
import LandingPage from "./LandingPage";
import JobListing from "./JobListing";
import JobListingForm from "./JobListingForm";
import JobListingItem from "./JobListingItem";
import CompletedForm from "./CompletedForm";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

function App() {

  const [listings, setListings] = useState([]);

  const handleJobSubmit = (newListing) => {
    // Update the job listings state with the new job listing
    setListings([...listings, newListing]);
  };
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUser(userData);
  };

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    navigate("/login");
  }

  // if (user === null) return <LandingPage />;

  return (
    <>
      <UserContext.Provider value={user}>
        <SystemModeProvider>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/home" element={<Home user={user} />} />
              <Route exact path="/postings" element={<PostingForm />} />
              {/* Remove / path from SignUpForm */}
              <Route path="/signup" element={<SignUpForm />} />
              <Route exact path="/joblistingform" element={<JobListingForm />} />
              <Route exact path="/joblisting" element={<JobListing />} />
              <Route exact path="/joblisting_item" element={<JobListingItem />} />
              <Route path="/completedform" element={<CompletedForm />} />
             
            </Routes>
          </div>
        </SystemModeProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
