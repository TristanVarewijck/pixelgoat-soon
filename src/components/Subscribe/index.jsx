import { useState } from "react";
import "./Subscribe.scss";
import "../Link/Link.scss";
import Form from "react-bootstrap/Form";

function Subscribe(props) {
  const [formData, setFormData] = useState({
    email: "",
    check: "",
  });

  function handleFormData(e) {
    setFormData(function (prevState) {
      const { type, value, name, checked } = e.target;
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <Form className="subscribe">
      <Form.Group className="input-group">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={handleFormData}
          name="email"
          value={formData.email}
          required
        />

        <button
          className={`submit --primary ${props.hasIcon ? "--icon" : ""}`}
          onClick={submitHandler}
        >
          Subscribe
          <img src="/assets/arrow.svg" alt="arrow icon" />
        </button>
      </Form.Group>

      <Form.Check
        type="checkbox"
        label="Give us permission to sent You Our Newsletter"
        onChange={handleFormData}
        name="checkbox"
        value={formData.email}
        required
      />
    </Form>
  );
}

export default Subscribe;
