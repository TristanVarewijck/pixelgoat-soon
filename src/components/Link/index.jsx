import "./Link.scss";

function Link(props) {
  return (
    <a
      className={`link ${props.type} ${props.hasIcon ? "--icon" : ""}`}
      href={props.url}
    >
      <span>{props.text}</span>
      {props.hasIcon && (
        <img className="button-icon" src={props.icon} alt="button icon" />
      )}
    </a>
  );
}

export default Link;
