import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { useHistory } from "react-router";

const SERVICE_ID = "service_283dje2";
const TEMPLATE_ID = "template_rd8x0a9";
const USER_ID = "user_2ZsbsuUZVs6XbeFA6nqmW";

// const SERVICE_ID = "service_tbnekrr";
// const TEMPLATE_ID = "template_ub4q2bn";
// const USER_ID = "user_JUni0aUDcak4x0ceuTuKz";

const EmailForm = () => {
  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        history.push('/thank-you');
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong");
      }
    );
    e.target.reset();
  };
  return (
    <div className="appointment-form" id="appointment-form">
        <h6>Schedule a visit</h6>
      <Form onSubmit={handleOnSubmit}>
        <div className="input-box">
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Name…"
            required
          />
        </div>
        <div className="input-box">
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Phone"
            name="contact_number"
            placeholder="Phone…"
            required
          />
        </div>
        <div className="input-box">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
          />
        </div>
        <div className="input-box">
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Message…"
            required
          />
        </div>
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default EmailForm;
