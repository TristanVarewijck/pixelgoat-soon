import { useContext } from "react";
import "./Hero.scss";
import Subscribe from "../Subscribe";
import { DarkTheme } from "../../App";
import DisplayCard from "../DisplayCard";

function Hero() {
  const darkMode = useContext(DarkTheme);
  return (
    <div className={`hero ${darkMode ? "darkmode" : ""}`}>
      <div>
        <small>
          <img
            src={`/assets/bulletpoint${darkMode ? "-white" : ""}.svg`}
            alt="bulletpoint icon"
          />
          Pixelgoat Coming soon
        </small>
        <h1>Get Notified before we Launch!</h1>
        <h4>
          Be first to know when a new NFT collection has been opened for
          Whitelist Applications
        </h4>
        <Subscribe />
      </div>

      <div className="cards-group">
        <DisplayCard />
        <DisplayCard />
      </div>
    </div>
  );
}

export default Hero;
