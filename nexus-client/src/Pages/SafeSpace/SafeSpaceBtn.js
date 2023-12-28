import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./SafeSpaceBtn.css";

const API_URL = "http://localhost:3000";

const SafeSpaceBtn = () => {
  const { auth } = useAuth();
  console.log(auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_id: auth?.id,
    username: auth?.username,
    date: "",
    level: "",
    triggers: [""],
    negative_thoughts: [""],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTrigger = () => {
    // Create a new array with the existing triggers and add an empty string as a new trigger
    const updatedTriggers = [...formData.triggers, ""];
    setFormData({ ...formData, triggers: updatedTriggers });
  };

  const handleTriggerChange = (index, value) => {
    // Update the triggers array with the modified value at the specified index
    const updatedTriggers = [...formData.triggers];
    updatedTriggers[index] = value;
    setFormData({ ...formData, triggers: updatedTriggers });
  };

  const handleDeleteTrigger = (index) => {
    const updatedTriggers = [...formData.triggers];
    updatedTriggers.splice(index, 1);
    setFormData({ ...formData, triggers: updatedTriggers });
  };

  const handleAddNegativeThought = () => {
    const updatedNegativeThoughts = [...formData.negative_thoughts, ""];
    setFormData({ ...formData, negative_thoughts: updatedNegativeThoughts });
  };

  const handleNegativeThoughtChange = (index, value) => {
    const updatedNegativeThoughts = [...formData.negative_thoughts];
    updatedNegativeThoughts[index] = value;
    setFormData({ ...formData, negative_thoughts: updatedNegativeThoughts });
  };

  const handleDeleteNegativeThought = (index) => {
    const updatedNegativeThoughts = [...formData.negative_thoughts];
    updatedNegativeThoughts.splice(index, 1);
    setFormData({ ...formData, negative_thoughts: updatedNegativeThoughts });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/safe-space`, formData);
      console.log(response.data);
      console.log(response);
      console.log(formData);

      setSubmitted(true);
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {!submitted ? (
        <div className="sf-section info-section">
          <h2>Crisis Check</h2> <br/>
          <form onSubmit={handleSubmit} className="form">
            <div className="column-btn">
              <div className="input-group">
                <label htmlFor="date">Date</label>
                <input
                  type="datetime-local"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="level">Level</label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                >
                  <option value="">Select Level</option>
                  <option value="Mild">Mild</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Severe">Severe</option>
                  <option value="Panic-Level">Panic-Level</option>
                </select>
              </div>
            </div>

            {/* Negative thoughts input group */}
            <div className="input-item">
              <div className="column-btn">
                <div className="input-group">
                  <label htmlFor="triggers">Triggers</label>
                  {formData.triggers.map((trigger, index) => (
                    <div key={index} className="btn-box">
                      <input
                        type="text"
                        value={trigger}
                        onChange={(e) =>
                          handleTriggerChange(index, e.target.value)
                        }
                      />
                      <div>
                        <button
                          className="btn"
                          type="button"
                          onClick={handleAddTrigger}
                        >
                          +
                        </button>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => handleDeleteTrigger(index)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}

                  <label htmlFor="negative_thoughts">Negative Thoughts</label>
                  {formData.negative_thoughts.map((thought, index) => (
                    <div key={index} className="btn-box">
                      <input
                        type="text"
                        value={thought}
                        onChange={(e) =>
                          handleNegativeThoughtChange(index, e.target.value)
                        }
                      />
                      <div>
                        <button
                          type="button"
                          className="btn"
                          onClick={handleAddNegativeThought}
                        >
                          +
                        </button>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => handleDeleteNegativeThought(index)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button type="submit" className="submit-btn">
            Save
          </button>
          </form>
          {/* Submit button */}
        </div>
      ) : (
        <div className="notification">
          <p>Added to your checklist!</p>
        </div>
      )}
    </>
  );
};

export default SafeSpaceBtn;
