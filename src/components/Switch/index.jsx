import Form from "react-bootstrap/Form";
import "./Switch.scss";

function SwitchExample(props) {
  return (
    <Form className="switch-container">
      <Form.Check
        type="switch"
        id="custom-switch"
        name="darkmode"
        onChange={props.darkModeHandler}
        label={props.darkMode ? "Dark Mode" : "Light Mode"}
      />
    </Form>
  );
}

export default SwitchExample;
