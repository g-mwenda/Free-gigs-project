import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [current_user, setCurrentUser] = useState(null);
  const [onChange, setOnChange] = useState(false);
  const [users, setUsers] = useState([]);

  const login = (username, password) => {
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          Swal.fire("Success", response.success, "success");
          nav("/home");
          setOnChange(!onChange);
        } else {
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
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          Swal.fire("Success", response.success, "success");
          nav("/login");
          setOnChange(!onChange);
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
        setOnChange(!onChange);
        nav("/login");
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

  useEffect(() => {
    fetch("/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data) {
        //   setUsers(data);
        // }
        if (data) {
          // Transform the received data to match the expected structure
          const transformedUsers = data.map((user) => ({
            id: user.id,
            username: user.username,
          }));
          setUsers(transformedUsers);
        }
      });
  }, []);

  const contextData = {
    login,
    signup,
    logout,
    current_user,
    users,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}
