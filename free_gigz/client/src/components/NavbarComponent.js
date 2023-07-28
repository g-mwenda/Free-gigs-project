import React from "react";
import "../assets/index.css";
import { useSystemMode, useSystemModeUpdate } from "../SystemModeContext";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarComponent({ onLogoutClick }) {
  const systemMode = useSystemMode();
  const toggleSystemMode = useSystemModeUpdate();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/pages/postings">
            <Nav.Link>Postings</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/pages/search">
            <Nav.Link>Search</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/pages/conversations">
            <Nav.Link>Conversations</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/pages/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/pages/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      <div class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">
          <button
            class={`btn me-3 navbar-colors-${systemMode.toLowerCase()}`}
            type="button"
            onClick={toggleSystemMode}
          >
            Switch to {systemMode === "Freelancer" ? "Buying" : "Freelancing"}
          </button>
          <button
            class="btn btn-outline-danger btn-outline-secondary"
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
