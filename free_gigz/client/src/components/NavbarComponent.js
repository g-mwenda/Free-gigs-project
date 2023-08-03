import React, { useContext } from "react";
import "../assets/index.css";
import { AuthContext } from "../context/AuthContext";
import { Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const { current_user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav mr-auto">
          {current_user && current_user.role === "client" && (
            <>
              <li className="nav-item">
                <Link to="/joblisting" className="nav-link">
                  Job Listing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/joblistingform" className="nav-link">
                  Job Listing Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/freelancers" className="nav-link">
                  Freelancers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/client" className="nav-link">
                  Client registration form
                </Link>
              </li>
            </>
          )}
          {current_user && current_user.role === "freelancer" && (
            <li className="nav-item">
              <Link to="/joblisting" className="nav-link">
                Job Listing
              </Link>
            </li>
          )}
        </ul>
      </Navbar.Collapse>
      <div className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          {/* Conditionally render the buttons based on the current path */}
          {current_user && location.pathname !== "/login" && location.pathname !== "/signup" ? (
            <>
              <Link to="/" className="btn btn-success me-3">
                Landing Page
              </Link>
              <Link to="/me" className="btn btn-success me-3">
                Profile
              </Link>
              <button
                className="btn btn-outline-danger btn-outline-secondary"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary me-3">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </form>
      </div>
    </Navbar>
  );
}
