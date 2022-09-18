import "./Footer.scss";

function Footer(props) {
  const socialLinks = {
    twitterLink: "https://twitter.com/pixelgoatxyz",
    discordLink: "",
    telegramLink: "",
  };

  return (
    <footer className={`footer ${props.darkMode ? "darkmode" : ""}`}>
      <ul className="social-links">
        <li>
          <a href={socialLinks.twitterLink} rel="noreferrer" target="_blank">
            <img
              src={`/assets/twitter${props.darkMode ? "-white" : ""}.svg`}
              alt="twitter icon"
            />
          </a>
        </li>
        <li>
          <a href={socialLinks.discordLink} rel="noreferrer" target="_blank">
            <img
              src={`/assets/discord${props.darkMode ? "-white" : ""}.svg`}
              alt="discord icon"
            />
          </a>
        </li>
        <li>
          <a href={socialLinks.telegramLink} rel="noreferrer" target="_blank">
            <img
              src={`/assets/telegram${props.darkMode ? "-white" : ""}.svg`}
              alt="telegram icon"
            />
          </a>
        </li>
      </ul>
      <img
        src={`/assets/logo${props.darkMode ? "-white" : ""}.svg`}
        alt="pixelgoat logo"
      />
    </footer>
  );
}

export default Footer;
