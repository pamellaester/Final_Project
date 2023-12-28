import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import UserQuiz from "../../components/UserQuiz/UserQuiz";

const API_URL = "http://localhost:3000";

const UserPage = () => {
  const { auth } = useAuth();
  const [showQuiz, setShowQuiz] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizCompletionStatus = async () => {
      try {
        if (auth) {
          const response = await axios.get(
            `${API_URL}/quiz-completion/${auth.id}`
          );

          const quizCompleted = response.data.quiz_completed;

          setShowQuiz(!quizCompleted);
        }
      } catch (error) {
        console.error("Error fetching quiz completion status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizCompletionStatus();
  }, [auth]);

  const handleQuizCompletion = async () => {
    try {
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
    return <div>Loading...</div>;
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
