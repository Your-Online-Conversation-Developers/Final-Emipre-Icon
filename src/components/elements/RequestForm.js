import React from "react";

const RequestForm = () => {
  return (
    <div className="appointment-form">
      <h6>Schedule a visit</h6>
      <form>
        {/* IF MAIL SENDING UNSUCCESSFULL */}
        <span className="error">
          E-mail must be valid and message must be longer than 1 character.
        </span>
        <div className="input-box">
          <input id="cf-name" type="text" name="cf-name" placeholder="Name" />
        </div>
        <div className="input-box">
          <input
            id="cf-email"
            type="text"
            name="cf-email"
            placeholder="Email"
          />
        </div>
        <div className="input-box">
          <input
            id="cf-phone"
            type="text"
            name="cf-phone"
            placeholder="Phone"
          />
        </div>
        <div className="input-box">
          <textarea
            id="cf-message"
            name="cf-message"
            placeholder="Message"
            defaultValue={""}
          />
        </div>
        {/* IF MAIL SENT SUCCESSFULLY */}
        <span className="success">
          Your message has been sent successfully.
        </span>
        <div className="input-box">
          <input
            className="button"
            id="cf-submit"
            name="submit"
            type="button"
            defaultValue="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
