import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

import useAuth from "../../hooks/useAuth";
import axios from "axios";

const API_URL = "http://localhost:3000";

const QuizUser = ({ onComplete }) => {
    const { auth } = useAuth();
    // const navigate = useNavigate();

  const [quizResponses, setQuizResponses] = useState({
    user_id: auth?.id,
    name: "",
    age_range: "",
    localization: "",
    gender: "",
    kids_count: "",
  });

  console.log(quizResponses);

  const [section, setSection] = useState(1);
  const [countries, setCountries] = useState([]);

  const handleQuizResponse = (question, response) => {
    setQuizResponses({ ...quizResponses, [question]: response });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleSubmitQuiz = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/user/${auth.id}`,
        quizResponses
        
      );
      console.log("handleSubmitQuiz:", response.data);
        console.log(response);
      onComplete();
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const sections = [
    {
      key: "name",
      question: "What is your name?",
    },
    {
      key: "age_range",
      question: "Select your age range:",
      options: ["18-25", "26-35", "36-45", "46+"],
    },
    {
      key: "localization",
      question: "Choose your location:",
      options: countries.map((country) => country?.name?.common),
    },
    {
      key: "gender",
      question: "Select your gender:",
      options: ["Male", "Female", "Non-binary", "Other"],
    },
    {
      key: "kids_count",
      question: "How many kids do you have?",
      options: ["1", "2", "3", "4", "4+"],
    },
  ];

  const handleContinue = () => {
    setSection(section + 1);
  };

  const renderSection = (sectionIndex) => {
    const currentSection = sections[sectionIndex];
    return (
      <div key={currentSection.key} className="quiz-section">
        <h2>{currentSection.question}</h2>
        {currentSection.options ? (
          currentSection.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={currentSection.key}
                value={option}
                checked={quizResponses[currentSection.key] === option}
                onChange={(e) =>
                  handleQuizResponse(currentSection.key, e.target.value)
                }
              />
              {option}
            </label>
          ))
        ) : (
          <input
            type="text"
            value={quizResponses[currentSection.key]}
            onChange={(e) =>
              handleQuizResponse(currentSection.key, e.target.value)
            }
          />
        )}
        {sectionIndex < sections.length - 1 && (
          <button onClick={handleContinue}>Continue</button>
        )}
        {sectionIndex === sections.length - 1 && (
          <button onClick={handleSubmitQuiz}>Finish</button>
        )}
      </div>
    );
  };

  return auth.id ? <div>{renderSection(section - 1)}</div> : <p>Loading...</p>;
};

export default QuizUser;
