import React, { useState } from "react";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../store/userSlice";

function SignIn() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("testtest");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignIn = (e) => {
    e.preventDefault();

    // Basic validation (you can customize this)
    if (!email || !password) {
      setError("(Please enter both email and password)");
      return;
    }
    if (
      localStorage.getItem(email) &&
      JSON.parse(localStorage.getItem(email)).password === password
    ) {
      dispatch(setIsLoggedIn(JSON.parse(localStorage.getItem(email))));
      navigate("/user");
    } else {
      setError("(Email or password is wrong)");
      return;
    }
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="signInContainer">
      <div className="signin">
        <div className="signIn">
          <h2>Sign In</h2>
        </div>
        <span style={{ color: "red" }}>{error}</span>
        <form className="signInForm" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {error && <span className="error">{error}</span>} */}
          <button type="submit">Sign In</button>
        </form>
        <div>
          Not yet Registered? <Link to="/user/signup">Sign Up</Link> Here
        </div>
      </div>
    </div>
  );
}

export default SignIn;
