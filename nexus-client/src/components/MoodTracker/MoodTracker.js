import React, { useState } from 'react';
import './MoodTracker.css'

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  const moodEmojis = ['😊', '😐', '😢', '😡', '😍', '🥳', '😴', '😎', '🤯', '🤔'];

  return (
    <div className="mood-tracker-container">
      <p>Select your Mood:</p>
      <div className="mood-icons">
        {moodEmojis.map((emoji, index) => (
          <span
            key={index}
            className={`mood-icon ${selectedMood === emoji ? 'selected' : ''}`}
            role="img"
            aria-label={`Mood ${index}`}
            onClick={() => handleMoodSelection(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      {selectedMood && (
        <p className="selected-mood">Selected Mood: {selectedMood}</p>
      )}
    </div>
  );
}

export default MoodTracker;


