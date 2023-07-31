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

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

function App() {
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
            </Routes>
          </div>
        </SystemModeProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
