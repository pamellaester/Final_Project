import React from "react";
import "./CheckListCard.css";

const CheckListCard = ({ data }) => {
  const { date, level, triggers, negative_thoughts } = data;

  return (
    <div className="card">
      <h2>Crises Check</h2>
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <p>Level: {level}</p>

      <div className="triggers">
        <h4>Triggers:</h4>
        <ul>
          {triggers.map((trigger, index) => (
            <li key={index}>{trigger}</li>
          ))}
        </ul>
      </div>

      <div className="negative-thoughts">
        <h4>Negative Thoughts:</h4>
        <ul>
          {negative_thoughts.map((thought, index) => (
            <li key={index}>{thought}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckListCard;
