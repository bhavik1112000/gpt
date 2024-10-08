import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt_header section_padding" id="home">
      <div className="gpt_header-content">
        <h1 className="gradient_text">
          {" "}
          Let's Build Something Amazing With GPT OpenAI{" "}
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt_header-content-input">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="gpt_header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt_header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
