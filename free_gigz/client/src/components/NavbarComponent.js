import React from "react";
import "../assets/index.css";
import { useSystemMode, useSystemModeUpdate } from "../SystemModeContext";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent({ onLogoutClick }) {
  const systemMode = useSystemMode();
  const toggleSystemMode = useSystemModeUpdate();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/postings" className="nav-link">
              Postings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Landing Page
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/conversations" className="nav-link">
              Conversations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
      <div className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <button
            className={`btn me-3 navbar-colors-${systemMode.toLowerCase()}`}
            type="button"
            onClick={toggleSystemMode}
          >
            Switch to {systemMode === "Freelancer" ? "Buying" : "Freelancing"}
          </button>
          <button
            className="btn btn-outline-danger btn-outline-secondary"
            type="button"
            onClick={() => onLogoutClick()}
          >
            Logout
          </button>
        </form>
      </div>
    </Navbar>
  );
}
