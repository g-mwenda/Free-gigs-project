import React, { useState } from "react";
// import { json, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router"
import NavbarComponent from "./NavbarComponent";


export default function SignUpForm({ onLogin, setIsSignUp }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, email, password, role);
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
      .then((response) => response.json())
      .then((response) => {
        console.log(response.success);
        if (response.success) {
          return response.success;
          navigate("/login");
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
  // function handleLogin() {
  //   navigate("/login");
  // }

//   return (
//     <>
//       <h1 className="page-header">Sign Up Now</h1>
//       <form className="form-formatting mb-5" onSubmit={handleSubmit}>
//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             id="floatingUsername"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="username"
//           />
//           <label htmlFor="floatingUsername">Username</label>
//         </div>

//         <div className="form-floating mb-3">
//           <input
//             type="text"
//             className="form-control"
//             id="floatingEmail"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="email"
//           />
//           <label htmlFor="floatingEmail">Email</label>
//         </div>

//         <div className="form-floating mb-3 dropdown">
//           <select
//             className="form-select"
//             id="floatingRole"
//             name="role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="">Select Role</option>
//             <option value="freelancer">Freelancer</option>
//             <option value="client">client</option>
//             {/* Add more role options as needed */}
//           </select>
//           <label htmlFor="floatingRole">Role</label>
//         </div>

//         <div className="form-floating mb-3">
//           <input
//             type="password"
//             className="form-control"
//             id="floatingPassword"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="password"
//           />
//           <label htmlFor="floatingPassword">Password</label>
//         </div>

//         <div className="text-center m-3">
//           <button
//             className="btn btn-primary mb-0 fs-4"
//             type="submit"
//             onClick={handleSubmit}
//           >
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }
return (
  <div>
    <NavbarComponent/>
  <div style={{ display: "flex" }}>
    {/* Image on the left */}
    <div style={{ flex: 1 }}>
      <img
        src="https://i.pinimg.com/564x/d9/9d/08/d99d08413c4d293f7a9f55d2cd9a2782.jpg" // Replace with the URL of your signup image
        alt="Signup Image"
        style={{ width: "80%", height: "70vh" }}
      />
    </div>

    {/* SignUp form on the right */}
    <form className="form-formatting mb-5" onSubmit={handleSubmit} style={{ flex: 1, backgroundColor: "#D2B48C" }}>
    <h1 className="page-header" style={{ textAlign: "left" }}>Sign Up</h1>
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

      <div className="form-floating mb-3 dropdown">
        <select
          className="form-select"
          id="floatingRole"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="freelancer">Freelancer</option>
          <option value="client">client</option>
          {/* Add more role options as needed */}
        </select>
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

      <div className="text-left m-3">
        <button
          className="btn btn-primary mb-0 fs-4"
          type="submit"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
  </div>
);
}
