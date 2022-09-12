import "./Link.scss";

function Link({ text, type, hasIcon, icon }) {
  return (
    <a className={`link ${type} --icon`}>
      <span>{text}</span>
      {hasIcon && <img className="button-icon" src={icon} alt="button icon" />}
    </a>
  );
}

export default Link;
