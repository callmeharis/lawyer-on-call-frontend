import React from "react";
import "./Footer.css";

export default function FooterComponent() {
  return (
    <div className="footer-container">
      <div className="page-footer">
        <div className="powered-by">Powered by JustAnswer</div>
        <div className="copyright">
          © 2018-2024 askalawyeroncall.com. All rights reserved.
        </div>
        <br />
        <div className="tos">
          <div className="transcend-link-wrapper">
            <a href="" className="tos-item">
              Your Privacy Choices
            </a>
            <img
              src="./images/privacyoptions.svg"
              alt="privacy options"
              style={{ marginLeft: "4px", width: "29px", height: "14px" }}
            />
          </div>
          <a href="" className="tos-item">
            Privacy Policy
          </a>
          <a href="" className="tos-item">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
