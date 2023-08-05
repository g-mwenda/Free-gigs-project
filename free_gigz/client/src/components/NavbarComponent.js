import React, { useContext } from "react";
import "../assets/index.css";
import { AuthContext } from "../context/AuthContext";
import { Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png"; // Update the path based on your project structure

export default function NavbarComponent() {
  const { current_user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        background: "linear-gradient(to right, #F0F0F0, #D2B48C, #F0F0F0)",
      }}
    >
     <Link to="/">
        <img src={logo} height="100" width="100" alt="Logo" />
      </Link>
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
              {/* added link to proposals - Tom */}
              <li className="nav-item">
                <Link to="/jobproposals" className="nav-link">
                  Proposals
                </Link>
              </li>
            </>
          )}
          {current_user && current_user.role === "freelancer" && (
            <>
            <li className="nav-item">
              <Link to="/joblisting" className="nav-link">
                Job Listing
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/freelancerform" className="nav-link">
              Freelancer Reg
            </Link>
          </li>

              {/* added link to proposals - Tom */}
              <li className="nav-item">
                <Link to="/jobproposals" className="nav-link">
                  Proposals
                </Link>
              </li>
            </>
          )}
        </ul>
      </Navbar.Collapse>
      <div className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          {/* Conditionally render the buttons based on the current path */}
          {current_user && location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/" ? (
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
