import { useContext } from "react";
import Form from "react-bootstrap/Form";
import "./Switch.scss";
import { DarkTheme } from "../../App";

function SwitchExample({ darkModeHandler }) {
  const darkMode = useContext(DarkTheme);
  return (
    <Form className="switch-container">
      <Form.Check
        type="switch"
        id="custom-switch"
        name="darkmode"
        onChange={darkModeHandler}
        label={darkMode ? "Dark Mode" : "Light Mode"}
      />
    </Form>
  );
}

export default SwitchExample;
