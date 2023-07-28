import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../pages/Login";
import Postings from "../pages/Postings";
import Search from "../pages/Search";
import Projects from "../pages/Projects";
import Conversations from "../pages/Conversations";
import Profile from "../pages/Profile";
import ScrollButton from "./ScrollToTop";
import NavbarComponent from "./NavbarComponent";
import { SystemModeProvider } from "../SystemModeContext";
import Home from "../pages/Home";

/**
 * App Hierarchy
 *
 * App
 * ├─── Postings
 *      ├─── Freelancer Postings
 *           ├─── Posting
 *           ├─── Posting
 *           └─── Posting
 *      └─── Buyer Postings
 *           ├─── Posting
 *           ├─── Posting
 *           └─── Posting
 * ├─── Search
 *      ├─── User
 *      ├─── User
 *      └─── User
 * ├─── Conversations
 *      ├─── Conversation
 *           ├─── Message
 *           ├─── Message
 *           └─── Message
 *      ├─── Conversation
 *      └─── Conversation
 * ├─── Projects
 *      ├─── Project Form
 *      └─── List List
 *           ├─── Project
 *           ├─── Project
 *           └─── Project
 * └─── Profile
 *
 */

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

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
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <UserContext.Provider value={user}>
        <SystemModeProvider>
          <NavbarComponent onLogoutClick={handleLogout} />
          <div className="App">
            <Routes>
              <Route exact path="/pages/postings" element={<Postings />} />
              <Route exact path="/pages/search" element={<Search />} />
              <Route
                exact
                path="/pages/conversations"
                element={<Conversations />}
              />
              <Route exact path="/pages/projects" element={<Projects />} />
              <Route
                exact
                path="/pages/profile"
                element={<Profile onDelete={handleLogout} />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
            <ScrollButton />
          </div>
        </SystemModeProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
