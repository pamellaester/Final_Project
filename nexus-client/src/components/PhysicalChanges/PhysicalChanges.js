import React, { useState } from "react";
import "./PhysicalChanges.css";

const PhysicalChanges = () => {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(50);
  const [waist, setWaist] = useState(50);
  const [hips, setHips] = useState(50);
  const [otherChanges, setOtherChanges] = useState("");

  const handleInputChange = (value, setter) => {
    setter(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Weight:", weight);
    console.log("Height:", height);
    console.log("Waist:", waist);
    console.log("Hips:", hips);
    console.log("Other Changes:", otherChanges);
  };

  return (
    <div className="physical-changes-container">
      <h2>Physical Changes After Labor</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="weight">Weight Change:</label>
          <input
            type="range"
            id="weight"
            min="0"
            max="100"
            value={weight}
            onChange={(e) =>
              handleInputChange(parseInt(e.target.value), setWeight)
            }
            className="custom-slider"
          />
          <span>{weight}</span>
        </div>
        <div className="input-field">
          <label htmlFor="height">Height Change:</label>
          <input
            type="range"
            id="height"
            min="0"
            max="100"
            value={height}
            onChange={(e) =>
              handleInputChange(parseInt(e.target.value), setHeight)
            }
            className="custom-slider"
          />
          <span>{height}</span>
        </div>
        <div className="input-field">
          <label htmlFor="waist">Waist Change:</label>
          <input
            type="range"
            id="waist"
            min="0"
            max="100"
            value={waist}
            onChange={(e) =>
              handleInputChange(parseInt(e.target.value), setWaist)
            }
            className="custom-slider"
          />
          <span>{waist}</span>
        </div>
        <div className="input-field">
          <label htmlFor="hips">Hips Change:</label>
          <input
            type="range"
            id="hips"
            min="0"
            max="100"
            value={hips}
            onChange={(e) =>
              handleInputChange(parseInt(e.target.value), setHips)
            }
            className="custom-slider"
          />
          <span>{hips}</span>
        </div>
        <div className="input-field">
          <label htmlFor="otherChanges">Other Changes:</label>
          <textarea
            id="otherChanges"
            value={otherChanges}
            onChange={(e) => setOtherChanges(e.target.value)}
            placeholder="Enter any other changes"
          ></textarea>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default PhysicalChanges;
