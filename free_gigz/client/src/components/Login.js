import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  function handleSignUpClick() {
    navigate("/signup");
  }
  

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/home"); // Redirect to home page on successful login
      } else {
        console.log("Failed Login");
      }
    });
  }

  return (
    <>
      {showLogin ? (
        <>
          <h1 className="page-header">Login Now</h1>
          <form className="form-formatting mb-5" onSubmit={handleSubmit}>
          <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingUsername"
            name="username"
            value={username}
            onChange={(e) => {
              
              setUsername(e.target.value);
            }}
            placeholder="username"
          />
          <label for="floatingUsername">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              
              setPassword(e.target.value);
            }}          />
          <label for="floatingPassword">Password</label>
        </div>
            {/* ... Login form fields ... */}
            <div class="text-center m-3">
              <button className="btn btn-primary mb-0 fs-4" type="submit">
                Submit
              </button>
            </div>
            <div class="text-center">
              <h3>
                <span>Don't Have an Account?</span>
              </h3>
              <button className="btn btn-dark" onClick={() => setShowLogin(false)}>
                Signup
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div class="text-center">
            <h3>
              <span>Already Have an Account?</span>
            </h3>
            <button className="btn btn-dark" onClick={() => setShowLogin(true)}>
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
}
