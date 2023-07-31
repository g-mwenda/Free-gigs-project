import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "../../components/App";
import "./assets/profile.css";
import ChangeUsernameForm from "./components/ChangeUsernameForm";
import ChangePasswordForm from "./components/ChangePasswordForm";
import DeleteAccountForm from "./components/DeleteAccountForm";

export default function ProfileIndex({ onDelete }) {
  const user = useUser();

  const [userData, setUserData] = useState({
    username: user.username,
    password: "",
    passwordConfirmation: "",
  });

  const [usernameErrors, setUsernameErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [deleteAccountErrors, setDeleteAccountErrors] = useState([]);

  const successUsernameNotify = () =>
    toast.success("Username has been updated!");
  const successPasswordNotify = () =>
    toast.success("Password has been updated!");
  const successDeleteNotify = () =>
    toast.success("Your account has been deleted! You will now be logged out.");
  const failureNotify = () => toast.error("Account Not Updated (see errors)");

  function handleChange(e) {
    let name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  }

  function handleUsernameSubmit() {
    setUsernameErrors([]);

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
      }),
    }).then((r) => {
      if (r.ok) {
        successUsernameNotify();
        r.json().then((user) =>
          setUserData({
            ...userData,
            username: userData.username,
          })
        );
      } else {
        failureNotify();
        r.json().then((err) => setUsernameErrors(err.errors));
      }
    });
  }

  function handlePasswordSubmit() {
    setPasswordErrors([]);

    if (userData.password === "") {
      failureNotify();
      setPasswordErrors(["Password cannot be blank"]);
    } else {
      fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify({
          password: userData.password,
          password_confirmation: userData.passwordConfirmation,
        }),
      }).then((r) => {
        if (r.ok) {
          successPasswordNotify("Password has been updated!");
          setUserData({
            ...userData,
            password: "",
            passwordConfirmation: "",
          });
        } else {
          failureNotify();
          r.json().then((err) => setPasswordErrors(err.errors));
        }
      });
    }
  }

  function handleDeleteSubmit(deleteConfirmation) {
    setDeleteAccountErrors([]);
    if (deleteConfirmation.toLowerCase().trim() !== "delete") {
      failureNotify();
      setDeleteAccountErrors([
        "Please enter in 'Delete' into the text box and try again",
      ]);
    } else {
      fetch(`/users/${user.id}`, {
        method: "DELETE",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
      }).then((r) => {
        if (r.ok) {
          successDeleteNotify();
          fetch("/logout", {
            method: "DELETE",
          }).then((r) => {
            if (r.ok) {
              onDelete();
            }
          });
        } else {
          failureNotify();
          r.json().then((err) => setDeleteAccountErrors(err.errors));
        }
      });
    }
  }

  return (
    <>
      <Toaster />
      <h1 className="page-header">Profile</h1>
      {/* <ChangeUsernameForm
        username={userData.username}
        onSubmit={handleUsernameSubmit}
        onChange={handleChange}
        usernameErrors={usernameErrors}
      /> */}
      <ChangePasswordForm
        password={userData.password}
        passwordConfirmation={userData.passwordConfirmation}
        onSubmit={handlePasswordSubmit}
        onChange={handleChange}
        passwordErrors={passwordErrors}
      />
      <DeleteAccountForm
        onSubmit={handleDeleteSubmit}
        deleteAccountErrors={deleteAccountErrors}
      />
    </>
  );
}
