import React, { useState } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

const EmailForm = () => {
  const history = useHistory();

  const [values, setValues] = useState({
    user_name: "",
    contact_number: "",
    user_email: "",
    user_message: "",
  });
  
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
        ...values,
        [key]: value,
    }));
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    var name = values.user_name;
    var phone = values.contact_number;
    var email = values.user_email;
    var message = values.user_message;

    axios({
      method: 'post',
      url: 'https://empireicon.com/php-mailer/callback.php',
      data: "action=add&name="+name+"&phone="+phone+"&email="+email+"&message="+message
  }).then(function (response) {
      if (response.data === 'Success') {
        history.push('/thank-you');
      }
    })
    .catch(function (error) {
        alert('Something Went Wrong');
    });
  
  };
  return (
    <div className="appointment-form">
        <h6>Schedule a visit</h6>
      <Form onSubmit={handleOnSubmit}>
        <div className="input-box">
          <Form.Field
            id="user_name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Name"
            value={values.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <Form.Field
            id="contact_number"
            control={Input}
            label="Phone"
            name="contact_number"
            placeholder="Phone"
            value={values.contact_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <Form.Field
            id="user_email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Emai"
            value={values.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <Form.Field
            id="user_message"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Message"
            value={values.user_message}
            onChange={handleChange}
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