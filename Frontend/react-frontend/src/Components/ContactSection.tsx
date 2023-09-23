import React from "react";
import "./ContactSection.css";
import './Common.css';

function ContactSection() {

  async function contactSubmission(e:any){
    const form = e.target.form;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    //Check data validity.
    if (formJson.subject == ""){
      alert("Please provide at least a message.")
      return;
    }

    //I can thank https://stackoverflow.com/questions/68831782/sending-email-in-javascript for this
    let message:string = "";
    if(formJson.firstname != "")
    {
      message += "From " + formJson.firstname;
      if(formJson.lastname != ""){
        message += " " + formJson.lastname;
      }
    }
    if(message != ""){
      message += ": ";
    }

    message += formJson.subject;
    
    const link = "mailto:ephallbusiness@gmail.com"
    + "?subject=" + encodeURIComponent("Game Dev Portfolio Inquiry")
    + "&body=" + encodeURIComponent(message);

    window.location.href = link;
  }

      return <div className="container" id="contact">
        <div className="main-section">
          <h2>Contact</h2>
          <div className="contact-info">
          <form className="contact-form" action="" onSubmit={e => {e.preventDefault();}}>
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name..."></input>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name..."></input>
            <label htmlFor="subject">Subject:</label>
            <textarea id="subject" name="subject" placeholder="Message..."></textarea>
            <input type="submit" value="Submit" onClick={contactSubmission}></input>
          </form>
          </div>
        </div>

        <a href="mailto:ephallbusiness@gmail.com">email</a>
      </div>;
  }
  
export default ContactSection;