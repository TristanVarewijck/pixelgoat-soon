import { useContext } from "react";
import "./Header.scss";
import Link from "../Link";
import Switch from "../Switch";
import { DarkTheme } from "../../App";

function Header({ darkModeHandler }) {
  const darkMode = useContext(DarkTheme);
  return (
    <header className={`header ${darkMode ? "darkmode" : ""}`}>
      <nav>
        <ul>
          <li>
            <img
              src={`/assets/logo${darkMode ? "-white" : ""}.svg`}
              alt="Pixelgoat logo"
            />
            <Switch darkMode={darkMode} darkModeHandler={darkModeHandler} />
          </li>
          <li>
            <Link
              type="--primary"
              hasIcon={true}
              icon="/assets/twitter-icon.svg"
              text="Follow us on Twitter"
              url="https://twitter.com/pixelgoatxyz"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
