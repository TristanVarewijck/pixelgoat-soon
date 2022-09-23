import { useState } from "react";
import "./Subscribe.scss";
import "../Link/Link.scss";
import Form from "react-bootstrap/Form";

function Subscribe(props) {
  const [feedbackInput, setFeedbackInput] = useState("/assets/mail.svg");
  const [feedbackSubmit, setFeedbackSubmit] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    check: "",
  });
  const validEmailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function handleFormData(e) {
    setFormData(function (prevState) {
      const { type, value, name, checked } = e.target;

      if (name === "email") {
        if (!value.includes("@")) {
          setFeedbackInput("/assets/mail-red.svg");
        } else if (value.includes("@") && !value.match(validEmailCheck)) {
          setFeedbackInput("/assets/mail-orange.svg");
        } else if (value.match(validEmailCheck)) {
          setFeedbackInput("/assets/mail-green.svg");
        }
      }
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setFeedbackSubmit((prevState) => {
        return {
          ...prevState,
          message: "Your email must contain a @ sign.",
          icon: "/assets/warning-red.svg",
        };
      });
    } else if (
      formData.email.includes("@") &&
      !formData.email.match(validEmailCheck)
    ) {
      setFeedbackSubmit((prevState) => {
        return {
          ...prevState,
          message: "You Entered a invalid email adress.",
          icon: "/assets/warning-orange.svg",
        };
      });
    } else if (!formData.check) {
      setFeedbackSubmit((prevState) => {
        return {
          ...prevState,
          message: "Please Check the Box before Subscribing!",
          icon: "/assets/arrow-down.svg",
        };
      });
    } else if (formData.check) {
      setHasSubmitted(true);
    }
  }

  return (
    <Form className="subscribe">
      {!hasSubmitted ? (
        <div className="form-contents">
          <Form.Group className="input-group">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={handleFormData}
              name="email"
              value={formData.email}
              style={{
                backgroundImage: `url(${
                  formData.email.length === 0
                    ? "/assets/mail.svg"
                    : feedbackInput
                })`,
              }}
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

          {feedbackSubmit.message && (
            <div className="feedback-submit">
              <img src={feedbackSubmit.icon} alt="state icon" />
              <p>{feedbackSubmit.message}</p>
            </div>
          )}

          <Form.Check
            type="checkbox"
            label="Give us permission to sent You Our Newsletter"
            onChange={handleFormData}
            name="check"
            value={formData.email}
            required
          />
        </div>
      ) : (
        <div className="submit-succes">
          <div className="submit-succes-content">
            <div>
              <small>{formData.email}</small>
              <p>
                Welcome to PixelGoat, keep watching your Imbox to collect your
                <span> Free NFT Welcome Gift!</span>
              </p>
            </div>

            <img src="/assets/party.svg" alt="party-icon" />
          </div>
        </div>
      )}
    </Form>
  );
}

export default Subscribe;
