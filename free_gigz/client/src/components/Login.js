import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { AuthContext } from '../context/AuthContext'


export default function Login({ onLogin }) {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // function handleLogin() {
    //   // Navigate to the login page when "Get Started" is clicked

    //   navigate("/home");
    // }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      login(username, password);
      setPassword("")
      setUsername("")
      navigate("/home");
      
    };

  return (
    <>
      
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
            }}/>
          <label for="floatingPassword">Password</label>
        </div>
            {/* ... Login form fields ... */}
            <div class="text-center m-3">
              <button className="btn btn-primary mb-0 fs-4" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <div class="text-center">
              <h3>
                <span>Don't Have an Account?</span>
              </h3>
              <button className="btn btn-dark" type="submit">
                Signup
              </button>
            </div>
          </form>
        </>
      
        <>
          <SignUpForm onLogin={onLogin} />
          <div class="text-center">
            <h3>
              <span>Already Have an Account?</span>
            </h3>
            <button className="btn btn-dark" type="submit">
              Login
            </button>
          </div>
        </>
      
    </>
  );
}
