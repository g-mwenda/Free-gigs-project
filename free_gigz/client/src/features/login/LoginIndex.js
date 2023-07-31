import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

export default function LoginIndex({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-page-container">
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <div class="text-center">
            <h3>
              <span>Don't Have an Account?</span>
            </h3>
            <button
              class="btn btn-dark"
              onClick={() => setShowLogin(false)}
            >
              Signup
            </button>
          </div>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div class="text-center">
            <h3>
              <span>Already Have an Account?</span>
            </h3>
            <button
              class="btn btn-dark"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
}