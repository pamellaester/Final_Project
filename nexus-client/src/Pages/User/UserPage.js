import React, { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import IconProfile from "../../components/IconProfile/IconProfile";
import MoodTracker from "../../components/MoodTracker/MoodTracker";
import PhysicalChanges from "../../components/PhysicalChanges/PhysicalChanges";
import PostpartumDateTracker from "../../components/PostpartumDateTracker/PostpartumDateTracker";
import QuizBoard from "../../components/QuizBoard/QuizBoard";
import SafeSpaceButton from "../../components/SafeSpaceButton/SafeSpaceButton";
import WeeklyTracker from "../../components/WeeklyTracker/WeeklyTracker";
import "./UserPage.css";


const UserPage = () => {
  const { auth } = useContext(AuthContext);

  const user = auth ? auth.username : "Guest";
  console.log(auth)

  return (
    <div>
       <h1>Welcome, {user}!</h1>
      <div className="complements">
        <IconProfile />
        <MoodTracker />
        <PhysicalChanges />
        <PostpartumDateTracker />
        <QuizBoard />
        <SafeSpaceButton />
        <WeeklyTracker />
        {/* Include other user details or components as needed */}
      </div>
    </div>
  );
};

export default UserPage;