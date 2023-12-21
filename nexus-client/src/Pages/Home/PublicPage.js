// PublicPage.js
import React from 'react';
import './PublicPage.css';

const PublicPage = () => {
  return (
    <div className="public-page">
      <div className="page-content">
        <h1>Welcome to the Postpartum Phase</h1>
        <div className="section">
          <h2>Introduction</h2>
          <p>
          The postpartum period, also known as the "fourth trimester," refers to the time following childbirth
          when a woman's body undergoes various physical and emotional changes.
        </p>
        </div>
        <div className="section">
          <h2>Phases of Postpartum</h2>
          <p>
          Postpartum is often divided into three phases: the initial postpartum phase (first six weeks),
          the subacute postpartum phase (up to six months), and the delayed postpartum phase (up to a year).
        </p>
        </div>
        <div className="section">
          <h2>Challenges and Care</h2>
          <p>
          Common challenges during the postpartum period include sleep deprivation, breastfeeding difficulties,
          postpartum depression, and physical recovery.
          </p>
          <p>
          It's crucial to seek support from healthcare professionals, family, and friends during this time
          and prioritize self-care.
        </p>
        </div>
        <div className="section">
          <h2>Conclusion</h2>
          <p>
          The postpartum phase is a transformative period requiring physical and emotional adjustments.
          With adequate support and self-care, mothers can navigate this phase more comfortably.
        </p>
        </div>
      </div>
    </div>
  );
};

export default PublicPage;
