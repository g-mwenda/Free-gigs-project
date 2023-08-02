// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SignUpForm from "./SignUpForm";
// import Footer from "./Footer";
// import "../styles/Login.css";


// export default function Login({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showLogin, setShowLogin] = useState(true);
//   const navigate = useNavigate();

//   function handleSignUpClick() {
//     navigate("/signup");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => onLogin(user));
//         navigate("/home"); // Redirect to the home page on successful login
//       } else {
//         console.log("Failed Login");
//       }
//     });
//   }

//   return (
//     <div>
//     <>
//       {showLogin ? (
//         <>

// <div style={{ display: "flex", backgroundColor: "rgb(224, 180, 96)" }}>
//             {/* Login Image on the left */}
//             <div style={{ flex: 1, marginRight: "-90px" }}>
//               <img
//                 src="https://i.pinimg.com/564x/ba/1a/bb/ba1abb24f4824afd088127dbc1236329.jpg" // Replace with the URL of your login image
//                 alt="Login Image"
//                 style={{ width: "80%", height: "80vh" }}
//               />
//             </div>
//             {/* Login form on the right */}
//             <div style={{ flex: 1.2 }}>
//               <form className="form-formatting mb-5" onSubmit={handleSubmit}>
//               <h1 className="page-header">Login</h1>

//                 {/* ... Login form fields ... */}
//                 <div className="form-floating mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingUsername"
//                     name="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="username"
//                   />
//                   <label htmlFor="floatingUsername">Username</label>
//                 </div>
//                 <div className="form-floating">
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="floatingPassword"
//                     name="password"
//                     placeholder="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <label htmlFor="floatingPassword">Password</label>
//                 </div>
//                 <div className="text-center m-3">
//                   <button className="btn btn-primary mb-0 fs-4" type="submit">
//                     Submit
//                   </button>
//                 </div>
//                 <div className="text-center">
//                   <h5>
//                     <span>Don't Have an Account?</span>
//                   </h5>
//                   <button className="btn btn-danger" onClick={() => setShowLogin(false)}>
//                     Signup
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </>
//       ) : (
//                 <>
//                   <SignUpForm onLogin={onLogin} />
//                   <div class="text-center">
//                     <h3>
//                       <span>Already Have an Account?</span>
//                     </h3>
//                     <button className="btn btn-dark" onClick={() => setShowLogin(true)}>
//                       Login
//                     </button>
//                   </div>
//                 </>
//               )}
//             </>
//             <Footer/>
//             </div>
//           );
//         }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Footer from "./Footer";
import "../styles/Login.css";

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
        navigate("/home"); // Redirect to the home page on successful login
      } else {
        console.log("Failed Login");
      }
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <>
        {showLogin ? (
          <>
            <div style={{ display: "flex", backgroundColor: "rgb(224, 180, 96)" }}>
              {/* Login Image on the left */}
              <div style={{ flex: 1, marginLeft: "10px" }}>
                <img
                  src="https://i.pinimg.com/564x/ba/1a/bb/ba1abb24f4824afd088127dbc1236329.jpg" // Replace with the URL of your login image
                  alt="Login Image"
                  style={{ width: "90%", height: "90vh" }}
                />
              </div>
              {/* Login form on the right */}
              <div style={{ flex: 1.2 }}>
                <form className="form-formatting mb-5" onSubmit={handleSubmit}>
                  <h1 className="page-header"class="h1">Login</h1>
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
                    <button className="btn btn-danger" onClick={() => setShowLogin(false)}>
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <div className="text-left"class="h2">
              <h4>
                <span>Already Have an Account?</span>
              </h4>
             <button className="btn btn-danger" onClick={() => setShowLogin(true)}>
                Login
              </button>
            </div>
          </>
        )}
      </>
      <Footer />
    </div>
  );
}
