import React, { useState } from 'react';

const WeeklyTracker = () => {
  const [entries, setEntries] = useState({
    Sunday: '',
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
  });

  const handleInputChange = (day, value) => {
    setEntries({ ...entries, [day]: value });
  };

  return (
    <div className="weekly-tracker-container">
      <h2>Weekly Tracker</h2>
      <table className="weekly-table">
        <thead>
          <tr>
            {Object.keys(entries).map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(entries).map((day) => (
              <td key={day}>
                <input
                  type="text"
                  value={entries[day]}
                  onChange={(e) => handleInputChange(day, e.target.value)}
                  placeholder={`Add ${day}'s entry...`}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WeeklyTracker;



