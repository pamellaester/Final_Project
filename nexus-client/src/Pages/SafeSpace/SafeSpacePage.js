import React from "react";
// import useAuth from "../../hooks/useAuth";
import "./SafeSpacePage.css";
import welcome from "../../assets/welcome.png";

const SafeSpacePage = () => {
  // const { auth } = useAuth();

  return (
    <>
      <div className="page-content">
        <img
          src={welcome}
          alt="welcome"
          className="info-section section-welcome floating-element"
        />
        <h1 className="welc">TO SAFE PLACE</h1>

        <div className="info-section">
          <h3>Understanding Postpartum Anxiety</h3>
          <p>
            Hey there, brave mom! We know that the journey of motherhood comes
            with its own set of challenges, and postpartum anxiety is one of
            them. It's more common than you might think, affecting around 10% of
            new moms.
          </p>

          <p>
            Remember, you're not alone, and there is support available. If you
            find that your anxiety is becoming overwhelming, seeking
            professional help is a courageous step. Therapists, counselors, and
            support groups can provide valuable assistance.
          </p>

          <p>
            It's okay to prioritize your mental health. Safe space is here for
            you whenever you need to take a moment for yourself. You're doing an
            incredible job, and we're here to support you every step of the way.
            💜
          </p>
        </div>

        <div className="info-section">
          <h3>Coping Strategies</h3>
          <p>Here are some practical tips to help ease postpartum anxiety:</p>
          <ul>
            <li>Rest: Prioritize sleep and rest whenever possible.</li>
            <li>
              Hydration and Nutrition: Take care of your body with healthy food
              and plenty of water.
            </li>
            <li>
              Delegate Tasks: Don't be afraid to ask for help. Let others lend a
              hand.
            </li>
            <li>
              Talk About It: Share your thoughts and feelings with a trusted
              friend who understands.
            </li>
            <li>
              Communicate with Your Partner: Open and honest conversations can
              make a significant difference.
            </li>
          </ul>
        </div>
        <div className="info-section">
          <div className="cute-card ">
            <h2>How to Use</h2>
            <p>
              The form is designed to capture crucial details about your mental
              state during a crisis{" "}
            </p>
            <ul>
              <li>
                <strong>Date and Severity Level:</strong> Choose the date and
                time of the crisis incident from the date-time picker. Select
                the appropriate severity level from the dropdown list.
              </li>
              <li>
                <strong>Triggers:</strong> Input triggers that may have led to
                the crisis. Add multiple triggers by clicking the "+" button.
                Remove any trigger by clicking the "-" button beside it.
              </li>
              <li>
                <strong>Negative Thoughts:</strong> Input negative thoughts
                experienced during the crisis. Add multiple thoughts by clicking
                the "+" button. Delete specific thoughts by clicking the "-"
                button.
              </li>
              <li>
                <strong>Save:</strong> After filling in all required
                information, click the "Save" button. This action will store
                your data and display a confirmation.
              </li>
              <li>
                <strong>Post-Save:</strong> After a brief moment, the system
                will automatically take you back to where you started.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafeSpacePage;
