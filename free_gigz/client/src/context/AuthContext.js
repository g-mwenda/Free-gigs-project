import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setonChange] = useState(false);
  const [current_user, setCurrentUser] = useState();

  const login = (username, password) => {
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          // Show success message for successful login
          Swal.fire("Success", response.success, "success");
          nav("/home");
          setonChange(!onChange);
        } 
        else {
          // If neither success nor error, show a generic error message
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };
  

  const signup = (username, email, role, password) => {
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, role, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          nav("/login");
          Swal.fire("Success", response.success, "success");
          setonChange(!onChange);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        setCurrentUser(null);
        setonChange(!onChange);
        nav("/");
        
      });
  };

  useEffect(() => {
    fetch("/me", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCurrentUser(data);
        }
      });
  }, [onChange]);

  const contextData = {
    login,
    signup,
    logout,
    current_user,
  };

  return (
    <div>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}