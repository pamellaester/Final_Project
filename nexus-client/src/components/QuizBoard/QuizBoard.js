import React, { useState } from "react";
import "./QuizBoard.css";

const QuizBoard = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    "How are you feeling today?",
    "Are you getting enough rest?",
    "Have you been able to eat well?",
    "Are you experiencing any pain or discomfort?",
    "Do you feel supported by those around you?",
  ];

  const handleNextQuestion = (answer) => {
    setAnswers([...answers, answer]);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("Quiz completed. Answers:", answers);
    }
  };

  return (
    <div className="quiz-container">
      <h2>How Are You Feeling?</h2>
      <div className="question">
        <p>{questions[questionIndex]}</p>
      </div>
      <div className="answers">
        <button onClick={() => handleNextQuestion("Good")}>Good</button>
        <button onClick={() => handleNextQuestion("Okay")}>Okay</button>
        <button onClick={() => handleNextQuestion("Not so good")}>
          Not so good
        </button>
      </div>
    </div>
  );
};

export default QuizBoard;
