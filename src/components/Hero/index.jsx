import "./Hero.scss";

import Subscribe from "../Subscribe";

function Hero(props) {
  return (
    <div className={`hero ${props.darkMode ? "darkmode" : ""}`}>
      <small>
        <img
          src={`/assets/bulletpoint${props.darkMode ? "-white" : ""}.svg`}
          alt="bulletpoint icon"
        />
        Pixelgoat Coming soon
      </small>
      <h1>Get Notified before we Launch!</h1>
      <h4>
        Be first to know when a new NFT collection has been opened for Whitelist
        Applications
      </h4>

      <Subscribe />
    </div>
  );
}

export default Hero;
