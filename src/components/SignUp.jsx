import React, { useEffect, useReducer, useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "../store/userSlice";

const initialFormState = {
  name: "",
  email: "",
  password: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

const initialErrorState = {
  nameError: "",
  emailError: "",
  passwordError: "",
};

function formErrorReducer(state, action) {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function SignUp() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [errorState, dispatchError] = useReducer(
    formErrorReducer,
    initialErrorState
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(true);

  const navigate = useNavigate();

  const dispatchUser = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    setIsError(false);
    dispatch({ type: "SET_FIELD", field: "name", value: name });
    dispatch({ type: "SET_FIELD", field: "email", value: email });
    dispatch({ type: "SET_FIELD", field: "password", value: password });

    if (!name) {
      setIsError(true);
      dispatchError({
        type: "SET_ERROR",
        field: "nameError",
        value: "Please enter a name.",
      });
    } else {
      dispatchError({ type: "SET_ERROR", field: "nameError", value: "" });
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setIsError(true);
      dispatchError({
        type: "SET_ERROR",
        field: "emailError",
        value: "Please enter a valid email address.",
      });
    } else {
      dispatchError({ type: "SET_ERROR", field: "emailError", value: "" });
    }

    if (!password || password.length < 6) {
      setIsError(true);
      dispatchError({
        type: "SET_ERROR",
        field: "passwordError",
        value: "Password must be at least 6 characters.",
      });
    } else {
      dispatchError({ type: "SET_ERROR", field: "passwordError", value: "" });
    }

    if (
      errorState.nameError == "" &&
      errorState.emailError == "" &&
      errorState.passwordError == "" &&
      name &&
      email &&
      password
    ) {
      localStorage.setItem(email, JSON.stringify({ name, email, password }));
      dispatchUser(
        setIsLoggedIn({ name: name, email: email, password: password })
      );
      navigate("/user");
    }
  }

  return (
    <div className="signUpContainer">
      <div className="signup">
        <div className="signUp">
          <h2>SignUp</h2>
        </div>
        <form className="signupForm">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errorState.nameError && (
            <span className="nameError">{errorState.nameError}</span>
          )}
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorState.emailError && (
            <span className="emailError">{errorState.emailError}</span>
          )}
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorState.passwordError && (
            <span className="passwordError">{errorState.passwordError}</span>
          )}
          <button onClick={(e) => handleSubmit(e)}>Sign Up</button>
        </form>
        <div>
          Already Registered? <Link to="/user/signin">Signin</Link> Here
        </div>
      </div>
    </div>
  );
}

export default SignUp;
