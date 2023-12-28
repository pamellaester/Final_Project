import React from "react";
import "./IconProfile.css";
import useAuth from "../../hooks/useAuth";
import PostpartumDateTracker from "../../components/PostpartumDateTracker/PostpartumDateTracker";
import MoodTracker from "../../components/MoodTracker/MoodTracker";

const IconProfile = () => {
  const { auth } = useAuth();

  return (
    <div className="user-info">
      <h2>User Information</h2>
      <p>Name: {auth.username}</p>
      <p>Age: </p>
      <p>Gender: </p>
      <div className="user-details">
        <div className="user-circle">
          <PostpartumDateTracker />
        </div>
        <MoodTracker />
      </div>
    </div>
  );
};

export default IconProfile;
