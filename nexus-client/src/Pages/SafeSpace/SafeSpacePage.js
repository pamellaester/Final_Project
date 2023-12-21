import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./SafeSpacePage.css"; 

const API_URL = "http://localhost:3000";

const SafeSpacePage = () => {
  const { auth } = useAuth();
  const [formData, setFormData] = useState({
    user_id: auth?.id,
    username: auth?.username,
    feeling: "",
    cause: "",
    negative_thoughts: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/safe-space`, formData);
      console.log(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Share Your Thoughts</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="feeling">How are you feeling?</label>
          <input
            type="text"
            id="feeling"
            name="feeling"
            value={formData.feeling}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="cause">What caused this feeling?</label>
          <input
            type="text"
            id="cause"
            name="cause"
            value={formData.cause}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="negative_thoughts">Any negative thoughts?</label>
          <textarea
            id="negative_thoughts"
            name="negative_thoughts"
            value={formData.negative_thoughts}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default SafeSpacePage;
