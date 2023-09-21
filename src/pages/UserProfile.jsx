import React from "react";
import UserDetails from "../components/UserDetails";
import SignIn from "../components/SignIn";

function UserProfile() {
  return (
    <div>
      {true ? (
        <UserDetails />
      ) : (
        <>
          <SignIn />
        </>
      )}
    </div>
  );
}

export default UserProfile;
