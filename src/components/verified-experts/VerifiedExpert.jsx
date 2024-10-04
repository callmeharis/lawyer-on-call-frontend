import React from "react";
import "./VerifiedExpert.css";

export default function VerifiedExperts() {
  return (
    <div className="verified-expert-container">
      <div className="verified-expert">
        <div className="verified-expert-title">
          Hundreds of highly rated, verified Legal Experts
          {/* Specialities include Real estate Contracts, Business Contracts,
          Employment Contracts, Construction Contracts, Sales Contracts,
          Insurance Contracts, Franchise Agreements, Licensing Agreements, Loan
          and Credit Agreements, and Settlement Agreements */}
        </div>
        <div className="verified-expert-subtitle">
          Specialities include Real estate Contracts, Business Contracts,
          Employment Contracts, Construction Contracts, Sales Contracts,
          Insurance Contracts, Franchise Agreements, Licensing Agreements, Loan
          and Credit Agreements, and Settlement Agreements
        </div>
        <div className="verified-expert-items">
          <div className="verified-expert-item">
            <div className="verified-expert-item-image">
              <img src="./images/Expert-1.jpg" alt="expert-image" />
            </div>
            <div className="verified-expert-item-name">Richar V.</div>
            <div className="verified-expert-item-title">Solicitor, JD, MBA</div>
            <div className="verified-expert-icon">
              <img src="./images/5Stars.svg" alt="" />
            </div>
            <div className="verified-expert-item-description">
              We give customers expert legal guidance, at any time of the day,
              from anywhere in the world, at a reasonable price.
            </div>
          </div>
          <div className="verified-expert-item">
            <div className="verified-expert-item-image">
              <img src="./images/Expert-2.jpg" alt="expert-image" />
            </div>
            <div className="verified-expert-item-name">Jessica B.</div>
            <div className="verified-expert-item-title">Solicitor, JD, MBA</div>
            <div className="verified-expert-icon">
              <img src="./images/5Stars.svg" alt="" />
            </div>
            <div className="verified-expert-item-description">
              Customers can help us by being specific when asking questions. The
              more information we have, the quicker we can help.
            </div>
          </div>
          <div className="verified-expert-item">
            <div className="verified-expert-item-image">
              <img src="./images/Expert-3.jpg" alt="expert-image" />
            </div>
            <div className="verified-expert-item-name">Neil B.</div>
            <div className="verified-expert-item-title">Solicitor, JD, MBA</div>
            <div className="verified-expert-icon">
              <img src="./images/5Stars.svg" alt="" />
            </div>
            <div className="verified-expert-item-description">
              By answering everyday questions I can ease fears, educate people,
              and empower anyone who needs legal help.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
