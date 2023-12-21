import React, { useState } from 'react';
import './PostpartumDateTracker.css';

const PostpartumDateTracker = () => {
  const [dueDate, setDueDate] = useState('');
  const [daysPostpartum, setDaysPostpartum] = useState(null);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDueDate(selectedDate.toISOString().split('T')[0]);

    // Calculate days postpartum
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - selectedDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    setDaysPostpartum(differenceInDays);
  };

  return (
    <div className="component-container">
      <h2>Postpartum Date Tracker</h2>
      <label htmlFor="dueDate">Enter your due date:</label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={handleDateChange}
      />
      {daysPostpartum !== null && (
        <p>You are {daysPostpartum} days postpartum.</p>
      )}
    </div>
  );
};


export default PostpartumDateTracker;