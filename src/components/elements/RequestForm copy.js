import React from "react";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_283dje2";
const TEMPLATE_ID = "template_rd8x0a9";
const USER_ID = "user_2ZsbsuUZVs6XbeFA6nqmW";

// const SERVICE_ID = "service_tbnekrr";
// const TEMPLATE_ID = "template_ub4q2bn";
// const USER_ID = "user_JUni0aUDcak4x0ceuTuKz";

const RequestForm = () => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        alert(' Successfully Sent Email');
        window.location.href = "https://empireicon.com/thank-you";
      }, (error) => {
        console.log(error.text);
        alert('Not Successfully Sent Email')
      });
      e.target.reset()
    };
 
    
  return (
    <div className="appointment-form">
      <h6>Schedule a visit</h6>
      <form onSubmit={handleOnSubmit}>
        {/* IF MAIL SENDING UNSUCCESSFULL */}
        <span className="error">
          E-mail must be valid and message must be longer than 1 character.
        </span>
        <div className="input-box">
          <input id="user_name" type="text" name="user_name" placeholder="Name"
          required
          />
        </div>

        <div className="input-box">
          <input
            id="contact_number"
            type="text"
            name="contact_number"
            placeholder="Phone"
            required
          />
        </div>
        <div className="input-box">
          <input
            id="user_email"
            type="text"
            name="user_email"
            placeholder="Email"
            required
          />
        </div>

        <div className="input-box">
          <textarea
            id="user_message"
            name="user_message"
            placeholder="Message"
            required
          />
        </div>
        {/* IF MAIL SENT SUCCESSFULLY */}
        <span className="success">
          Your message has been sent successfully.
        </span>
        <div className="input-box">
          <input
            className="button"
            id="submit"
            type="submit"
            defaultValue="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
