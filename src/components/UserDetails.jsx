import React, { useEffect, useState } from "react";
import "./userDetails.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "../store/userSlice";

function UserDetails() {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.userStore.isLoggedIn);
  const userData = useSelector((state) => state.userStore.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/user/signin");
    }
  }, [isLoggedIn, navigate]);

  function handleSignout() {
    dispatch(setIsLoggedIn());
  }

  return (
    <>
      {isLoggedIn ? (
        <div className="userDetails">
          <h1>UserDetails</h1>
          <div className="userInfo">
            <span>{userData.name}</span>
            <span>{userData.email}</span>
          </div>
          <div>
            <div className="userDetailsButton">
              <button
                onClick={() => {
                  handleSignout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default UserDetails;
