import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { toBackEnd } from "./twillio.js";

function TextForm() {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleMessageChange(e) {
    setMessage(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    toBackEnd(phoneNumber, message);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            {" "}
            <p className="p3">phoneNumber</p>{" "}
          </Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="phone number"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <p className="p2">message</p>
          </Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="message"
            onChange={(e) => handleMessageChange(e)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="btn">
          send
        </Button>
      </Form>
    </>
  );
}

export default TextForm;
