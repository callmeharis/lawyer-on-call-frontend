import React from "react";
import { MdOutlineQuestionMark, MdOutlineMessage } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import ChatBox from "../chat/Chat-Form";
import "./hero.css";

export default function Hero() {
  return (
    <section id="hero-section">
      <div className="hero-content">
        <div className="logo">
          <img src="./the-boyd-group-logo3.png" alt="logo" />
          {/* <h1>THE BOYD GROUP</h1> */}
        </div>
        <div className="tagline-with-steps">
          <div className="tagline-container">
            {/* <div className="tagline1">Talk to a Lawyer online now</div> */}
            <div className="tagline1">Contract Law Done Right</div>
            <div className="tagline2">
              Unlimited chats with verified, top-rated lawyers.
            </div>
          </div>
          <div className="steps-container">
            <div className="steps-item">
              <div className="step-icon">
                <MdOutlineQuestionMark />
              </div>
              <p className="step-item-description">Descripe your issue</p>
            </div>
            <div className="steps-item">
              <div className="step-icon">
                <MdOutlineMessage />
              </div>
              <p className="step-item-description">Chat 1:1 with a lawyer</p>
            </div>
            <div className="steps-item">
              <div className="step-icon">
                <RiMoneyDollarCircleLine />
              </div>
              <p className="step-item-description">Save time and money</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-container">
        <ChatBox />
      </div>
    </section>
  );
}
