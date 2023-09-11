import React from "react";
import "./ContactSection.css";
import './Common.css';

function ContactSection() {
      return <div className="container" id="contact">
        <div className="main-section">
          <h2>Contact</h2>
          <div className="contact-info">
          <form className="contact-form" action="">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name..."></input>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name..."></input>
            <label htmlFor="lname">Email:</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name..."></input>
            <label htmlFor="subject">Subject:</label>
            <textarea id="subject" name="subject" placeholder="Message..."></textarea>
            <input type="submit" value="Submit"></input>
          </form>
          </div>
        </div>
      </div>;
  }
  
export default ContactSection;