import "./Header.scss";

import Link from "../Link";
import Switch from "../Switch";

function Header(props) {
  return (
    <header className={`header ${props.darkMode ? "darkmode" : ""}`}>
      <nav>
        <ul>
          <li>
            <img
              src={`/assets/logo${props.darkMode ? "-white" : ""}.svg`}
              alt="Pixelgoat logo"
            />
            <Switch
              darkMode={props.darkMode}
              darkModeHandler={props.darkModeHandler}
            />
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
