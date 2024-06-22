import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <p>{message}</p>
      <button className="closeButton" onClick={onClose}>
        <i className="fa-solid fa-times"></i>
      </button>
    </div>
  );
}

function Login() {
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShowEmptyFieldError(true);
      return;
    }

    setIsLoading(true);
    axios
      .post("http://localhost:9000/login", { email, password })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("auth-token", token);
        navigate("/");
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
      setShowEmptyFieldError(true);
      return;
    }

    setIsLoading(true);
    axios
      .post("http://localhost:9000/signup", { email, password, username })
      .then((response) => {
        console.log("Signup Success: ", response.data);
        setState("Login");
        setUsername("");
        setPassword("");
        setIsSubmitted(true);
        // Optionally, you can auto-login the user after signup
        handleLogin(e);
      })
      .catch((error) => {
        setError("Signup failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const closePopup = () => {
    setError("");
    setShowEmptyFieldError(false);
  };

  return (
    <div className="loginContainer">
      <h2>{state}</h2>

      {state === "Sign Up" && (
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name"
        />
      )}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button
        onClick={state === "Sign Up" ? handleSignup : handleLogin}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Continue"}
      </button>

      {showEmptyFieldError && (
        <Popup
          message="Please fill in all fields."
          onClose={() => setShowEmptyFieldError(false)}
        />
      )}

      {error && isSubmitted && (
        <Popup message={error} onClose={closePopup} />
      )}

      {state === "Sign Up" ? (
        <p>
          Already have an account?{" "}
          <span onClick={() => setState("Login")}>Login</span>
        </p>
      ) : (
        <p>
          Create an account?{" "}
          <span onClick={() => setState("Sign Up")}>Click here</span>
        </p>
      )}

      <div>
        <input type="checkbox" />
        <p>By continuing, I agree to the terms of use & privacy policy</p>
      </div>
    </div>
  );
}

export default Login;
