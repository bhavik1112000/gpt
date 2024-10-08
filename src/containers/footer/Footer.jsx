import React from 'react';
import gptLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt_footer section_padding">
    <div className="gpt_footer-heading">
      <h1 className="gradient_text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt_footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt_footer-links">
      <div className="gpt_footer-links-logo">
        <img src={gptLogo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt_footer-links-div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt_footer-links-div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt_footer-links-div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt_footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;