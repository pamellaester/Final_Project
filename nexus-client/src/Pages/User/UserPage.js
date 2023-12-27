import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import QuizUser from '../../components/QuizUser/QuizUser';

const API_URL = "http://localhost:3000";

const UserPage = () => {
  const { auth } = useAuth();
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    // Check local storage for a flag indicating whether the quiz has been completed
    const quizCompleted = localStorage.getItem('quizCompleted');

    // If the user is logged in and the quizCompleted flag is not set, show the quiz
    if (auth && !quizCompleted) {
      setShowQuiz(true);
    }
  }, [auth]);

  const handleQuizCompletion = async () => {
    try {
      // Update local storage to indicate the quiz has been completed
      localStorage.setItem('quizCompleted', 'true');
      setShowQuiz(false);
  
      // Send a request to the backend to update the quiz_completed status
      await axios.put(`${API_URL}/quiz-completion/${auth.id}`, { quiz_completed: true });
    } catch (error) {
      console.error('Error updating quiz completion status:', error);
    }
  };

  const user = auth ? auth.username : 'Guest';

  return (
    <div className="info-section">
      <h1>Welcome, {user}!</h1>
      <div className="complements">
        {showQuiz && <QuizUser onComplete={handleQuizCompletion} />}
      </div>
    </div>
  );
};

export default UserPage;
