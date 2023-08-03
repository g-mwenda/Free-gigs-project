import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Footer from "./Footer";
import loginstyles from "../styles/loginstyles.css";
import NavbarComponent from "./NavbarComponent";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    setPassword("");
    setUsername("");
    navigate("/home");
  };

  return (
    <div>
      <NavbarComponent />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", backgroundColor: "rgb(224, 180, 96)" }}>
          {/* Login Image on the left */}
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <img
              src="https://i.pinimg.com/564x/ba/1a/bb/ba1abb24f4824afd088127dbc1236329.jpg" // Replace with the URL of your login image
              alt="Login Image"
              style={{ width: "90%", height: "65vh" }}
            />
          </div>
          {/* Login form on the right */}
          <div style={{ flex: 1.2 }}>
            <form className="form-formatting mb-5" onSubmit={handleSubmit}>
              <h1 className="page-header" class="h1">Login</h1>
              {/* ... Login form fields ... */}
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
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="text-left m-3">
                <button className="btn btn-primary mb-0 fs-4" type="submit">
                  Submit
                </button>
              </div>
              <div className="text-left">
                <h5>
                  <span>Don't Have an Account?</span>
                </h5>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
