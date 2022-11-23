import React, { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailStatus, setEmailStatus] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState(true);

  const handleEmailChange = (e) => {
    var updatedEmail = e.target.value;
    setEmail(updatedEmail);
  };

  const handlePasswordChange = (e) => {
    var updatedPassword = e.target.value;
    setPassword(updatedPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };

    try {
        const res = await fetch(
            "https://jobs-api.squareboat.info/api/v1/auth/login",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(loginDetails),
            }
          );
      
          const userDetails = await res.json();
          console.log(userDetails);

        if (userDetails.success) {

        } else {

        }

    } catch (error) {
        console.log(error.message);
    }
  };

  return (
    <div className="login">
      <div className="compartment-1"></div>
      <div className="compartment-2"></div>
      <div className="login-form">
        <form>
          <div className="mb-3">
            <h3>Login</h3>
            <label
              htmlFor="exampleInputEmail1"
              className="form-label login-form-subheading"
            >
              Email address
            </label>
            <input
              type="email"
              value={email}
              className="form-control login-form-input"
              id="exampleInputEmail1"
              placeholder="Enter you email"
              aria-describedby="emailHelp"
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            {emailStatus && <div id="emailHelp" className="form-text error-message">
              We'll never share your email with anyone else.
            </div>}
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label login-form-subheading"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              className="form-control login-form-input"
              placeholder="Enter you password"
              id="exampleInputPassword1"
              required
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary login-btn"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
