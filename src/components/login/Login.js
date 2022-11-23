import React, { useState, useContext } from "react";
import { AuthContext } from "../../authContext";
import "./login.css";

function Login() {
  const auth = useContext(AuthContext);

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

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailStatus(false);
      const emailInput = document.querySelector(".login-form-input");
      emailInput.style.border = "1px solid #FF333380";
      return;
    } else {
      setEmailStatus(true);
      const emailInput = document.querySelector(".login-form-input");
      emailInput.style.removeProperty("border");
    }

    if (password.length <= 6) {
      setPasswordStatus(false);
      const [emailInput, passwordInput] =
        document.querySelectorAll(".login-form-input");
      emailInput.style.border = "1px solid #FF333380";
      passwordInput.style.border = "1px solid #FF333380";
      return;
    }

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
        const passwordInput = document.querySelectorAll(".login-form-input")[1];
        passwordInput.style.removeProperty("border");
        // save the auth token and
        auth.dispatch({ type: "LOGGEDIN" });
        localStorage.setItem("token", userDetails.data.token);
        // implement toasters
        // redirect
        // history.push("/");
      } else {
        setPasswordStatus(false);
        const [emailInput, passwordInput] =
          document.querySelectorAll(".login-form-input");
        emailInput.style.border = "1px solid #FF333380";
        passwordInput.style.border = "1px solid #FF333380";
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
              id="exampleInputEmail1 emailInput"
              placeholder="Enter you email"
              aria-describedby="emailHelp"
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            {!emailStatus && (
              <div id="invalid-feedback" className="form-text error-message">
                Please enter a valid email address
              </div>
            )}
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
              id="exampleInputPassword1 passwordInput"
              required
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
            {!passwordStatus && (
              <div id="invalid-feedback" className="form-text error-message">
                Incorrect email address or password.
              </div>
            )}
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
