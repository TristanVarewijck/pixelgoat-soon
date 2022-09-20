import Form from "react-bootstrap/Form";
import "./Switch.scss";

function SwitchExample({ darkModeHandler }) {
  return (
    <Form className="switch-container">
      <Form.Check
        type="switch"
        id="custom-switch"
        name="darkmode"
        onChange={darkModeHandler}
        label={".xyz"}
      />
    </Form>
  );
}

export default SwitchExample;
