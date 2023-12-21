import React from 'react';
import './IconProfile.css'; 

const IconProfile = ({ name, daysPostpartum, otherDetails }) => {
  return (
    <div className="user-info">
      <h2>User Information</h2>
      <div className="user-details">
        <div className="user-circle">
          {daysPostpartum} days
        </div>
        <p>Name: {name}</p>
        <p>Days Postpartum: {daysPostpartum}</p>
        <p>Other Details: {otherDetails}</p>
      </div>
    </div>
  );
}

export default IconProfile;
