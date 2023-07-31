import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm({ onLogin, setIsSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

    function handleLogin(){
      navigate("/login")
    }

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        console.log("Fail")
      }
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
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPasswordConfirmation"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="confirm password"
          />
          <label htmlFor="floatingPasswordConfirmation">Confirm Password</label>
        </div>
        <div className="text-center m-3">
          <button className="btn btn-success mb-0 fs-4" type="submit"
          onClick = {handleLogin}>
            Sign Up
          </button>
        </div>
        
      </form>
    </>
  );
}