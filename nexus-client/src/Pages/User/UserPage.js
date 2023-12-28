import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import UserQuiz from "../../components/UserQuiz/UserQuiz";

const API_URL = "http://localhost:3000";

const UserPage = () => {
  const { auth } = useAuth();
  const [showQuiz, setShowQuiz] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchQuizCompletionStatus = async () => {
      try {
        if (auth) {
          const response = await axios.get(
            `${API_URL}/quiz-completion/${auth.id}`
          );

          const quizCompleted = response.data.quiz_completed;

          // If the quiz status is retrieved successfully, update the state
          setShowQuiz(!quizCompleted);
        }
      } catch (error) {
        console.error("Error fetching quiz completion status:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success/error
      }
    };

    fetchQuizCompletionStatus();
  }, [auth]);

  const handleQuizCompletion = async () => {
    try {
      // Update quiz completion status in the backend
      await axios.put(`${API_URL}/quiz-completion/${auth.id}`, {
        quiz_completed: true,
      });

      setShowQuiz(false);
    } catch (error) {
      console.error("Error updating quiz completion status:", error);
    }
  };

  const user = auth ? auth.username : "Guest";

  if (loading) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

  return (
    <div className="info-section">
      <h1>Welcome, {user}!</h1>
      <div className="complements">
        {showQuiz && <UserQuiz onComplete={handleQuizCompletion} />}
      </div>
    </div>
  );
};

export default UserPage;
