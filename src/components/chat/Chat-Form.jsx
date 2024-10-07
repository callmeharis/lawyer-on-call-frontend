import { useState } from "react";
import axios from "axios";
import "./chatbot.css";
import { toast } from "react-toastify";

export default function ChatBox() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!user.firstName || !user.lastName || !user.email || !user.message) {
      toast.warn("Please fill all the fields");
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/sendMessage`,
        user
      );
      toast.success("Message sent successfully");
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <form className="chatBox" onSubmit={submitHandler}>
      <div className="chatBoxHeader">
        <p>Get personalized 1-on-1 expert help</p>
        <div className="profileImage">
          <div>
            <img
              src="./images/ExpertsChat.jpg"
              width={120}
              height={40}
              alt="Three profile pictures"
            />
          </div>
          <div className="profileText">
            <p className="mainText">14 verified lawyers are online now.</p>
            <p className="subText">Across all areas of law</p>
          </div>
        </div>
      </div>

      {/* <div className="chatBoxBody">
        <div className="assistantInfo">
          <img
            src="./images/pearlonline.jpg"
            width={32}
            height={32}
            alt="Assistant"
          />
          <div className="assistantText">
            <p className="name">Pearl Wilson, Lawyer's Assistant</p>
            <p className="message">
              Welcome! How can I help with your legal question?
            </p>
          </div>
        </div>
      </div> */}

      <div className="chatBoxFooter">
        <input
          type="text"
          placeholder="Enter your first name"
          className="input"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          className="input"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your message"
          className="input"
          name="message"
          value={user.message}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}
