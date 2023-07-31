import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm({ onLogin, setIsSignUp }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        role,
        password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Signup failed");
        }
      })
      .then((user) => {
        onLogin(user);
      })
      .catch((error) => {
        console.error("Signup Error:", error);
        // Handle error, e.g., show an error message to the user
      });
  }

  return (
    <>
      <h1 className="page-header">Sign Up Now</h1>
      <form className="form-formatting mb-5" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingEmail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <label htmlFor="floatingEmail">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingRole"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="role"
          />
          <label htmlFor="floatingRole">Role</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="text-center m-3">
          <button
            className="btn btn-success mb-0 fs-4"
            type="submit"
            onClick={handleLogin}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
