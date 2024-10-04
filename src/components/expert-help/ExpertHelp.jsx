import React from "react";
import "./ExpertHelp.css";

export default function ExpertHelp() {
  return (
    <div className="expert-help-color-container">
      <div className="expert-help-container">
        <div className="expert-help">
          <div className="expert-help-title">
            {/* What can the Legal Experts do for you? */}
            Your team of lawyers is ready to help you in minutes with any legal
            question, plus:
          </div>
          {/* <div className="expert-help-specialities">
            Your team of lawyers is ready to help you in minutes with any legal
            question, plus:
          </div> */}
          <div className="expert-help-flexitems">
            <div className="expert-help-item">
              <div className="expert-help-item-image">
                <img src="./images/Gavel.svg" alt="expert-help-image" />
              </div>
              <div className="expert-help-item-description">
                Protect your legal rights
              </div>
            </div>
            <div className="expert-help-item">
              <div className="expert-help-item-image">
                <img src="./images/Footsteps.svg" alt="expert-help-image" />
              </div>
              <div className="expert-help-item-description">
                Take the right next legal steps
              </div>
            </div>
            <div className="expert-help-item">
              <div className="expert-help-item-image">
                <img
                  src="./images/MagnifyingGlass.svg"
                  alt="expert-help-image"
                />
              </div>
              <div className="expert-help-item-description">
                Ensure accuracy of legal documents
              </div>
            </div>
            <div className="expert-help-item">
              <div className="expert-help-item-image">
                <img src="./images/Money.svg" alt="expert-help-image" />
              </div>
              <div className="expert-help-item-description">
                Avoid high-priced law firms
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
