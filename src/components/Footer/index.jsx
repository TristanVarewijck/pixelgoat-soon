import { useContext } from "react";

import "./Footer.scss";
import { DarkTheme } from "../../App";

function Footer() {
  const darkMode = useContext(DarkTheme);
  const socialLinks = {
    twitterLink: "https://twitter.com/pixelgoatxyz",
    discordLink: "",
    telegramLink: "",
  };

  return (
    <footer className={`footer ${darkMode ? "darkmode" : ""}`}>
      <ul className="social-links">
        <li>
          <h6>Follow Us:</h6>
        </li>
        <li>
          <a href={socialLinks.twitterLink} rel="noreferrer" target="_blank">
            <img
              src={`/assets/twitter${darkMode ? "-white" : ""}.svg`}
              alt="twitter icon"
            />
          </a>
        </li>
        <li>
          <a href={socialLinks.discordLink} rel="noreferrer" target="_blank">
            <img
              src={`/assets/discord${darkMode ? "-white" : ""}.svg`}
              alt="discord icon"
            />
          </a>
        </li>
        <li>
          <a href={socialLinks.telegramLink} rel="noreferrer" target="_blank">
            <img
              src={`/assets/telegram${darkMode ? "-white" : ""}.svg`}
              alt="telegram icon"
            />
          </a>
        </li>
      </ul>
      <img
        src={`/assets/logo${darkMode ? "-white" : ""}.svg`}
        alt="pixelgoat logo"
      />
    </footer>
  );
}

export default Footer;
